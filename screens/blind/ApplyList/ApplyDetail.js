import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BottomButton from "../../../components/common/BottomButton";
import { colors, fontSizes, defaultScreen, shadowView } from "../../../theme";

const ApplyDetail = ({ navigation, route }) => {
  const apply = route.params.detailData;

  return (
    <View style={defaultScreen}>
      <View
        style={{
          ...shadowView,
          alignItems: "flex-start",
          justifyContent: "space-between",
          paddingHorizontal: 25,
          paddingVertical: 20,
          marginTop: 24,
        }}
      >
        {/*간단한 정보(공통) */}
        <View style={styles.applyDetail}>
          <Text style={styles.detailLabel}>신청일시:</Text>
          <Text style={styles.detailContent}>{apply.service_day}</Text>
        </View>
        <View style={styles.applyDetail}>
          <Text style={styles.detailLabel}>출발지:</Text>
          <Text style={styles.detailContent}>{apply.start_point}</Text>
        </View>
        <View style={styles.applyDetail}>
          <Text style={styles.detailLabel}>도착지:</Text>
          <Text style={styles.detailContent}>{apply.end_point}</Text>
        </View>
        <View style={styles.applyDetail}>
          <Text style={styles.detailLabel}>왕복/편도:</Text>
          <Text style={styles.detailContent}>
            {apply.way ? "왕복" : "편도"}
          </Text>
        </View>
        <View style={styles.applyDetail}>
          <Text style={styles.detailLabel}>소요시간:</Text>
          <Text style={styles.detailContent}>{apply.duration}시간</Text>
        </View>
        <View style={styles.applyDetail}>
          <Text style={styles.detailLabel}>바라는 사항:</Text>
          <Text style={styles.detailContent}>{apply.contents}</Text>
        </View>
        <View style={styles.applyDetail}>
          <Text style={styles.detailLabel}>신청 내용:</Text>
          <Text style={styles.detailContent}>{apply.details}</Text>
        </View>
        <View style={styles.applyDetail}>
          <Text style={styles.detailLabel}>매칭여부:</Text>
          <Text
            style={{
              ...styles.detailContent,
              color:
                apply.isMatching && apply.isComplete
                  ? colors.mainBlue
                  : "black",
            }}
          >
            {apply.isMatching ? "매칭 확정" : "매칭 안 됨"}
          </Text>
        </View>
      </View>
      <BottomButton
        text="홈 화면으로 돌아가기"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

export default ApplyDetail;

const styles = StyleSheet.create({
  applyDetail: {
    flexDirection: "row",
    lineHeight: 22,
  },
  detailLabel: {
    fontSize: fontSizes.smallInfo,
    width: 100,
  },
  detailContent: {
    fontSize: fontSizes.smallInfo,
  },
});
