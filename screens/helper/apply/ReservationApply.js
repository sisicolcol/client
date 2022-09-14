import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import PageInfo from "../../../components/common/PageInfo";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Ionicons } from "@expo/vector-icons";
import HelperService from "../../../components/HelperService";
import { getPreServiceList } from "../../../api/api.helper";
import { format, parseISO } from "date-fns";
import ko from "date-fns/locale/ko";
import { returnServiceTime } from "../../../components/CommonFunc";

const ReservationApply = ({ navigation }) => {
  const [applyArr, setApplyArr] = useState([]);

  useEffect(() => {
    getPreServiceList().then((data) => {
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
            colorTitle="사전 예약 활동지원 서비스"
            title={"\n지원하기"}
            desc={"미리 활동지원서비스 일정을 잡아보세요!"}
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
          let hr =
            parseInt(apply.service_time.slice(0, 2)) +
            Math.floor(apply.duration / 60);
          let mn =
            parseInt(apply.service_time.slice(3, 5)) + (apply.duration % 60);
          return (
            <View
              key={apply.apply_id}
              style={{ alignItems: "center", width: "100%" }}
            >
              <HelperService
                name={apply.mem_name}
                time={apply.duration}
                start={`${format(
                  parseISO(apply.service_date.slice(0, 10)),
                  "M월 d일 (E)",
                  { locale: ko }
                )} ${returnServiceTime(apply.service_time, apply.duration)}`}
                dest={apply.end_point}
                checkOnPress={() => {
                  navigation.navigate("ApplyDetail", { detailData: apply });
                }}
                applyOnPress={() => {
                  navigation.navigate("IntroSelection", {
                    detailData: apply,
                    applyType: "reservation",
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

export default ReservationApply;
