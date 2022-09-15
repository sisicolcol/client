import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, Alert } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import PageInfo from "../../../components/common/PageInfo";
import Input from "../../../components/common/Input";
import BottomButton from "../../../components/common/BottomButton";
import { signup } from "../../../api/api.main";

const SecondSignUp = ({ navigation, route }) => {
  const data = route.params.firstData;
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState(false);

  const onSignUp = () => {
    if (!checkPassword) {
      Alert.alert("알림!", "비밀번호를 다시 확인해 주세요.");
    } else {
      const signupData = {
        id: id,
        password: password,
      };

      signup(signupData, data).then((data) => console.log(data));
    }
    navigation.navigate("Login");
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
      <KeyboardAwareScrollView
        style={{ marginBottom: 120, width: "100%", marginLeft: 32 }}
      >
        <View style={styles.inputView}>
          <Input
            label={"아이디"}
            placeholder={"아이디"}
            sendValue={(text) => setId(text)}
          />
        </View>
        <View style={styles.inputView}>
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
              } else {
                setCheckPassword(false);
              }
            }}
            secureTextEntry={true}
          />
        </View>
      </KeyboardAwareScrollView>

      <BottomButton text={"가입하기"} onPress={onSignUp} />
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

export default SecondSignUp;
