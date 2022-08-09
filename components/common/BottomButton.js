import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors, fontSizes } from "../../theme";

const BottomButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={{ color: "white", fontSize: fontSizes.smallButton }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 100,
    backgroundColor: colors.mainBlue,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    paddingBottom: 30,
  },
});

export default BottomButton;
