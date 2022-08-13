import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import Input from "../../components/common/Input";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../../theme";

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

const Login = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
    >
      <View style={{ flex: 1 }}>
        <Image
          source={require("../../images/logo.png")}
          resizeMode="contain"
          style={{ width: 200, marginTop: 20 }}
        />
      </View>
      <View
        style={{
          flex: 1,
          width: "90%",
          marginTop: -20,
        }}
      >
        <Input placeholder={"아이디"} sendValue={(text) => console.log(text)} />
        <Input
          placeholder={"비밀번호"}
          sendValue={(text) => console.log(text)}
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
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 60,
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
        <TouchableOpacity onPress={() => console.log("회원가입")}>
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
