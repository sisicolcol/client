import React, { useState } from "react";
import { View, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import HelperService from "./HelperService";
import BottomButton from "../../../components/common/BottomButton";
import { colors } from "../../../theme";

const HelperList = ({ navigation }) => {
  const [helperArr, setHelperArr] = useState(data.apply);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      {helperArr.length === 0 ? (
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
            아직 활동지원사가 지원하지 않았어요!
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
          {helperArr.map((helper) => (
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
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

export default HelperList;

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
      hp_name: "김시콜",
      hp_id: 13,
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
