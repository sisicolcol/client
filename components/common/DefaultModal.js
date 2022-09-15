import React from "react";
import { Modal, StyleSheet, View, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { AntDesign } from "@expo/vector-icons";

const DefaultModal = ({
  showModal,
  setShowModal,
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
      <View style={styles.centeredModalView}>
        <View style={styles.modalView}>
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityLabel="창 닫기 버튼"
            style={styles.closeBtn}
            onPress={() => setShowModal(false)}
          >
            <AntDesign
              name="close"
              size={13}
              color="black"
              accessibilityLabel="창 닫기 아이콘"
            />
          </TouchableOpacity>
          {children}
        </View>
      </View>
    </Modal>
  );
};

Modal.propTypes = {
  showModal: PropTypes.bool,
  setShowModal: PropTypes.func,
};

Modal.defaultProps = {
  showModal: true,
};

const styles = StyleSheet.create({
  centeredModalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    width: "80%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 12,
    paddingHorizontal: 30,
    paddingVertical: 30,
    alignItems: "center",
  },
  closeBtn: {
    marginLeft: "auto",
    padding: 10,
  },
});

export default DefaultModal;
