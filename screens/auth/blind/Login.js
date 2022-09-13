import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import Input from "../../../components/common/Input";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../../../theme";
import { login } from "../../../api/api.main";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { reloadAsync } from "expo-updates";

const LoginButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        width: 65,
        height: 65,
        borderRadius: 65 / 2,
        backgroundColor: colors.mainBlue,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 8,
      }}
      onPress={onPress}
    >
      <Text style={{ color: "white", fontSize: 15, fontWeight: "500" }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const Login = ({ navigation }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const loginFunc = () => {
    login(id, password).then((data) => {
      if (data.isSuccess) {
        AsyncStorage.setItem("USER_TYPE", "member");
        AsyncStorage.setItem("USER_ID", id);
        AsyncStorage.setItem("USER_TOKEN", data.result);
        reloadAsync(); //앱 새로고침
      }
    });
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
    >
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Image
          source={require("../../../images/logo.png")}
          resizeMode="contain"
          style={{ width: 200, marginTop: 30 }}
        />
      </View>
      <View
        style={{
          flex: 2,
          width: "90%",
          marginTop: 0,
        }}
      >
        <Input placeholder={"아이디"} sendValue={(text) => setId(text)} />
        <Input
          placeholder={"비밀번호"}
          sendValue={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center", marginTop: 24 }}
          onPress={() => setIsChecked(!isChecked)}
        >
          <AntDesign
            name="checkcircleo"
            size={20}
            color={isChecked ? colors.mainBlue : colors.checkButtonGray5}
          />
          <Text style={{ fontSize: 16, marginLeft: 8 }}>자동 로그인</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={loginFunc}>
        <Text>로그인하기</Text>
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 20,
        }}
      >
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            marginBottom: 55,
          }}
        >
          <LoginButton text="카카오톡" onPress={() => console.log("로그인")} />
          <LoginButton text="네이버" onPress={() => console.log("로그인")} />
          <LoginButton text="구글" onPress={() => console.log("로그인")} />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("FirstSignUp")}>
          <Text
            style={{ fontSize: 20, fontWeight: "500", color: colors.mainBlue }}
          >
            회원가입
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
