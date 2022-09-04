import { React, useState } from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import PageInfo from "../../../components/common/PageInfo";
import BottomButton from "../../../components/common/BottomButton";
import RadioButton from "../../../components/common/RadioButton";

const HelperSecondSignUp = () => {
  const selectList = [
    { id: 1, name: "문자 메시지 수신에 동의합니다." },
    { id: 2, name: "이메일 수신에 동의합니다." },
  ];
  const [selectedData, setSelectedData] = useState(0);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
    >
      <View
        style={{
          width: "80%",
          marginTop: 20,
          alignItems: "center",
          marginBottom: 30,
        }}
      >
        <PageInfo isBold={false} title="약관동의" />
      </View>
      <View style={styles.viewStyle}>
        <Text
          style={{
            fontSize: 17,
            fontWeight: "bold",
          }}
        >
          마케팅 정보 수신 및 활용 동의
        </Text>
      </View>
      <View style={styles.viewStyle}>
        {selectList.map((data) => (
          <RadioButton
            key={data.id}
            data={data}
            checked={selectedData === data.id ? true : false}
            onSelect={(value) => {
              setSelectedData(value);
            }}
          />
        ))}
      </View>
      <BottomButton text={"가입하기"} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    width: "80%",
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "500",
    letterSpacing: 0.03,
    lineHeight: 26,
    marginBottom: 24,
  },
  textStyle: {
    fontSize: 17,
  },
});

export default HelperSecondSignUp;
