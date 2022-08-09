import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../../theme";

//const data = {id : number(>= 1), name:String}

const RadioButton = ({ data, checked, onSelect }) => {
  const onSelectHandler = () => {
    onSelect(data.id);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.radioOption}
        onPress={onSelectHandler}
        activeOpacity={1}
        accessibilityRole="button"
        accessibilityLabel={
          checked ? `${data.name} 선택됨` : `${data.name} 선택 해제됨`
        }
      >
        {checked ? (
          <MaterialCommunityIcons
            accessibilityRole="radio"
            name="radiobox-marked"
            size={25}
            color={colors.mainBlue}
          />
        ) : (
          <MaterialCommunityIcons
            accessibilityRole="radio"
            name="radiobox-blank"
            size={25}
            color={colors.buttonGray3}
          />
        )}
        <Text style={styles.radioText}>{data.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  radioOption: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioText: {
    fontSize: 17,
    letterSpacing: -0.408,
    marginLeft: 10.5,
  },
});

export default RadioButton;
