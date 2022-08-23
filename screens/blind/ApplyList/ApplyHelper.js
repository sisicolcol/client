import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import MainButton from "../../../components/common/MainButton";
import BottomButton from "../../../components/common/BottomButton";
import { colors, fontSizes, defaultScreen, shadowView } from "../../../theme";

const ApplyHelper = ({ navigation }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <View style={defaultScreen}>
      <View
        style={{
          ...shadowView,
          alignItems: "flex-start",
          justifyContent: "space-between",
          paddingHorizontal: 25,
          paddingVertical: 20,
          marginTop: 24,
        }}
      >
        <Text style={{ fontSize: fontSizes.bigText }}>
          활동지원사 {data.name}님
        </Text>
        {toggle && (
          <View style={styles.resumeContainer}>
            <Text style={{ fontSize: fontSizes.smallText }}>{data.resume}</Text>
          </View>
        )}
        <View style={{ paddingVertical: 16, width: "100%" }}>
          <MainButton
            isBlue={true}
            isBold={true}
            isBig={false}
            width="100%"
            text={!toggle ? "이력서 확인하기" : "이력서 접기"}
            onPress={() => setToggle(!toggle)}
          />
        </View>
        <MainButton
          isBlue={true}
          isBold={true}
          isBig={false}
          width="100%"
          text="활동지원사와의 채팅방으로 이동하기"
          onPress={() => navigation.navigate("Chat")} //수정 필요, 채팅방 각각으로 이동해야됨
        />
      </View>
      <BottomButton
        text="홈 화면으로 돌아가기"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

export default ApplyHelper;

const styles = StyleSheet.create({
  resumeContainer: {
    borderWidth: 1,
    borderColor: colors.mainBlue,
    borderRadius: 12,
    width: "100%",
    padding: 10,
    marginTop: 16,
  },
});

const data = {
  name: "김도움",
  resume: "이력서이력서이력서정보정보정보",
};
