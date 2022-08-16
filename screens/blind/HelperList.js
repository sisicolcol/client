import React, { useState } from "react";
import { View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CheckHelper from "../../components/CheckHelper";
import BottomButton from "../../components/common/BottomButton";

const HelperList = ({ navigation }) => {
  const [helperArr, setHelperArr] = useState(data.apply);
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
        {helperArr.map((helper) => (
          <CheckHelper
            key={helper.name}
            helper={helper}
            navigate={(n) => navigation.navigate(n)}
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

export default HelperList;

const data = {
  apply: [
    {
      name: "김도움",
      date_time: "3월 9일 (수)",
      start_location: "자택",
      dest_location: "건국대학교 병원",
      isMatching: true,
    },
    {
      name: "이지원",
      date_time: "3월 9일 (수)",
      start_location: "자택",
      dest_location: "건국대학교 병원 정문",
      isMatching: false,
    },
    {
      name: "박시콜",
      date_time: "3월 9일 (수)",
      start_location: "자택",
      dest_location: "건국대학교 병원 정문",
      isMatching: false,
    },
  ],
};
