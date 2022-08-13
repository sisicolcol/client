import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors, fontSizes } from "../../theme";

const PageInfo = ({ title, desc, colorTitle, isBold, marginBottom }) => {
  return (
    <View style={styles(isBold, marginBottom).pageInfoView}>
      <Text style={styles(isBold, marginBottom).pageTitle}>
        {colorTitle !== "" && (
          <Text style={{ color: colors.mainBlue }}>{colorTitle}</Text>
        )}
        {title}
      </Text>
      {desc !== "" && (
        <Text style={styles(isBold, marginBottom).pageDesc}>{desc}</Text>
      )}
    </View>
  );
};

PageInfo.defaultProps = {
  title: "",
  desc: "",
  colorTitle: "",
  isBold: true,
  marginBottom: 16,
};

const styles = (isBold, marginBottom) =>
  StyleSheet.create({
    pageInfoView: {
      width: "100%",
    },
    pageTitle: {
      fontSize: fontSizes.bigInfo,
      marginBottom: marginBottom,
      fontWeight: isBold ? "600" : "normal",
    },
    pageDesc: {
      fontSize: fontSizes.smallInfo,
      color: colors.pageTextGray1,
    },
  });

export default PageInfo;
