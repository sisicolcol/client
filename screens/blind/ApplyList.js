import { View } from "react-native";
import React, { useState, useEffect } from "react";
import CheckApply from "../../components/CheckApply";
import BottomButton from "../../components/common/BottomButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const ApplyList = ({ navigation }) => {
  const [applyArr, setApplyArr] = useState(data.apply);
  const [sendData, setSendData] = useState({ endProcess: "" });

  useEffect(() => {
    if (sendData.endProcess !== "") {
      navigation.navigate("Result", { endData: sendData });
    }
  }, [sendData, navigation]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <KeyboardAwareScrollView
        contentContainerStyle={{
          width: "100%",
          alignItems: "center",
          paddingBottom: 120,
          paddingTop: 24,
        }}
      >
        {applyArr.map((applyArr) => (
          <CheckApply
            key={applyArr.helper_name}
            apply={applyArr}
            sendData={setSendData}
          />
        ))}
      </KeyboardAwareScrollView>
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
      id: 1,
      helper_name: "김도움",
      date_time: "3월 9일 (수)",
      start_location: "자택",
      dest_location: "건국대학교 병원",
      wish: "여성분 선호합니다",
      content: "자택에서 출발해서 건국대학교 병원.....",
      taken_time: 4,
      isRound: true,
      isMatching: true,
      isComplete: true,
    },
    {
      id: 2,
      helper_name: "이지원",
      date_time: "3월 9일 (수)",
      start_location: "자택",
      dest_location: "건국대학교 병원 정문",
      wish: "여성분 선호합니다",
      content: "자택에서 출발해서 건국대학교 병원.....",
      taken_time: 5,
      isRound: false,
      isMatching: true,
      isComplete: false,
    },
    {
      id: 3,
      helper_name: null,
      date_time: "3월 9일 (수)",
      start_location: "자택",
      dest_location: "건국대학교 병원 정문",
      wish: "여성분 선호합니다",
      content: "자택에서 출발해서 건국대학교 병원.....",
      taken_time: 6,
      isRound: true,
      isMatching: false,
      isComplete: false,
    },
  ],
};
