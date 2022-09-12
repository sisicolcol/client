import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Input from "../../components/common/Input";
import BottomButton from "../../components/common/BottomButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { colors, fontSizes } from "../../theme";
import DefaultModal from "../../components/common/DefaultModal";
import MainButton from "../../components/common/MainButton";
import { getUserId } from "../../components/Storage";
import { applyService } from "../../api/api.member";

const Apply = ({ navigation }) => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [way, setWay] = useState(true);
  const [duration, setDuration] = useState("");
  const [expectText, setExpectText] = useState("");
  const [detail, setDetail] = useState("");

  const timeModifier = (time) => {
    let tmpTime = time;
    let tmpTimeArr = tmpTime.replace(" ", "").split("시");
    let tmpHour = tmpTimeArr[0];
    console.log(tmpHour.indexOf("시"));

    if (tmpHour.indexOf("오전") !== -1) {
      tmpTime = tmpHour.replace("오전", "");
    } else if (tmpHour.indexOf("오후") !== -1) {
      tmpTime = tmpHour.replace("오후", "");
      if (tmpTime < 12) {
        tmpTime = parseInt(tmpTime) + 12;
      }
    } else {
      tmpTime = tmpHour;
    }

    if (tmpTimeArr[1] === "") {
      tmpTime = tmpTime + ":00";
    } else {
      tmpTime = tmpTime + ":" + tmpTimeArr[1].replace("분", "");
    }
    return tmpTime.replace(" ", "");
  };

  const dateModifier = (date) => {
    let tmpDate = date;
    tmpDate = tmpDate.replace("월", "-").replace("일", "").replace(" ", "");
    tmpDate = "2022-" + tmpDate;
    return tmpDate;
  };

  const durationModifier = (duration) => {
    let tmp = duration;
    let tmpArr = tmp.split("시간");
    console.log(tmpArr);
    if (tmpArr.length === 1) {
      return tmpArr[0].replace("분", "");
    }
    let tmpHour = tmpArr[0] === "" ? 0 : parseInt(tmpArr[0]);
    let tmpMin =
      tmpArr[1] === ""
        ? 0
        : parseInt(tmpArr[1].replace("분", "").replace(" ", ""));
    tmp = tmpHour * 60 + tmpMin;
    return tmp;
  };

  const applyHandler = async () => {
    const userId = await getUserId();
    console.log(dateModifier(date));
    console.log(durationModifier(duration));
    const data = {
      mem_id: userId,
      service_date: dateModifier(date),
      service_time: timeModifier(time),
      start_point: start,
      end_point: end,
      duration: durationModifier(duration),
      way: 1,
      contents: expectText,
      details: detail,
    };
    await applyService(data)
      .then(() => setIsModalOpened(true))
      .catch((error) => console.error(error));
  };

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
        <View style={styles.inputView}>
          <Input
            label={"서비스 제공 날짜"}
            placeholder={"서비스 제공 날짜 예) 8월 12일"}
            sendValue={(text) => setDate(text)}
          />
        </View>
        <View style={styles.inputView}>
          <Input
            label={"서비스 제공 시간"}
            placeholder={"서비스 제공 시간 예) 오전 11시 35분"}
            sendValue={(text) => setTime(text)}
          />
        </View>
        <View style={styles.inputView}>
          <Input
            label={"출발지"}
            placeholder={"출발지"}
            sendValue={(text) => setStart(text)}
          />
        </View>
        <View style={styles.inputView}>
          <Input
            label={"목적지"}
            placeholder={"목적지"}
            sendValue={(text) => setEnd(text)}
          />
        </View>

        <View style={styles.inputWayView}>
          <Text style={styles.wayLabel}>왕복/편도 여부</Text>
          <View style={styles.inputBtnContainer}>
            <TouchableOpacity
              style={[
                styles.inputButton,
                way ? styles.selectedButton : styles.defaultButton,
              ]}
              accessibilityRole="button"
              accessibilityLabel={way ? `왕복 선택됨` : `왕복 선택 해제됨`}
              onPress={() => setWay(true)}
            >
              <Text style={way ? styles.selectedText : styles.defaultText}>
                왕복
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.inputButton,
                !way ? styles.selectedButton : styles.defaultButton,
              ]}
              accessibilityRole="button"
              accessibilityLabel={!way ? `편도 선택됨` : `편도 선택 해제됨`}
              onPress={() => setWay(false)}
            >
              <Text style={!way ? styles.selectedText : styles.defaultText}>
                편도
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.inputView}>
          <Input
            label={"예상 소요 시간"}
            placeholder={"예상 소요 시간 예) 1시간 20분"}
            sendValue={(text) => setDuration(text)}
          />
          <Text
            style={{
              fontSize: 12,
              color: colors.mainBlue,
              width: "95%",
              marginTop: 5,
            }}
          >
            {
              "예상 소요 시간보다 실제 소요 시간이 적게 걸려도\n입력한 예상 소요시간에 대한 임금은 결제되니 신중히 입력해 주세요."
            }
          </Text>
        </View>
        <View style={styles.inputView}>
          <Input
            label={"활동지원사에게 바라는 사항"}
            placeholder={"활동지원사에게 바라는 사항"}
            sendValue={(text) => setExpectText(text)}
          />
        </View>
        <View style={styles.inputView}>
          <Input
            label={"자세한 신청 내용"}
            placeholder={"자세한 신청 내용"}
            sendValue={(text) => setDetail(text)}
          />
        </View>
      </KeyboardAwareScrollView>
      <BottomButton text={"신청하기"} onPress={applyHandler} />
      <DefaultModal showModal={isModalOpened}>
        <Text
          style={{
            fontSize: fontSizes.smallButton,
            marginTop: 20,
            marginBottom: 40,
          }}
        >
          신청이 완료되었습니다.
        </Text>
        <MainButton
          isBlue={true}
          text={"신청한 목록 보기"}
          width={200}
          marginBottom={15}
          onPress={() => {
            setIsModalOpened(false);
            navigation.navigate("ApplyList");
          }}
        />
        <MainButton
          isBlue={true}
          text={"홈 화면으로 돌아가기"}
          width={200}
          onPress={() => {
            setIsModalOpened(false);
            navigation.popToTop();
          }}
        />
      </DefaultModal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputView: {
    width: "90%",
    marginVertical: 25,
    alignItems: "center",
  },
  inputWayView: { width: "90%", marginVertical: 25, alignItems: "flex-start" },
  label: {
    fontSize: 18,
    fontWeight: "500",
    letterSpacing: 0.03,
    lineHeight: 26,
    marginBottom: 24,
  },
  inputBtnContainer: {
    flexDirection: "row",
    marginLeft: 24,
  },
  inputButton: {
    paddingHorizontal: 58,
    paddingVertical: 12,
    borderRadius: 23,
    borderWidth: 1,
    height: 46,
    width: "70%",
    borderColor: colors.mainBlue,
    marginHorizontal: 4,
    alignItems: "center",
  },
  selectedButton: {
    backgroundColor: colors.mainBlue,
  },
  defaultButton: {
    backgroundColor: "white",
  },
  selectedText: {
    color: "white",
    fontSize: 16,
  },
  defaultText: {
    color: colors.mainBlue,
    fontSize: 16,
  },
  wayLabel: {
    alignItems: "flex-start",
    fontSize: 18,
    fontWeight: "500",
    letterSpacing: 0.03,
    marginLeft: 24,
    lineHeight: 26,
    marginBottom: 24,
  },
});

export default Apply;
