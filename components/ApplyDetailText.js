import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { colors } from "../theme";

const ApplyDetailText = ({ label, text }) => {
  return (
    <View style={styles.textContainer}>
      <Text style={[styles.textLabel, styles.textStyle]}>{label}</Text>
      <View style={styles.textRows}>
        <Text style={[styles.text, styles.textStyle]}>{text}</Text>
        <View style={styles.textBottomView} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    width: "100%",
    maxWidth: 800,
  },
  textStyle: {
    fontSize: 18,
    fontWeight: "500",
    letterSpacing: 0.03,
  },
  textLabel: {
    lineHeight: 26,
    paddingLeft: 30,
    marginBottom: 24,
  },
  textRows: {
    position: "relative",
    width: "100%",
  },
  text: {
    width: "100%",
    maxWidth: 800,
    height: 46,
    paddingHorizontal: 30,
  },
  textBottomView: {
    width: "100%",
    height: 2,
    backgroundColor: colors.mainBlue,
    // marginBottom: 0,
  },
});

export default ApplyDetailText;
