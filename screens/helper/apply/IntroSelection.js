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
import BottomButton from "../../../components/common/BottomButton";
import { colors, shadowView } from "../../../theme";

const SelfIntro = ({ title, date, isDateVisible, onPress }) => {
  return (
    <TouchableOpacity
      style={[shadowView, { width: "100%", padding: 10, marginBottom: 20 }]}
      onPress={onPress}
    >
      <Text style={{ fontSize: 16, marginBottom: isDateVisible ? 10 : 0 }}>
        {title}
      </Text>
      <View style={{ width: "90%" }}>
        {isDateVisible ?? (
          <Text
            style={{
              fontSize: 13,
              color: colors.smallTextGray2,
              textAlign: "right",
            }}
          >
            {date} 에 작성
          </Text>
        )}
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
            <SelfIntro
              title={"제목"}
              date={"2022-01-01"}
              onPress={() => navigation.navigate("ExistingIntroDetail")}
            />
          </View>
          <RadioButton
            key={selectList[1].id}
            data={selectList[1]}
            checked={selectedData === selectList[1].id ? true : false}
            onSelect={(value) => {
              setSelectedData(value);
            }}
          />
          <SelfIntro
            title={"클릭하면 작성창으로 이동합니다."}
            isDateVisible={false}
            onPress={() => navigation.navigate("NewIntroDetail")}
          />
        </View>
      </KeyboardAwareScrollView>
      <BottomButton
        text={"지원하기"}
        onPress={() => navigation.navigate("ApplyComplete")}
      />
    </View>
  );
};

export default IntroSelection;
