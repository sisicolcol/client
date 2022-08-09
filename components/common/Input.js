import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../../theme";

const Input = ({ label, placeholder, clearInput, sendValue }) => {
  const [text, setText] = useState("");
  const [focus, setfocus] = useState(false);

  useEffect(() => {
    sendValue(text);
  }, [text]);

  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.inputLabel, styles.inputStyle]}>{label}</Text>
      <View style={styles.inputRows}>
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
          placeholder={placeholder}
          placeholderTextColor={colors.pageTextGray1}
          onBlur={() => setfocus(false)}
          onFocus={() => setfocus(true)}
        />
        {clearInput && (
          <TouchableOpacity
            style={styles.closeButtonParent}
            accessibilityRole="button"
            accessibilityLabel={`현재 작성한 ${label} 지우기`}
            activeOpacity={1}
            onPress={() => setText("")}
          >
            <AntDesign
              name="closecircle"
              size={20}
              color={colors.clearInputGray4}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

Input.defalutProps = {
  label: "",
  placeholder: "",
  clearInput: false,
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    maxWidth: 800,
  },
  inputStyle: {
    fontSize: 18,
    fontWeight: "500",
    letterSpacing: "-0.03em",
  },
  inputLabel: {
    lineHeight: 26,
    paddingLeft: 30,
    marginBottom: 24,
  },
  inputRows: {
    position: "relative",
    width: "100%",
  },
  input: {
    width: "100%",
    maxWidth: 800,
    height: 46,
    paddingHorizontal: 30,
    paddingBottom: 20,
    borderBottomWidth: 2,
    outlineStyle: "none",
  },
  closeButtonParent: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    right: 32,
  },
});

export default Input;
