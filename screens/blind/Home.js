import React from "react";
import { SafeAreaView, View, Text, Button } from "react-native";
import MainButton from "../../components/common/MainButton";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MainButton
        isBig={true}
        isBlue={true}
        isBold={true}
        width={"90%"}
        text={"활동지원서비스 신청하기"}
        marginBottom={25}
        onPress={() => navigation.navigate("Apply")}
      />
      <MainButton
        isBig={true}
        isBlue={true}
        isBold={true}
        width={"90%"}
        text={"활동지원사와 채팅하기"}
        marginBottom={25}
        onPress={() => navigation.navigate("ChatList")}
      />
      <MainButton
        isBig={true}
        isBlue={true}
        isBold={true}
        width={"90%"}
        text={"신청목록"}
        marginBottom={25}
      />
      <MainButton
        isBig={true}
        isBlue={true}
        isBold={true}
        width={"90%"}
        text={"지원한 활동지원사 확인하기"}
        marginBottom={25}
      />
      <MainButton isBig={true} width={"90%"} text={"알림"} marginBottom={25} />
      <MainButton
        isBig={true}
        width={"90%"}
        text={"내 정보"}
        marginBottom={25}
      />
    </SafeAreaView>
  );
};

export default Home;
