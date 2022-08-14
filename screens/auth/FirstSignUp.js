import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import Input from "../../components/common/Input";
import PageInfo from "../../components/common/PageInfo";
import BottomButton from "../../components/common/BottomButton";
import SignUpButton from "../../components/SignUpButton";

const FirstSignUp = ({ navigation }) => {
  const [isMale, setIsMale] = useState(false);
  const [isFemale, setIsFemale] = useState(false);
  const setSexButtonState = (target) => {
    if (target === 0) {
      setIsMale(!isMale);
      if (isFemale === true) {
        setIsFemale(false);
      }
    } else {
      setIsFemale(!isFemale);
      if (isMale === true) {
        setIsMale(false);
      }
    }
  };

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
          label={"이름"}
          placeholder={"이름"}
          sendValue={(text) => console.log(text)}
        />
      </View>
      <View style={styles.inputView}>
        <View style={{ flex: 2 }}>
          <Input
            label={"생년월일"}
            placeholder={"생년월일"}
            sendValue={(text) => console.log(text)}
          />
        </View>
        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={styles.label}>성별</Text>
          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <SignUpButton
              text={"남성"}
              marginRight={8}
              isSelected={isMale}
              onPress={() => setSexButtonState(0)}
            />
            <SignUpButton
              text={"여성"}
              isSelected={isFemale}
              onPress={() => setSexButtonState(1)}
            />
          </View>
        </View>
      </View>
      <View style={styles.inputView}>
        <View style={{ flex: 2, marginRight: 10 }}>
          <Input
            label={"연락처"}
            placeholder={"연락처"}
            sendValue={(text) => console.log(text)}
          />
        </View>
        <View style={{ justifyContent: "flex-end", marginBottom: 10 }}>
          <SignUpButton text={"인증받기"} />
        </View>
      </View>
      <View style={styles.inputView}>
        <View style={{ flex: 2, marginRight: 10 }}>
          <Input
            label={"복지카드 사진"}
            placeholder={"복지카드 사진"}
            sendValue={(text) => console.log(text)}
          />
        </View>
        <View style={{ justifyContent: "flex-end", marginBottom: 10 }}>
          <SignUpButton text={"업로드"} />
        </View>
      </View>
      <BottomButton
        text={"다음"}
        onPress={() => navigation.navigate("SecondSignUp")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputView: {
    width: "90%",
    marginBottom: 50,
    flexDirection: "row",
  },
  label: {
    fontSize: 18,
    fontWeight: "500",
    letterSpacing: 0.03,
    lineHeight: 26,
    marginBottom: 24,
  },
});

export default FirstSignUp;
