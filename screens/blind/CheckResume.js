import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
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

const CheckResume = ({ navigation, route }) => {
  const data = route.params.resume;
  const [openModal, setOpenModal] = useState(false);
  const [helperStatus, setHelperStatus] = useState(data.isPressable);

  return (
    <View style={defaultScreen}>
      <View
        style={{
          ...shadowView,
          alignItems: "flex-start",
          paddingHorizontal: 25,
          paddingVertical: 20,
          marginTop: 24,
        }}
      >
        <Text style={styles.helperName}>활동지원사 {data.hp_name}님</Text>
        <View style={styles.resumeContainer}>
          <Text>{data.resume}</Text>
        </View>

        {helperStatus === false ? null : helperStatus === "accept" ? (
          <MainButton
            isBlue={true}
            isBig={false}
            width="100%"
            text={"수락함"}
          />
        ) : helperStatus === "denied" ? (
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
                setHelperStatus("accept");
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
                  navigation.navigate("Chat"); //수정 필요
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
                  navigation.navigate("Home");
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
                  setHelperStatus("denied");
                  setOpenModal(false);
                }}
              />
            </View>
          )}
        </DefaultModal>
      )}
      <BottomButton
        text="홈 화면으로 돌아가기"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
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