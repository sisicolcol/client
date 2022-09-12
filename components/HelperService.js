import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors, shadowView, fontSizes } from "../theme";
import MainButton from "./common/MainButton";

const LocationText = ({ text }) => {
  return (
    <View style={{ width: "100%" }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontSize: 18 }}>{text}</Text>
      </View>
      <View
        style={{
          height: 2,
          backgroundColor: colors.checkButtonGray5,
          marginTop: 15,
          marginBottom: 30,
        }}
      />
    </View>
  );
};

const HelperService = ({
  name,
  time,
  start,
  dest,
  checkOnPress,
  applyOnPress,
}) => {
  return (
    <View style={[shadowView, { paddingVertical: 20 }]}>
      <View
        style={{
          flexDirection: "row",
          width: "85%",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 30,
        }}
      >
        <Text style={{ fontSize: 22 }}>{`${name}님`}</Text>
        <Text style={{ fontSize: 18, color: colors.pageTextGray1 }}>
          {`${time}시간 소요 예상`}
        </Text>
      </View>
      <View style={{ width: "85%", alignItems: "center" }}>
        <LocationText text={start} />
        <LocationText text={dest} />
      </View>
      <View
        style={{
          width: "85%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          style={[styles.grayButton, { width: "63%" }]}
          onPress={checkOnPress}
        >
          <Text style={styles.text}>상세 내역 확인하기</Text>
        </TouchableOpacity>
        <MainButton
          text={"지원하기"}
          isBlue={true}
          width={"33%"}
          onPress={applyOnPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  grayButton: {
    backgroundColor: colors.buttonGray3,
    borderColor: colors.stroke,
    borderRadius: 10,
    height: 46,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: fontSizes.smallButton,
    fontWeight: "500",
  },
});
export default HelperService;
