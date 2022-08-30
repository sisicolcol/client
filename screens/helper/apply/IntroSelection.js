import { React, useState } from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import RadioButton from "../../../components/common/RadioButton";
import { colors, shadowView } from "../../../theme";

const ExistingIntro = ({ title, date }) => {
  return (
    <TouchableOpacity
      style={[shadowView, { width: "100%", padding: 20, marginBottom: 20 }]}
    >
      <Text style={{ fontSize: 16, marginBottom: 10 }}>{title}</Text>
      <View style={{ width: "90%" }}>
        <Text
          style={{
            fontSize: 13,
            color: colors.smallTextGray2,
            textAlign: "right",
          }}
        >
          {date} 에 작성
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const IntroSelection = ({ navigation }) => {
  const selectList = [
    { id: 1, name: "기존 자기소개서 선택" },
    { id: 2, name: "새로운 자기소개서 작성" },
  ];
  const [selectedData, setSelectedData] = useState(0);
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <KeyboardAwareScrollView
        contentContainerStyle={{
          paddingTop: 20,
          paddingBottom: 120,
          backgroundColor: "transparent",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ width: "90%" }}>
          <RadioButton
            key={selectList[0].id}
            data={selectList[0]}
            checked={selectedData === selectList[0].id ? true : false}
            onSelect={(value) => {
              setSelectedData(value);
            }}
          />
          <View style={{ marginBottom: 30 }}>
            <ExistingIntro title={"제목"} date={"2022-01-01"} />
            <ExistingIntro title={"제목"} date={"2022-01-01"} />
            <ExistingIntro title={"제목"} date={"2022-01-01"} />
          </View>
          <RadioButton
            key={selectList[1].id}
            data={selectList[1]}
            checked={selectedData === selectList[1].id ? true : false}
            onSelect={(value) => {
              setSelectedData(value);
            }}
          />
          <TouchableOpacity
            style={[shadowView, { width: "100%", padding: 10 }]}
          >
            <Text style={{ fontSize: 16 }}>
              클릭하면 작성창으로 이동합니다.
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default IntroSelection;
