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
        text={"퀵 활동지원서비스 신청하기"}
        marginBottom={25}
        onPress={() => navigation.navigate("QuickApply")}
      />
      <MainButton
        isBig={true}
        isBlue={true}
        isBold={true}
        width={"90%"}
        text={"사전 예약 활동지원서비스 신청하기"}
        marginBottom={25}
        onPress={() => navigation.navigate("ReservationApply")}
      />
      <MainButton
        isBig={true}
        isBlue={true}
        isBold={true}
        width={"90%"}
        text={"시각장애인과 채팅하기"}
        marginBottom={25}
        onPress={() => navigation.navigate("Chat")}
      />
      <MainButton
        isBig={true}
        isBlue={true}
        isBold={true}
        width={"90%"}
        text={"나의 지원 목록"}
        marginBottom={25}
        onPress={() => navigation.navigate("ApplyList")}
      />
      <MainButton
        isBig={true}
        width={"90%"}
        text={"내 정보"}
        marginBottom={25}
        onPress={() => navigation.navigate("MyPageStack")}
      />
    </SafeAreaView>
  );
};

export default Home;
