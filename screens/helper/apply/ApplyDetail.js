import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import BottomButton from "../../../components/common/BottomButton";
import Input from "../../../components/common/Input";

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

  const nothingFunc = () => {};

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
        <View style={styles.inputView} pointerEvents={"none"}>
          <Input
            label={"서비스 제공 날짜"}
            placeholder={"서비스 제공 날짜"}
            value={service_date.slice(0, 10)}
            sendValue={nothingFunc}
          />
        </View>
        <View style={styles.inputView} pointerEvents={"none"}>
          <Input
            label={"서비스 제공 시간"}
            placeholder={"서비스 제공 시간"}
            value={
              service_time.slice(0, 5) +
              " - " +
              (parseInt(service_time.slice(0, 2)) + Math.floor(duration / 60)) +
              ":" +
              (parseInt(service_time.slice(3, 5)) +
                (duration % 60 === 0 ? "0" : duration % 60))
            }
            sendValue={nothingFunc}
          />
        </View>
        <View style={styles.inputView} pointerEvents={"none"}>
          <Input
            label={"출발지"}
            placeholder={"출발지"}
            value={start_point}
            sendValue={nothingFunc}
          />
        </View>
        <View style={styles.inputView} pointerEvents={"none"}>
          <Input
            label={"목적지"}
            placeholder={"목적지"}
            value={end_point}
            sendValue={nothingFunc}
          />
        </View>
        <View style={styles.inputView} pointerEvents={"none"}>
          <Input
            label={"왕복/편도 여부"}
            placeholder={"왕복/편도 여부"}
            value={way ? "왕복" : "편도"}
            sendValue={nothingFunc}
          />
        </View>
        <View style={styles.inputView} pointerEvents={"none"}>
          <Input
            label={"예상 소요 시간"}
            placeholder={"예상 소요 시간"}
            value={`${
              duration >= 60 ? Math.floor(duration / 60) + "시간 " : ""
            } ${duration % 60 !== 0 ? (duration % 60) + "분" : ""}`}
            sendValue={nothingFunc}
          />
        </View>
        <View style={styles.inputView} pointerEvents={"none"}>
          <Input
            label={"활동지원사에게 바라는 사항"}
            placeholder={"활동지원사에게 바라는 사항"}
            value={contents}
            sendValue={nothingFunc}
          />
        </View>
        <View style={styles.inputView} pointerEvents={"none"}>
          <Input
            label={"자세한 신청 내용"}
            placeholder={"자세한 신청 내용"}
            value={details}
            sendValue={nothingFunc}
          />
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
