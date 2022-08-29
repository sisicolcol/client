import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors } from "../theme";

const SignUpButton = ({ text, onPress, isSelected, marginRight }) => {
  return (
    <TouchableOpacity
      style={styles(isSelected, marginRight).button}
      onPress={onPress}
    >
      <Text style={styles(isSelected).text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = (isSelected, marginRight) =>
  StyleSheet.create({
    button: {
      borderColor: colors.mainBlue,
      backgroundColor: isSelected ? colors.mainBlue : "white",
      borderWidth: 1,
      borderRadius: 20,
      paddingVertical: 7,
      paddingHorizontal: 13,
      marginRight: marginRight,
    },
    text: {
      fontSize: 16,
      color: isSelected ? "white" : colors.mainBlue,
    },
  });

export default SignUpButton;
