import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import PageInfo from "../../../components/common/PageInfo";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Ionicons } from "@expo/vector-icons";
import HelperService from "../../../components/HelperService";

const QuickApply = ({ navigation }) => {
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
            width: "100%",
            marginTop: 20,
            alignItems: "center",
            marginBottom: 30,
          }}
        >
          <PageInfo
            isBold={false}
            colorTitle="퀵 활동지원 서비스"
            title={"\n지원하기"}
            desc={
              "바로 지금 활동지원서비스가 가능한\n활동지원사분의 지원을 기다립니다."
            }
          />
        </View>
        <View
          style={{ alignItems: "flex-end", width: "90%", marginBottom: 10 }}
        >
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Text style={{ fontSize: 17, marginRight: 5 }}>성동구</Text>
            <Ionicons name="options-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center", width: "100%" }}>
          <HelperService
            name={"가나다"}
            time={3}
            start={"이름"}
            dest={"이름"}
            checkOnPress={() => {
              navigation.navigate("ApplyDetail");
            }}
            applyOnPress={() => {
              navigation.navigate("IntroSelection");
            }}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default QuickApply;
