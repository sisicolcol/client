import { React, useState } from "react";
import { View, Text, StyleSheet, TextInput, SafeAreaView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import BottomButton from "../../../components/common/BottomButton";
import PageInfo from "../../../components/common/PageInfo";
import DefaultModal from "../../../components/common/DefaultModal";
import { colors, shadowView, fontSizes } from "../../../theme";
import MainButton from "../../../components/common/MainButton";
import { postModifyResume } from "../../../api/api.helper";

const IntroDetail = ({ navigation, route }) => {
  const [resume, setResume] = useState(
    route.params.data ? route.params.data : ""
  );
  const [currentTextLength, setCurrentTextLength] = useState(
    route.params.data ? route.params.data.length : 0
  );
  const [isWarningModalOpen, setIsWarningModalOpen] = useState(false); // 분량 부족/초과 경고 모달
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false); // 저장 모달
  const maxCharacterLength = 600;

  const checkTextLength = () => {
    if (currentTextLength < 200) {
      setIsWarningModalOpen(true);
    } else if (currentTextLength > 600) {
      setIsWarningModalOpen(true);
    } else {
      setIsSuccessModalOpen(true);
    }
  };

  const saveDefaultResume = () => {
    const data = {
      is_exist: route.params.data ? 1 : 0,
      hp_id: route.params.id,
      content: resume,
    };
    postModifyResume(data)
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          width: "100%",
          marginTop: 20,
          alignItems: "center",
          marginBottom: 30,
        }}
      >
        <PageInfo isBold={false} title="기존 자기소개서 수정하기" />
      </View>
      <KeyboardAwareScrollView
        contentContainerStyle={{
          paddingBottom: 120,
          backgroundColor: "transparent",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={[shadowView, styles.introView]}>
          <View style={{ width: "100%", alignItems: "flex-start" }}>
            {/* <TextInput
              style={styles.titleText}
              placeholder="제목을 입력해주세요."
            /> */}
            <TextInput
              style={styles.descriptionText}
              placeholder="내용을 입력해주세요."
              multiline={true}
              value={resume}
              onChangeText={(text) => {
                setResume(text);
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
      </KeyboardAwareScrollView>
      <BottomButton text={"저장"} onPress={checkTextLength} />
      <DefaultModal
        showModal={isWarningModalOpen}
        setShowModal={setIsWarningModalOpen}
      >
        <Text style={styles.modalText}>
          {currentTextLength < 200
            ? "내용이 부족해요.\n더 자세히 작성해주세요!"
            : `자기소개서 분량(${maxCharacterLength}자)이\n초과하였습니다.`}
        </Text>
        <MainButton
          text={"네"}
          width={"100%"}
          isBlue={true}
          onPress={() => setIsWarningModalOpen(false)}
        />
      </DefaultModal>
      <DefaultModal
        showModal={isSuccessModalOpen}
        setShowModal={setIsSuccessModalOpen}
      >
        <Text style={styles.modalText}>
          {"변경된 내용을\n저장하시겠습니까?"}
        </Text>
        <MainButton
          text={"저장"}
          width={"100%"}
          isBlue={true}
          marginBottom={20}
          onPress={() => {
            setIsSuccessModalOpen(false);
            saveDefaultResume();
            //여기서 자기소개서 저장
          }}
        />
        <MainButton
          text={"취소"}
          width={"100%"}
          onPress={() => setIsSuccessModalOpen(false)}
        />
      </DefaultModal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  introView: {
    width: "90%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
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

export default IntroDetail;
