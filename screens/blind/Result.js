import { View, Image } from "react-native";
import React from "react";
import PageInfo from "../../components/common/PageInfo";
import BottomButton from "../../components/common/BottomButton";
import ServiceEnd from "../../assets/img/ServiceEnd.png";

const Result = ({ navigation, route }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          width: "100%",
          paddingTop: 80,
          alignItems: "center",
        }}
      >
        {route.params.endData.endProcess === "end" ? (
          <>
            <PageInfo
              title={"시시콜콜 활동지원서비스가\n만족스러우셨나요?"}
              desc={
                "활동지원사의 임금이\n등록하신 계좌에서 자동 결제되었습니다."
              }
              isBold={false}
            />
            <Image
              source={ServiceEnd}
              style={{
                marginTop: 56,
                width: 80,
                height: 80,
              }}
              accessible={false}
              accessibilityRole="image"
            />
          </>
        ) : (
          <PageInfo
            title={"다시 찾으실 때까지\n기다리겠습니다."}
            isBold={false}
          />
        )}
      </View>

      <BottomButton
        text="나의 지원목록 보기"
        onPress={() => navigation.navigate("ApplyList")}
      />
    </View>
  );
};

export default Result;
