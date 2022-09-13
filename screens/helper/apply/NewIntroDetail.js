import { React, useState, useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet, TextInput } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import BottomButton from "../../../components/common/BottomButton";
import PageInfo from "../../../components/common/PageInfo";
import DefaultModal from "../../../components/common/DefaultModal";
import { colors, shadowView, fontSizes } from "../../../theme";
import MainButton from "../../../components/common/MainButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getNewResume } from "../../../components/Storage";

const NewIntroDetail = ({ navigation }) => {
  const [currentTextLength, setCurrentTextLength] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newResume, setNewResume] = useState("");
  const maxCharacterLength = 600;

  useEffect(() => {
    getNewResume().then((data) => {
      setNewResume(data);
      setCurrentTextLength(data.length);
    });
  }, [navigation]);

  const checkTextLength = () => {
    if (currentTextLength < 200) {
      setIsModalOpen(true);
    } else if (currentTextLength > 600) {
      setIsModalOpen(true);
    } else {
      // 저장 후 다음 화면으로
      AsyncStorage.setItem("NEW_IDC", newResume);
      navigation.goBack();
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
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
      <KeyboardAwareScrollView
        contentContainerStyle={{
          paddingBottom: 120,
          backgroundColor: "transparent",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
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
            {/* <TextInput
              style={styles.titleText}
              placeholder="제목을 입력해주세요."
            /> */}

            <TextInput
              placeholder="내용을 입력해주세요."
              style={{ ...styles.descriptionText, width: "100%" }}
              multiline
              onChangeText={(text) => {
                setCurrentTextLength(text.length);
                setNewResume(text);
              }}
              value={newResume}
            />
          </View>
          <View style={{ width: "100%", alignItems: "flex-end" }}>
            <Text
              style={styles.characterCountText}
            >{`${currentTextLength}/${maxCharacterLength}`}</Text>
          </View>
        </View>
      </KeyboardAwareScrollView>
      <BottomButton text={"저장"} onPress={checkTextLength} />
      <DefaultModal showModal={isModalOpen}>
        <Text style={styles.modalText}>
          {currentTextLength < 200
            ? "내용이 부족해요.\n더 자세히 작성해주세요!"
            : `자기소개서 분량(${maxCharacterLength}자)이\n초과하였습니다.`}
        </Text>
        <MainButton
          text={"네"}
          width={"100%"}
          isBlue={true}
          onPress={() => setIsModalOpen(false)}
        />
      </DefaultModal>
    </View>
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
  modalText: {
    fontSize: fontSizes.smallButton,
    marginBottom: 40,
    lineHeight: 30,
    textAlign: "center",
  },
});

export default NewIntroDetail;
