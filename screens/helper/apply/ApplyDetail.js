import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import BottomButton from "../../../components/common/BottomButton";
import ApplyDetailText from "../../../components/ApplyDetailText";
import { returnServiceTime } from "../../../components/CommonFunc";

const ApplyDetail = ({ navigation, route }) => {
  const {
    service_date,
    service_time,
    start_point,
    end_point,
    way,
    duration,
    contents,
    details,
  } = route.params.detailData;

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
            text={service_date.slice(0, 10)}
          />
        </View>
        <View style={styles.inputView}>
          <ApplyDetailText
            label={"서비스 제공 시간"}
            text={returnServiceTime(service_time, duration)}
          />
        </View>
        <View style={styles.inputView}>
          <ApplyDetailText label={"출발지"} text={start_point} />
        </View>
        <View style={styles.inputView}>
          <ApplyDetailText label={"목적지"} text={end_point} />
        </View>
        <View style={styles.inputView}>
          <ApplyDetailText
            label={"왕복/편도 여부"}
            text={way ? "왕복" : "편도"}
          />
        </View>
        <View style={styles.inputView}>
          <ApplyDetailText
            label={"예상 소요 시간"}
            text={`${
              duration >= 60 ? Math.floor(duration / 60) + "시간 " : ""
            } ${duration % 60 !== 0 ? (duration % 60) + "분" : ""}`}
          />
        </View>
        <View style={styles.inputView}>
          <ApplyDetailText
            label={"활동지원사에게 바라는 사항"}
            text={contents}
          />
        </View>
        <View style={styles.inputView}>
          <ApplyDetailText label={"자세한 신청 내용"} text={details} />
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
