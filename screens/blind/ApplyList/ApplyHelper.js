import { Text, View, Image, SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";
import MainButton from "../../../components/common/MainButton";
import BottomButton from "../../../components/common/BottomButton";
import { colors, fontSizes, defaultScreen, shadowView } from "../../../theme";
import NoHelper from "../../../assets/img/NoHelper.png";
import { getMatchingHelperList } from "../../../api/api.member";

const ApplyHelper = ({ navigation, route }) => {
  const apply = route.params.detailData;
  const [helper, setHelper] = useState({ hp_id: "", hp_name: "" });

  useEffect(() => {
    const fetchData = async () => {
      await getMatchingHelperList(apply.apply_id).then((data) => {
        if (data.isSuccess && data.result.length !== 0) {
          let tmpArr = data.result.find((data) => data.status === 1);
          if (tmpArr !== undefined) setHelper(data.result[0]);
        }
      });
    };

    fetchData();
  }, [navigation]);

  return (
    <SafeAreaView style={defaultScreen}>
      {helper.hp_name === "" ? (
        <View
          style={{
            height: "100%",
            marginTop: -84,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: colors.pageTextGray1,
              letterSpacing: -0.01,
              fontSize: fontSizes.smallInfo,
              textAlign: "center",
              marginBottom: 16,
            }}
          >
            아직 활동 지원사 매칭이{"\n"}이루어지지 않았어요!
          </Text>
          <Image
            source={NoHelper}
            style={{ width: 94, height: 84 }}
            accessible={false}
            accessibilityRole="image"
          />
        </View>
      ) : (
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
          <Text style={{ fontSize: fontSizes.bigText }}>
            활동지원사 {helper.hp_name}님
          </Text>

          <View style={{ paddingVertical: 16, width: "100%" }}>
            <MainButton
              isBlue={true}
              isBold={true}
              isBig={false}
              width="100%"
              text="이력서 확인하기"
              onPress={() =>
                navigation.navigate("ApplyCheckResume", {
                  resume: {
                    hp_id: helper.hp_id,
                    hp_name: helper.hp_name,
                    isPressable: false,
                  },
                })
              }
            />
          </View>
          <MainButton
            isBlue={true}
            isBold={true}
            isBig={false}
            width="100%"
            text="활동지원사와의 채팅방으로 이동하기"
            onPress={() => navigation.navigate("Chat")} //수정 필요, 채팅방 각각으로 이동해야됨
          />
        </View>
      )}

      <BottomButton
        text="홈 화면으로 돌아가기"
        onPress={() => navigation.popToTop()}
      />
    </SafeAreaView>
  );
};

export default ApplyHelper;
