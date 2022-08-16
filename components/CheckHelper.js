import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import MainButton from "./common/MainButton";
import { shadowView, colors } from "../theme";
import DefaultModal from "./common/DefaultModal";
import { AntDesign } from "@expo/vector-icons";

const CheckHelper = ({ helper, navigate }) => {
  const [toggle, setToggle] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  return (
    <View
      style={{
        ...shadowView,
        alignItems: "flex-start",
        paddingHorizontal: 20,
        paddingVertical: 25,
      }}
    >
      <Text style={styles.helperName}>활동지원사 {helper.name}님</Text>
      <View style={styles.helperDetail}>
        <Text style={styles.detailLabel}>신청일시:</Text>
        <Text style={styles.detailContent}>{helper.date_time}</Text>
      </View>
      <View style={styles.helperDetail}>
        <Text style={styles.detailLabel}>출발지:</Text>
        <Text style={styles.detailContent}>{helper.start_location}</Text>
      </View>
      <View style={styles.helperDetail}>
        <Text style={styles.detailLabel}>도착지:</Text>
        <Text style={styles.detailContent}>{helper.dest_location}</Text>
      </View>
      <View style={styles.helperDetail}>
        <Text style={styles.detailLabel}>매칭여부:</Text>
        <Text style={styles.detailContent}>
          {helper.isMatching ? "매칭 확정" : "매칭 안 됨"}
        </Text>
      </View>
      {toggle && (
        <View>
          <Text>이것저것정보</Text>
        </View>
      )}
      {!toggle && (
        <View style={styles.buttonWrap}>
          <MainButton
            isBlue={true}
            isBig={false}
            width="100%"
            text={"이력서 확인하기"}
            onPress={() => setToggle(true)}
          />
        </View>
      )}
      <View style={styles.buttonWrap}>
        <MainButton
          isBlue={true}
          isBig={false}
          width="100%"
          text={"수락하기"}
          onPress={() => setOpenModal("accept")}
        />
      </View>
      {toggle && (
        <View style={styles.buttonWrap}>
          <MainButton
            isBlue={true}
            isBig={false}
            width="100%"
            text={"거절하기"}
            onPress={() => setOpenModal("denied")}
          />
        </View>
      )}
      {openModal && (
        <DefaultModal showModal={openModal} setShowModal={setOpenModal}>
          {openModal === "accept" ? (
            <View>
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
              <Text style={styles.modalButtonText}>매칭이 완료되었습니다.</Text>
              <View style={styles.buttonWrap}>
                <MainButton
                  isBlue={true}
                  isBig={false}
                  width="100%"
                  text={"활동지원사와 채팅하기"}
                  onPress={() => setOpenModal(true)}
                />
              </View>
              <View style={styles.buttonWrap}>
                <MainButton
                  isBlue={true}
                  isBig={false}
                  width="100%"
                  text={"홈 화면으로 돌아가기"}
                  onPress={() => {
                    setOpenModal(false);
                    navigate("Home");
                  }}
                />
              </View>
            </View>
          ) : (
            <View>
              <Text style={styles.modalButtonText}>정말 거절하시겠습니까?</Text>
              <View style={styles.buttonWrap}>
                <MainButton
                  isBlue={true}
                  isBig={false}
                  width="100%"
                  text={"아니오"}
                  onPress={() => setOpenModal(false)}
                />
              </View>
              <View style={styles.buttonWrap}>
                <MainButton
                  isBlue={true}
                  isBig={false}
                  width="100%"
                  text={"예"}
                  onPress={() => setOpenModal(false)}
                />
              </View>
            </View>
          )}
        </DefaultModal>
      )}
    </View>
  );
};

export default CheckHelper;

const styles = StyleSheet.create({
  helperName: {
    fontSize: 22,
    paddingBottom: 16,
  },
  helperDetail: {
    flexDirection: "row",
    lineHeight: 22,
  },
  detailLabel: {
    width: 100,
  },
  buttonWrap: {
    paddingTop: 16,
    width: "100%",
  },
  modalButtonText: {
    fontSize: 18,
    fontWeight: "500",
    letterSpacing: "-0.03em",
  },
});
