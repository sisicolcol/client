import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import PageInfo from "../../../components/common/PageInfo";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Ionicons } from "@expo/vector-icons";
import HelperService from "../../../components/HelperService";
import { getQuickServiceList } from "../../../api/api.helper";

const QuickApply = ({ navigation }) => {
  const [applyArr, setApplyArr] = useState([]);

  useEffect(() => {
    getQuickServiceList().then((data) => {
      if (data.isSuccess) {
        setApplyArr(data.result);
      }
    });
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
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
        {applyArr.map((apply) => {
          return (
            <View
              key={apply.apply_id}
              style={{ alignItems: "center", width: "100%" }}
            >
              <HelperService
                name={apply.mem_name}
                time={apply.duration}
                start={apply.start_point}
                dest={apply.end_point}
                checkOnPress={() => {
                  navigation.navigate("ApplyDetail", { detailData: apply });
                }}
                applyOnPress={() => {
                  navigation.navigate("IntroSelection", {
                    detailData: apply,
                    applyType: "quick",
                  });
                }}
              />
            </View>
          );
        })}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default QuickApply;
