import { Text, View, Image } from "react-native";
import React from "react";
import MainButton from "../../../components/common/MainButton";
import BottomButton from "../../../components/common/BottomButton";
import { colors, fontSizes, defaultScreen, shadowView } from "../../../theme";
import NoHelper from "../../../assets/img/NoHelper.png";

const ApplyHelper = ({ navigation, route }) => {
  const apply = route.params.detailData;
  console.log(apply);

  return (
    <View style={defaultScreen}>
      {apply.hp_name === null ? (
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
            활동지원사 {apply.hp_name}님
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
                    hp_id: apply.hp_id,
                    hp_name: apply.hp_name,
                    resume:
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also th",
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
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

export default ApplyHelper;
