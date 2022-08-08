import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { colors, fontSizes } from "../../theme";

const MainButton = ({ isBlue, isBold, isBig, width, onPress }) => {
  return (
    <TouchableOpacity
      style={styles(isBlue, isBold, isBig, width).button}
      onPress={onPress}
    >
      <Text style={styles(isBlue, isBold, isBig, width).text}>
        활동지원서비스 신청하기
      </Text>
    </TouchableOpacity>
  );
};

const styles = (isBlue, isBold, isBig, width) =>
  StyleSheet.create({
    button: {
      backgroundColor: isBlue ? colors.mainBlue : "white",
      borderColor: colors.stroke,
      borderWidth: isBlue ? 0 : 1,
      borderRadius: 10,
      width: width,
      height: isBig ? 64 : 46,
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      color: isBlue ? "white" : "black",
      fontSize: isBig ? fontSizes.bigButton : fontSizes.smallButton,
      fontWeight: isBold ? "bold" : "400",
    },
  });
export default MainButton;