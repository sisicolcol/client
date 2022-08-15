import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Button,
  ScrollView,
  StyleSheet,
} from "react-native";
import Input from "../../components/common/Input";
import BottomButton from "../../components/common/BottomButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { colors } from "../../theme";

const Apply = ({ navigation }) => {
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
          <Input
            label={"서비스 제공 날짜"}
            placeholder={"서비스 제공 날짜"}
            sendValue={(text) => console.log(text)}
          />
        </View>
        <View style={styles.inputView}>
          <Input
            label={"서비스 제공 시간"}
            placeholder={"서비스 제공 시간"}
            sendValue={(text) => console.log(text)}
          />
        </View>
        <View style={styles.inputView}>
          <Input
            label={"출발지"}
            placeholder={"출발지"}
            sendValue={(text) => console.log(text)}
          />
        </View>
        <View style={styles.inputView}>
          <Input
            label={"목적지"}
            placeholder={"목적지"}
            sendValue={(text) => console.log(text)}
          />
        </View>
        <View style={styles.inputView}>
          <Input
            label={"왕복/편도 여부"}
            placeholder={"왕복/편도 여부"}
            sendValue={(text) => console.log(text)}
          />
        </View>
        <View style={styles.inputView}>
          <Input
            label={"예상 소요 시간"}
            placeholder={"예상 소요 시간"}
            sendValue={(text) => console.log(text)}
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
            sendValue={(text) => console.log(text)}
          />
        </View>
        <View style={styles.inputView}>
          <Input
            label={"자세한 신청 내용"}
            placeholder={"자세한 신청 내용"}
            sendValue={(text) => console.log(text)}
          />
        </View>
      </KeyboardAwareScrollView>
      <BottomButton text={"신청하기"} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputView: {
    width: "90%",
    marginVertical: 25,
    alignItems: "center",
    // flexDirection: "row",
  },
  label: {
    fontSize: 18,
    fontWeight: "500",
    letterSpacing: 0.03,
    lineHeight: 26,
    marginBottom: 24,
  },
});

export default Apply;
