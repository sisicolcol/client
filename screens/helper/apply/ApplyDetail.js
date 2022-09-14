import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import BottomButton from "../../../components/common/BottomButton";
import ApplyDetailText from "../../../components/ApplyDetailText";
import { returnServiceTime } from "../../../components/CommonFunc";
import { getApplyDetail } from "../../../api/api.member";

const ApplyDetail = ({ navigation, route }) => {
  const [payload, setPayload] = useState(route.params.detailData);

  useEffect(() => {
    if (route.params.detailData === undefined) {
      getApplyDetail(route.params.apply_id)
        .then((data) => {
          if (data.isSuccess) {
            setPayload(data.result[0]);
          }
        })
        .catch((err) => console.error(err));
    }
  }, [route]);

  if (payload === undefined)
    return (
      <SafeAreaView>
        <Text>로딩중...</Text>
      </SafeAreaView>
    );

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
        <View style={styles.inputView}>
          <ApplyDetailText
            label={"서비스 제공 날짜"}
            text={payload.service_date.slice(0, 10)}
          />
        </View>
        <View style={styles.inputView}>
          <ApplyDetailText
            label={"서비스 제공 시간"}
            text={returnServiceTime(payload.service_time, payload.duration)}
          />
        </View>
        <View style={styles.inputView}>
          <ApplyDetailText label={"출발지"} text={payload.start_point} />
        </View>
        <View style={styles.inputView}>
          <ApplyDetailText label={"목적지"} text={payload.end_point} />
        </View>
        <View style={styles.inputView}>
          <ApplyDetailText
            label={"왕복/편도 여부"}
            text={payload.way ? "왕복" : "편도"}
          />
        </View>
        <View style={styles.inputView}>
          <ApplyDetailText
            label={"예상 소요 시간"}
            text={`${
              payload.duration >= 60
                ? Math.floor(payload.duration / 60) + "시간 "
                : ""
            } ${
              payload.duration % 60 !== 0 ? (payload.duration % 60) + "분" : ""
            }`}
          />
        </View>
        <View style={styles.inputView}>
          <ApplyDetailText
            label={"활동지원사에게 바라는 사항"}
            text={payload.contents}
          />
        </View>
        <View style={styles.inputView}>
          <ApplyDetailText label={"자세한 신청 내용"} text={payload.details} />
        </View>
      </KeyboardAwareScrollView>
      <BottomButton text={"확인"} onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputView: {
    width: "90%",
    marginVertical: 25,
    alignItems: "center",
  },
  label: {
    fontSize: 18,
    fontWeight: "500",
    letterSpacing: 0.03,
    lineHeight: 26,
    marginBottom: 24,
  },
});

export default ApplyDetail;
