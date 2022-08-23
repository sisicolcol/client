import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import CheckApply from "../../../components/CheckApply";
import BottomButton from "../../../components/common/BottomButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { colors, fontSizes } from "../../../theme";

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
            아직 활동지원사 매칭이{"\n"}이루어지지 않았어요!
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
            <CheckApply
              key={applyArr.helper_name}
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
      start_location: "집",
      dest_location: "건국대학교 병원 정문",
      wish: "여성분 선호합니다",
      content: "자택에서 출발해서 건국대학교 병원ㄱㄱ.....d왔다갔다입력입력",
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
