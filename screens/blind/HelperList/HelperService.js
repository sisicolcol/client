import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useState } from "react";
import MainButton from "../../../components/common/MainButton";
import { shadowView, colors, modalButtonText } from "../../../theme";
import DefaultModal from "../../../components/common/DefaultModal";
import { AntDesign } from "@expo/vector-icons";
import { postAcceptApply } from "../../../api/api.member";

const HelperService = ({ helper, navigate }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <SafeAreaView
      style={{
        ...shadowView,
        alignItems: "flex-start",
        paddingHorizontal: 20,
        paddingVertical: 25,
      }}
    >
      <Text style={styles.helperName}>활동지원사 {helper.hp_name}님</Text>
      <View style={styles.helperDetail}>
        <Text style={styles.detailLabel}>신청일시:</Text>
        <Text style={styles.detailContent}>
          {helper.apply_date.slice(0, 10)}
        </Text>
      </View>
      <View style={styles.helperDetail}>
        <Text style={styles.detailLabel}>출발지:</Text>
        <Text style={styles.detailContent}>{helper.start_point}</Text>
      </View>
      <View style={styles.helperDetail}>
        <Text style={styles.detailLabel}>도착지:</Text>
        <Text style={styles.detailContent}>{helper.end_point}</Text>
      </View>
      <View style={styles.helperDetail}>
        <Text style={styles.detailLabel}>매칭여부:</Text>
        <Text style={styles.detailContent}>
          {helper.status > 0 ? "매칭 확정" : "매칭 안 됨"}
        </Text>
      </View>

      <View style={{ height: 16 }} />
      <MainButton
        isBlue={true}
        isBig={false}
        width="100%"
        text={"이력서 확인하기"}
        onPress={() =>
          navigate({
            route: "HelperCheckResume",
            resume: {
              pg_id: helper.pg_id,
              hp_id: helper.hp_id,
              hp_name: helper.hp_name,
              isPressable: helper.status,
            },
          })
        }
      />

      <View style={{ height: 16 }} />
      {helper.status === 0 && (
        <MainButton
          isBlue={true}
          isBig={false}
          width="100%"
          text={"수락하기"}
          onPress={() => {
            setOpenModal("accept");
            postAcceptApply(1, helper.pg_id);
          }}
        />
      )}

      {openModal !== false && (
        <DefaultModal showModal={true} setShowModal={setOpenModal}>
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
              width="100%"
              text={"활동지원사와 채팅하기"}
              onPress={() => {
                setOpenModal(false);
                navigate({ route: "ChatList" }); //수정 필요
              }}
            />

            <View style={{ height: 16 }} />
            <MainButton
              isBlue={true}
              isBig={false}
              width="100%"
              text={"홈 화면으로 돌아가기"}
              onPress={() => {
                setOpenModal(false);
                navigate({ route: "Home" });
              }}
            />
          </View>
        </DefaultModal>
      )}
    </SafeAreaView>
  );
};

export default HelperService;

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
});
