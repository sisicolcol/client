import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { getAlertList } from "../../api/api.member";
import { colors, fontSizes } from "../../theme";
import BottomButton from "../../components/common/BottomButton";
import { getUserId } from "../../components/Storage";

const AlertList = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [alertArr, setAlertArr] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const user = await getUserId();
      await getAlertList(user).then((data) => {
        console.log(data);
        if (data.isSuccess) {
          setAlertArr(data.result.result);
          setLoading(false);
        }
      });
    };

    fetchData();
  }, [navigation]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      {alertArr.length === 0 ? (
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
            }}
          >
            {loading ? "로딩 중..." : `아직 알림이\n수신되지 않았어요!`}
          </Text>
        </View>
      ) : (
        <KeyboardAwareScrollView
          contentContainerStyle={{
            width: "100%",
            alignItems: "center",
            paddingBottom: 120,
            paddingTop: 24,
            paddingHorizontal: 16,
          }}
        >
          {alertArr.map((alert) => {
            return (
              <View style={{ ...shadowView, marginBottom: 8 }}>
                {alert.message}
              </View>
            );
          })}
        </KeyboardAwareScrollView>
      )}

      <BottomButton
        text="홈 화면으로 돌아가기"
        onPress={() => navigation.popToTop()}
      />
    </SafeAreaView>
  );
};

export default AlertList;

const styles = StyleSheet.create({});
