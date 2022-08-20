import { View } from "react-native";
import React from "react";
import PageInfo from "../../components/common/PageInfo";
import BottomButton from "../../components/common/BottomButton";

const Result = ({ navigation, route }) => {
  console.log("here: ", route.params.endData);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <View style={{ width: "80%", paddingTop: 80, paddingLeft: 16 }}>
        {route.params.endData.endProcess === "end" ? (
          <PageInfo
            title={"시시콜콜 활동지원서비스가\n만족스러우셨나요?"}
            desc={"활동지원사의 임금이\n등록하신 계좌에서 자동 결제되었습니다."}
            isBold={false}
          />
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
