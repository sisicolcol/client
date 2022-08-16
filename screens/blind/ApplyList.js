import { View } from "react-native";
import React, { useState } from "react";
import CheckApply from "../../components/CheckApply";
import BottomButton from "../../components/common/BottomButton";
import PageInfo from "../../components/common/PageInfo";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const ApplyList = ({ navigation }) => {
  const [applyArr, setApplyArr] = useState(data.apply);
  const [sendData, setSendData] = useState({ endProcess: "" });
  console.log(sendData);

  if (sendData.endProcess !== "")
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
        }}
      >
        <View style={{ width: "80%", paddingTop: 80, paddingLeft: 16 }}>
          {sendData.endProcess === "end" ? (
            <PageInfo
              title={"시시콜콜 활동지원서비스가\n만족스러우셨나요?"}
              desc={
                "활동지원사의 임금이\n등록하신 계좌에서 자동 결제되었습니다."
              }
              isBold={false}
            />
          ) : (
            <PageInfo
              title={"다시 찾으실 때까지\n기다리겠습니다."}
              isBold={false}
            />
          )}
        </View>

        <BottomButton
          text="나의 지원목록 보기"
          onPress={() => setSendData({ endProcess: "" })}
        />
      </View>
    );
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
