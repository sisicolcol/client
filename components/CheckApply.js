import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import MainButton from "./common/MainButton";
import { shadowView, colors } from "../theme";
import DefaultModal from "./common/DefaultModal";
import RadioButton from "./common/RadioButton";

import MultiLineinput from "./common/MultiLineInput";

const CheckApply = ({ apply, sendData }) => {
  const [toggle, setToggle] = useState(false);
  const [modalMode, setModalMode] = useState("");
  const [openModal, setOpenModal] = useState(false); //모달창
  const [checkReason, setCheckReason] = useState(0); //파투 사유
  const [text, setText] = useState(""); //사용자 입력(파투 사유, 초과 시간, 메모 등)
  const [focus, setfocus] = useState(false);

  const endProcessFunc = (endProcess) => {
    const data = {
      id: apply.id,
      endProcess: endProcess,
      text: text,
      checkReason: checkReason,
    };
    setOpenModal(false);
    sendData(data);
  };

  const getModalContent = (modalState) => {
    let content = "";
    switch (modalState) {
      case "memo":
        content = (
          <View style={{ width: "100%" }}>
            <Text style={styles.modalButtonText}>메모</Text>
            <MultiLineinput setText={setText} accessibility="메모 입력하기" />
          </View>
        );
        break;
      case "complete":
        content = (
          <View style={{ width: "100%" }}>
            <Text style={styles.modalButtonText}>
              예상 소요시간을 초과했나요?
            </Text>
            <Text style={styles.modalButtonTextDetail}>
              예상 소요시간이 초과된 경우,
              {"\n"}10분 단위로 추가 임금이 계산됩니다.
            </Text>
            <View style={styles.buttonWrap}>
              <MainButton
                isBlue={true}
                isBig={false}
                width={"100%"}
                text={"아니요"}
                onPress={() => {
                  setOpenModal(false);
                  endProcessFunc("end");
                }}
              />
            </View>
            <View style={styles.buttonWrap}>
              <MainButton
                isBlue={true}
                isBig={false}
                width={"100%"}
                text={"예"}
                onPress={() => setModalMode("overtime")}
              />
            </View>
          </View>
        );
        break;
      case "overtime":
        content = (
          <View style={{ width: "100%" }}>
            <Text style={styles.modalButtonText}>
              초과시간을 입력해 주세요.
            </Text>
            <Text style={styles.modalButtonTextDetail}>
              10분 단위로 추가 임금이 계산됩니다.
            </Text>
            <TextInput
              style={[
                styles.input,
                styles.inputStyle,
                {
                  borderBottomColor: focus ? colors.mainBlue : "#e0e0e0",
                },
              ]}
              onChangeText={setText}
              value={text}
              contextMenuHidden={true}
              placeholder="초과시간을 입력해 주세요."
              placeholderTextColor={colors.pageTextGray1}
              onBlur={() => setfocus(false)}
              onFocus={() => setfocus(true)}
            />
            <View style={styles.buttonWrap}>
              <MainButton
                isBlue={true}
                isBig={false}
                width={"100%"}
                text={"확인"}
                onPress={() => {
                  setOpenModal(false);
                  endProcessFunc("end");
                }}
              />
            </View>
          </View>
        );
        break;
      case "cancel":
        content = (
          <View style={{ width: "100%" }}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 18,
                fontWeight: "500",
                letterSpacing: -0.03,
                paddingBottom: 32,
              }}
            >
              파투 사유를 선택해주세요
            </Text>
            {cancelReason.map((reason) => (
              <RadioButton
                key={reason.id}
                data={reason}
                checked={checkReason === reason.id}
                onSelect={(value) => {
                  if (value === checkReason) {
                    setCheckReason(0);
                  } else {
                    setCheckReason(value);
                  }
                }}
              />
            ))}
            {/*사유 직접 입력하면 라디오 선택 초기화하고 다른 모달로 넘어감*/}
            <TouchableOpacity
              style={{ paddingVertical: 5 }}
              onPress={() => {
                // setCheckReason(0);
                setModalMode("reason");
              }}
            >
              <Text>클릭해서 사유를 직접 입력해 보세요.</Text>
            </TouchableOpacity>
            <View style={styles.buttonWrap}>
              <MainButton
                isBlue={true}
                isBig={false}
                width={"100%"}
                text={"확인"}
                onPress={() => {
                  setOpenModal(false);
                  endProcessFunc("cancel");
                }}
              />
            </View>
          </View>
        );
        break;
      case "reason":
        content = (
          <View style={{ width: "100%" }}>
            <Text style={styles.modalButtonText}>사유 직접 입력</Text>
            <MultiLineinput
              setText={setText}
              accessibility="파투 사유 직접 입력하기"
            />
            <View style={styles.buttonWrap}>
              <MainButton
                isBlue={true}
                isBig={false}
                width={"100%"}
                text={"확인"}
                onPress={() => {
                  setOpenModal(false);
                  endProcessFunc("cancel");
                }}
              />
            </View>
          </View>
        );
        break;
      default:
        break;
    }
    return content;
  };

  return (
    <View
      style={{
        ...shadowView,
        alignItems: "flex-start",
        paddingHorizontal: 20,
        paddingVertical: 25,
      }}
    >
      {/*간단한 정보(공통) */}
      <View style={styles.applyDetail}>
        <Text style={styles.detailLabel}>신청일시:</Text>
        <Text style={styles.detailContent}>{apply.date_time}</Text>
      </View>
      <View style={styles.applyDetail}>
        <Text style={styles.detailLabel}>출발지:</Text>
        <Text style={styles.detailContent}>{apply.start_location}</Text>
      </View>
      <View style={styles.applyDetail}>
        <Text style={styles.detailLabel}>도착지:</Text>
        <Text style={styles.detailContent}>{apply.dest_location}</Text>
      </View>
      <View style={styles.applyDetail}>
        <Text style={styles.detailLabel}>매칭여부:</Text>
        <Text
          style={{
            ...styles.detailContent,
            color:
              apply.isMatching && apply.isComplete ? colors.mainBlue : "black",
          }}
        >
          {apply.isMatching ? "매칭 확정" : "매칭 안 됨"}
        </Text>
      </View>

      {/* 서비스 완료 여부에 따른 버튼 세트*/}
      {apply.isComplete ? (
        <>
          <View style={styles.buttonWrap}>
            <MainButton
              isBlue={true}
              isBig={false}
              width={"100%"}
              text={"활동지원서비스 완료"}
              onPress={() => {
                setModalMode("complete");
                setOpenModal(true);
              }}
            />
          </View>

          <View style={styles.buttonWrap}>
            <MainButton
              isBlue={true}
              isBig={false}
              width={"100%"}
              text={"활동지원서비스 파투"}
              onPress={() => {
                setModalMode("cancel");
                setOpenModal(true);
              }}
            />
          </View>
        </>
      ) : (
        <>
          <View style={styles.buttonWrap}>
            <MainButton
              isBlue={true}
              isBig={false}
              width={"100%"}
              text={"자세한 신청 내용 보기"}
              onPress={() => setToggle(true)}
            />
          </View>

          <View style={styles.buttonWrap}>
            <MainButton
              isBlue={true}
              isBig={false}
              width={"100%"}
              text={"매칭 활동지원사 확인하기"}
              onPress={() => {
                // console.log("check");
                // 여기에서 활동지원사 확인 페이지로 넘어가기
              }}
            />
          </View>
          <View style={styles.buttonWrap}>
            <MainButton
              isBlue={true}
              isBig={false}
              width={"100%"}
              text={"메모"}
              onPress={() => {
                setModalMode("memo");
                setOpenModal(true);
              }}
            />
          </View>
        </>
      )}

      {openModal && (
        <DefaultModal showModal={openModal} setShowModal={setOpenModal}>
          {getModalContent(modalMode)}
        </DefaultModal>
      )}
    </View>
  );
};

export default CheckApply;

const styles = StyleSheet.create({
  applyDetail: {
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
    paddingBottom: 8,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
    letterSpacing: -0.03,
  },
  modalButtonTextDetail: {
    textAlign: "center",
    paddingBottom: 16,
    fontSize: 12,
    color: colors.mainBlue,
    letterSpacing: -0.03,
  },
  inputStyle: {
    fontSize: 18,
    fontWeight: "500",
    letterSpacing: -0.03,
  },
  input: {
    width: "100%",
    maxWidth: 800,
    height: 46,
    paddingHorizontal: 30,
    paddingBottom: 20,
    borderBottomWidth: 2,
  },
});

const cancelReason = [
  { id: 1, name: "예상치 못한 일정 변경" },
  { id: 2, name: "본인의 서비스 시간 착오" },
  { id: 3, name: "활동지원사의 서비스 시간 착오" },
];
