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
            style={styles.closeBtn}
            onPress={() => setShowModal(false)}
          >
            <AntDesign name="close" size={13} color="black" />
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
    margin: 20,
    backgroundColor: "white",
    borderRadius: 12,
    paddingHorizontal: 30,
    paddingVertical: 30,
    alignItems: "center",
  },
  closeBtn: {
    marginLeft: "auto",
  },
});

export default DefaultModal;
