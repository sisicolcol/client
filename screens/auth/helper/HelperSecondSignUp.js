import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import PageInfo from "../../../components/common/PageInfo";
import Input from "../../../components/common/Input";
import BottomButton from "../../../components/common/BottomButton";

const HelperSecondSignUp = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
    >
      <View
        style={{
          width: "80%",
          marginTop: 20,
          alignItems: "center",
          marginBottom: 30,
        }}
      >
        <PageInfo isBold={false} title="회원가입" />
      </View>
      <View style={styles.inputView}>
        <Input
          label={"아이디"}
          placeholder={"아이디"}
          sendValue={(text) => console.log(text)}
        />
      </View>
      <View style={styles.inputView}>
        <Input
          label={"비밀번호"}
          placeholder={"영문, 숫자, 특수문자 조합 8자리 이상"}
          sendValue={(text) => console.log(text)}
        />
        <Input
          placeholder={"비밀번호 확인"}
          sendValue={(text) => console.log(text)}
        />
      </View>
      <BottomButton text={"가입하기"} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputView: {
    width: "90%",
    marginBottom: 50,
  },
  label: {
    fontSize: 18,
    fontWeight: "500",
    letterSpacing: 0.03,
    lineHeight: 26,
    marginBottom: 24,
  },
});

export default HelperSecondSignUp;
