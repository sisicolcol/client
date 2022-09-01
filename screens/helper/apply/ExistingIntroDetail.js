import { React, useState } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import BottomButton from "../../../components/common/BottomButton";
import PageInfo from "../../../components/common/PageInfo";
import { colors, shadowView } from "../../../theme";

const ExistingIntroDetail = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
    >
      <View
        style={{
          width: "100%",
          marginTop: 20,
          alignItems: "center",
          marginBottom: 30,
        }}
      >
        <PageInfo isBold={false} title="기존 자기소개서" />
      </View>
      <View
        style={[
          shadowView,
          {
            width: "90%",
            paddingVertical: 10,
            paddingHorizontal: 20,
            marginBottom: 20,
          },
        ]}
      >
        <View style={{ width: "100%", alignItems: "flex-start" }}>
          <Text style={styles.titleText}>제목</Text>
          <Text style={styles.descriptionText}>내용</Text>
        </View>
        <View style={{ width: "100%", alignItems: "flex-end" }}>
          <Text style={styles.characterCountText}>0/600</Text>
          <Text>2022.10.28에 작성</Text>
        </View>
      </View>
      <BottomButton text={"확인"} onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
  },
  descriptionText: {
    fontSize: 16,
    marginBottom: 10,
  },
  characterCountText: {
    fontSize: 13,
    color: colors.smallTextGray2,
    marginBottom: 10,
  },
  dateText: {
    fontSize: 13,
  },
});

export default ExistingIntroDetail;
