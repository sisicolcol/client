import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import ApplyService from "./ApplyService";
import BottomButton from "../../../components/common/BottomButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { colors, fontSizes } from "../../../theme";
import { getApplyList } from "../../../api/api.member";

const ApplyList = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [applyArr, setApplyArr] = useState([]);
  const [sendData, setSendData] = useState({ endProcess: "" });

  useEffect(() => {
    getData();
  }, [navigation]);

  useEffect(() => {
    if (sendData.endProcess !== "") {
      navigation.navigate("Result", { endData: sendData });
    }
  }, [sendData, navigation]);

  const getData = () => {
    getApplyList().then((data) => {
      if (data.isSuccess) {
        setApplyArr(data.result);
      } else {
        setApplyArr("error");
      }
      setLoading(false);
    });
  };

  return (
    <View
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
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

export default ApplyList;

const data = {
  apply: [
    {
      apply_id: 1,
      hp_id: 11,
      hp_name: "김도움",
      service_day: "3월 9일 (수)",
      service_time: "14시 00분",
      start_point: "자택",
      end_point: "건국대학교 병원",
      contents: "여성분 선호합니다",
      details: "자택에서 출발해서 건국대학교 병원.....",
      duration: 4,
      way: true,
      isMatching: true,
      isComplete: true,
    },
    {
      apply_id: 2,
      hp_id: 12,
      hp_name: "이지원",
      service_day: "3월 9일 (수)",
      service_time: "16시 00분",
      start_point: "집",
      end_point: "건국대학교 병원 정문",
      contents: "여성분 선호합니다",
      details: "자택에서 출발해서 건국대학교 병원ㄱㄱ.....d왔다갔다입력입력",
      duration: 5,
      way: false,
      isMatching: true,
      isComplete: false,
    },
    {
      apply_id: 3,
      hp_name: null,
      hp_id: null,
      service_day: "3월 9일 (수)",
      service_time: "11시 20분",
      start_point: "자택",
      end_point: "건국대학교 병원 정문",
      contents: "여성분 선호합니다",
      details: "자택에서 출발해서 건국대학교 병원.....",
      duration: 6,
      way: true,
      isMatching: false,
      isComplete: false,
    },
  ],
};
