import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Input from "../../../components/common/Input";
import PageInfo from "../../../components/common/PageInfo";
import BottomButton from "../../../components/common/BottomButton";
import SignUpButton from "../../../components/SignUpButton";
import { signup } from "../../../api/api.main";

const HelperFirstSignUp = ({ navigation }) => {
  const [isMale, setIsMale] = useState(false);
  const [isFemale, setIsFemale] = useState(false);
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [phone, setPhone] = useState("");
  const [cert, setCert] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState(false);

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
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <KeyboardAwareScrollView
        contentContainerStyle={{
          paddingBottom: 120,
          backgroundColor: "transparent",
          alignItems: "center",
          justifyContent: "center",
        }}
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
            sendValue={(text) => setName(text)}
          />
        </View>
        <View style={styles.inputView}>
          <View style={{ flex: 2 }}>
            <Input
              label={"생년월일"}
              placeholder={"생년월일"}
              sendValue={(text) => setBirth(text)}
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
              sendValue={(text) => setPhone(text)}
            />
          </View>
          <View style={{ justifyContent: "flex-end", marginBottom: 10 }}>
            <SignUpButton text={"인증받기"} />
          </View>
        </View>
        <View style={styles.inputView}>
          <View style={{ flex: 2, marginRight: 10 }}>
            <Input
              label={"활동지원 자격증명서"}
              placeholder={"활동지원 자격증명서"}
              sendValue={(text) => setCert(text)}
            />
          </View>
          <View style={{ justifyContent: "flex-end", marginBottom: 10 }}>
            <SignUpButton text={"업로드"} />
          </View>
        </View>
        <View style={styles.simpleInputView}>
          <Input
            label={"아이디"}
            placeholder={"아이디"}
            sendValue={(text) => setId(text)}
          />
        </View>
        <View style={styles.simpleInputView}>
          <Input
            label={"비밀번호"}
            placeholder={"영문, 숫자, 특수문자 조합 8자리 이상"}
            sendValue={(text) => setPassword(text)}
            secureTextEntry={true}
          />
          <Input
            placeholder={"비밀번호 확인"}
            sendValue={(text) => {
              if (text === password) {
                setCheckPassword(true);
              } else setCheckPassword(false);
            }}
            secureTextEntry={true}
          />
        </View>
      </KeyboardAwareScrollView>
      <BottomButton
        text={"다음"}
        onPress={() =>
          navigation.navigate("HelperSecondSignUp", {
            firstData: {
              name: name,
              birth: birth,
              phone: phone,
              gender: isMale ? "M" : "F",
              cert: cert,
            },
            signupData: {
              id: id,
              password: password,
            },
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputView: {
    width: "90%",
    marginBottom: 50,
    flexDirection: "row",
  },
  simpleInputView: {
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

export default HelperFirstSignUp;
