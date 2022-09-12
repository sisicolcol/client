import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { parseISO, format } from "date-fns";
import ko from "date-fns/locale/ko";
import BottomButton from "../../../components/common/BottomButton";
import { colors, fontSizes, defaultScreen, shadowView } from "../../../theme";
import { getApplyDetail } from "../../../api/api.member";
const ApplyDetail = ({ navigation, route }) => {
  const [apply, setApply] = useState(route.params.detailData);

  useEffect(() => {
    if (apply === undefined || apply === null) {
      getApplyDetail(24)
        .then((data) => setApply(data))
        .catch((error) => console.error(error));
    }
  }, [route]);

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
          <Text style={styles.detailContent}>
            {format(parseISO(apply.service_date.slice(0, 10)), "M월 d일 (E) ", {
              locale: ko,
            })}
            {apply.service_time.slice(0, 5) +
              " - " +
              (parseInt(apply.service_time.slice(0, 2)) +
                Math.floor(apply.duration / 60)) +
              ":" +
              (parseInt(apply.service_time.slice(3, 5)) +
                (apply.duration % 60))}
          </Text>
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
          <Text style={styles.detailContent}>
            {apply.duration > 60
              ? Math.floor(apply.duration / 60) + "시간 "
              : null}
            {apply.duration % 60 !== 0 ? (apply.duration % 60) + "분" : null}
          </Text>
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
              color: apply.is_success ? colors.mainBlue : "black",
            }}
          >
            {apply.is_success ? "매칭 확정" : "매칭 안 됨"}
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
