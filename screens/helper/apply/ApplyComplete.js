import React from "react";
import { View, SafeAreaView, Image } from "react-native";
import MainButton from "../../../components/common/MainButton";
import PageInfo from "../../../components/common/PageInfo";

const ApplyComplete = ({ navigation }) => {
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
        <PageInfo
          isBold={false}
          title="지원이 완료되었습니다"
          desc={"나의 매칭 여부는 나의 지원목록에서\n확인할 수 있습니다."}
        />
      </View>
      <View style={{ flex: 3, justifyContent: "center" }}>
        <Image
          style={{ width: 100, resizeMode: "contain", marginBottom: 150 }}
          source={require("../../../images/check.png")}
        />
      </View>
      <View style={{ width: "90%", flex: 1 }}>
        <MainButton
          text={"지원목록 확인하기"}
          width={"100%"}
          isBig={true}
          isBold={true}
          isBlue={true}
          marginBottom={10}
          onPress={() => navigation.navigate("ApplyList")}
        />
        <MainButton
          text={"홈 화면으로 돌아가기"}
          width={"100%"}
          isBig={true}
          isBold={true}
          isBlue={true}
          onPress={() => navigation.popToTop()}
        />
      </View>
    </SafeAreaView>
  );
};

export default ApplyComplete;
