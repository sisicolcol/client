import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { colors, fontSizes } from "../../theme";

const MainButton = ({
  isBlue,
  isBold,
  isBig,
  width,
  text,
  onPress,
  marginBottom,
}) => {
  return (
    <TouchableOpacity
      style={styles(isBlue, isBold, isBig, width, marginBottom).button}
      onPress={onPress}
    >
      <Text style={styles(isBlue, isBold, isBig, width, marginBottom).text}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = (isBlue, isBold, isBig, width, marginBottom) =>
  StyleSheet.create({
    button: {
      backgroundColor: isBlue ? colors.mainBlue : "white",
      borderColor: colors.stroke,
      borderWidth: isBlue ? 0 : 1,
      borderRadius: 10,
      width: width,
      height: isBig ? 64 : 46,
      marginBottom: marginBottom,
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
