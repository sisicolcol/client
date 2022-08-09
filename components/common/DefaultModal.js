import React from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import PropTypes from "prop-types";

const DefaultModal = ({
  showModal,
  setShowModal,
  maskClosable, //외부 클릭해서 닫는 속성이 있을 경우
  children, // 컴포넌트를 자식으로 넘겨받는다.
}) => {
  return (
    <Modal
      transparent={true}
      visible={showModal}
      onRequestClose={() => {
        setShowModal(false);
      }}
    >
      <TouchableOpacity
        style={styles.centeredModalView}
        activeOpacity={1}
        accessibilityLabel={
          maskClosable ? "선택 화면 닫기" : "선택 화면 배경 화면"
        }
        accessibilityRole={maskClosable ? "button" : "none"}
        onPressOut={() => {
          maskClosable ? setShowModal(false) : null;
        }}
      >
        <TouchableWithoutFeedback accessibilityLabel="선택 화면">
          <View style={styles.modalView}>{children}</View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
    //     <Modal
    //     transparent={true}
    //     visible={showModal}
    //     onRequestClose={() => {
    //       setShowModal(false);
    //     }}
    //   >
    //     <View style={styles.centeredModalView}>
    //       <View style={styles.modalView}>
    //         {children}
    //       </View>
    //     </View>
    //   </Modal>
  );
};

Modal.propTypes = {
  showModal: PropTypes.bool,
  setShowModal: PropTypes.func,
  maskClosable: PropTypes.bool,
};

Modal.defaultProps = {
  showModal: true,
  maskClosable: false,
};

const styles = StyleSheet.create({
  centeredModalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 12,
    paddingHorizontal: 30,
    paddingVertical: 30,
    alignItems: "center",
  },
});

export default DefaultModal;
