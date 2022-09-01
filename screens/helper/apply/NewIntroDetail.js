import { React, useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, TextInput } from "react-native";
import BottomButton from "../../../components/common/BottomButton";
import PageInfo from "../../../components/common/PageInfo";
import { colors, shadowView } from "../../../theme";

const NewIntroDetail = ({ navigation }) => {
  const [currentTextLength, setCurrentTextLength] = useState(0);
  const maxCharacterLength = 600;

  const checkTextLength = () => {
    if (currentTextLength < 200) {
      // 부족
      console.log("부족");
    } else if (currentTextLength > 600) {
      console.log("초과");
      // 초과
    } else {
      // ㅇㅋ
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
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
          title="새로운 자기소개서"
          desc={
            "해당 자기소개서는 일회성으로 저장되지 않습니다.\n자기소개서 변경은 마이페이지에서 가능합니다."
          }
        />
      </View>
      <View
        style={[
          shadowView,
          {
            width: "90%",
            paddingVertical: 10,
            paddingHorizontal: 20,
            marginBottom: 20,
          },
        ]}
      >
        <View style={{ width: "100%", alignItems: "flex-start" }}>
          <TextInput
            style={styles.titleText}
            placeholder="제목을 입력해주세요."
          />
          <TextInput
            style={styles.descriptionText}
            placeholder="내용을 입력해주세요."
            multiline={true}
            onChangeText={(text) => {
              setCurrentTextLength(text.length);
            }}
          />
        </View>
        <View style={{ width: "100%", alignItems: "flex-end" }}>
          <Text
            style={styles.characterCountText}
          >{`${currentTextLength}/${maxCharacterLength}`}</Text>
        </View>
      </View>
      <BottomButton text={"저장"} onPress={checkTextLength} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
  },
  descriptionText: {
    fontSize: 16,
    marginBottom: 10,
  },
  characterCountText: {
    fontSize: 13,
    color: colors.smallTextGray2,
    marginBottom: 10,
  },
});

export default NewIntroDetail;
