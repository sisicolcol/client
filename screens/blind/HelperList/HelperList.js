import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import HelperService from "./HelperService";
import BottomButton from "../../../components/common/BottomButton";
import { colors } from "../../../theme";
import { getApplyHelperList } from "../../../api/api.member";
import { getUserId } from "../../../components/Storage";

const HelperList = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [helperArr, setHelperArr] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const user = await getUserId();
      await getData(user);
    };

    fetchData();
  }, [navigation]);

  const getData = async (user) => {
    await getApplyHelperList(user)
      .then((data) => {
        if (data.isSuccess) {
          setHelperArr(data.result);
        } else {
          setHelperArr("error");
        }
        setLoading(false);
      })
      .catch((error) => console.error(error));
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      {helperArr.filter((hp) => hp.is_success !== -1).length === 0 ? (
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
              fontSize: 16,
            }}
          >
            {loading ? "로딩 중..." : `아직 활동지원사가\n지원하지 않았어요!`}
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
          {helperArr
            .filter((hp) => hp.is_success !== -1)
            .map((helper) => (
              <HelperService
                key={helper.hp_id}
                helper={helper}
                navigate={(n) =>
                  navigation.navigate(n.route, { resume: n.resume })
                }
              />
            ))}
        </KeyboardAwareScrollView>
      )}

      <BottomButton
        text="홈 화면으로 돌아가기"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

export default HelperList;
