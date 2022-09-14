import { View, Text, SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";
import ApplyService from "./ApplyService";
import BottomButton from "../../../components/common/BottomButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { colors, fontSizes } from "../../../theme";
import {
  getApplyList,
  serviceFailed,
  serviceSuccess,
} from "../../../api/api.member";
import { getUserId } from "../../../components/Storage";

const ApplyList = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [applyArr, setApplyArr] = useState([]);
  const [sendData, setSendData] = useState({ endProcess: "" });

  useEffect(() => {
    const fetchData = async () => {
      const user = await getUserId();
      await getData(user);
    };

    fetchData();
  }, [navigation]);

  useEffect(() => {
    if (sendData.endProcess === "end") {
      const data = { apply_id: sendData.id, overtime: sendData.text };
      serviceSuccess(data).then((data) => {
        navigation.navigate("Result", { endData: sendData });
      });
    } else if (sendData.endProcess === "cancel") {
      const data = {
        apply_id: sendData.id,
        reason: sendData.text !== "" ? sendData.text : sendData.checkReason,
      };
      serviceFailed(data).then((data) => {
        navigation.navigate("Result", { endData: sendData });
      });
    }
  }, [sendData, navigation]);

  const getData = async (user) => {
    await getApplyList(user)
      .then((data) => {
        if (data.isSuccess) {
          setApplyArr(data.result);
        } else {
          setApplyArr("error");
        }
        setLoading(false);
      })
      .catch((error) => console.error(error));
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      {applyArr.length === 0 ? (
        <View
          style={{
            height: "100%",
            marginTop: -84,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: colors.pageTextGray1,
              letterSpacing: -0.01,
              fontSize: fontSizes.smallInfo,
              textAlign: "center",
            }}
          >
            {loading ? "로딩 중..." : `아직 활동 지원을\n신청하지 않았어요!`}
          </Text>
        </View>
      ) : (
        <KeyboardAwareScrollView
          contentContainerStyle={{
            width: "100%",
            alignItems: "center",
            paddingBottom: 120,
            paddingTop: 24,
          }}
        >
          {applyArr.map((applyArr) => (
            <ApplyService
              key={applyArr.apply_id}
              apply={applyArr}
              sendData={setSendData}
              navigate={(n) => {
                navigation.navigate(n.route, { detailData: n.detailData });
              }}
            />
          ))}
        </KeyboardAwareScrollView>
      )}

      <BottomButton
        text="홈 화면으로 돌아가기"
        onPress={() => navigation.popToTop()}
      />
    </SafeAreaView>
  );
};

export default ApplyList;
