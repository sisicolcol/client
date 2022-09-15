import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import BottomButton from "../../components/common/BottomButton";
import MainButton from "../../components/common/MainButton";
import DefaultModal from "../../components/common/DefaultModal";
import {
  colors,
  defaultScreen,
  shadowView,
  modalButtonText,
} from "../../theme";
import { getMatchingHelperResume, postAcceptApply } from "../../api/api.member";
import { getUserToken } from "../../components/Storage";

const CheckResume = ({ navigation, route }) => {
  const { pg_id, hp_id, hp_name, isPressable } = route.params.resume;
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [resume, setResume] = useState("");
  const [helperStatus, setHelperStatus] = useState(isPressable);

  useEffect(() => {
    getMatchingHelperResume(hp_id)
      .then((data) => {
        if (data.isSuccess && data.result.length !== 0) {
          setResume(data.result[0].content);
        }
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, [navigation]);

  const postAccept = async (status) => {
    const userToken = await getUserToken();
    postAcceptApply(status, pg_id, userToken)
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <SafeAreaView style={defaultScreen}>
      <View
        style={{
          ...shadowView,
          alignItems: "flex-start",
          paddingHorizontal: 25,
          paddingVertical: 20,
          marginTop: 24,
        }}
      >
        <Text style={styles.helperName}>활동지원사 {hp_name}님</Text>
        <View style={styles.resumeContainer}>
          <Text>{resume}</Text>
        </View>

        {helperStatus === false ? null : helperStatus === 1 ? (
          <MainButton
            isBlue={true}
            isBig={false}
            width="100%"
            text={"수락함"}
          />
        ) : helperStatus === -1 ? (
          <MainButton
            isBlue={true}
            isBig={false}
            width="100%"
            text={"거절함"}
          />
        ) : (
          <>
            <MainButton
              isBlue={true}
              isBig={false}
              width="100%"
              text={"수락하기"}
              onPress={() => {
                setOpenModal("accept");
                setHelperStatus(1);
                postAccept(1);
              }}
            />
            <View style={{ height: 16 }} />
            <MainButton
              isBlue={true}
              isBig={false}
              width="100%"
              text={"거절하기"}
              onPress={() => setOpenModal("denied")}
            />
          </>
        )}
      </View>
      {openModal !== false && (
        <DefaultModal showModal={true} setShowModal={setOpenModal}>
          {openModal === "accept" ? (
            <View style={{ width: "100%", alignItems: "center" }}>
              <AntDesign
                name="checkcircleo"
                size={25}
                style={{
                  fontWeight: "600",
                  textAlign: "center",
                  marginBottom: 10.5,
                }}
                color={colors.mainBlue}
              />
              <Text style={modalButtonText}>매칭이 완료되었습니다.</Text>
              <View style={{ height: 16 }} />
              <MainButton
                isBlue={true}
                isBig={false}
                width={"100%"}
                text={"활동지원사와 채팅하기"}
                onPress={() => {
                  setOpenModal(false);
                  navigation.navigate("ChatList"); //수정 필요
                }}
              />

              <View style={{ height: 16 }} />
              <MainButton
                isBlue={true}
                isBig={false}
                width={"100%"}
                text={"홈 화면으로 돌아가기"}
                onPress={() => {
                  setOpenModal(false);
                  navigation.popToTop();
                }}
              />
            </View>
          ) : (
            <View style={{ width: "100%", alignItems: "center" }}>
              <Text style={modalButtonText}>정말 거절하시겠습니까?</Text>
              <View style={{ height: 16 }} />
              <MainButton
                isBlue={true}
                isBig={false}
                width={"100%"}
                text={"아니오"}
                onPress={() => setOpenModal(false)}
              />

              <View style={{ height: 16 }} />
              <MainButton
                isBlue={true}
                isBig={false}
                width={"100%"}
                text={"예"}
                onPress={() => {
                  setHelperStatus(-1);
                  setOpenModal(false);
                  postAccept(-1);
                }}
              />
            </View>
          )}
        </DefaultModal>
      )}
      <BottomButton
        text="홈 화면으로 돌아가기"
        onPress={() => navigation.popToTop()}
      />
    </SafeAreaView>
  );
};

export default CheckResume;

const styles = StyleSheet.create({
  helperName: {
    fontSize: 22,
  },
  resumeContainer: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.mainBlue,
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 16,
  },
});
