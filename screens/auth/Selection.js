import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import PageInfo from "../../components/common/PageInfo";
import { colors, fontSizes } from "../../theme";

const Selection = () => {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
      <View
        style={{
          width: "90%",
          marginTop: 70,
          alignItems: "center",
          flex: 1,
        }}
      >
        <PageInfo
          isBold={false}
          title={"언제 어디서나\n시시콜콜과 함께해요!"}
          desc="내가 원하는 기능을 선택해 주세요."
        />
      </View>
      <View style={{ flexDirection: "row", flex: 2 }}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>시각장애인</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>활동지원사</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.mainBlue,
    borderColor: colors.stroke,
    borderRadius: 10,
    width: 150,
    height: 185,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 15,
  },
  text: {
    color: "white",
    fontSize: fontSizes.bigButton,
    fontWeight: "bold",
  },
});

export default Selection;
