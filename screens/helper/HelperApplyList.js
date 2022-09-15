import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import PageInfo from "../../components/common/PageInfo";
import { colors, fontSizes, shadowView } from "../../theme";
import { getUserId } from "../../components/Storage";
import { useIsFocused } from "@react-navigation/native";
import { getApplyList } from "../../api/api.helper";
import { differenceInHours, parseISO } from "date-fns";
import MainButton from "../../components/common/MainButton";

const HelperApplyList = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [applyList, setApplyList] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    const fetchData = async () => {
      const user = await getUserId();
      await getApplyList(user).then((data) => {
        if (data.isSuccess) {
          let tmp = data.result;
          tmp = tmp.filter((data) => data.status < 2);
          setApplyList(tmp);
          setLoading(false);
        }
      });
    };
    fetchData();
  }, [navigation, isFocused]);

  const getDifferenceTime = (date) => {
    let apply = parseISO(date);

    let diff = differenceInHours(new Date(), apply);
    if (diff > 24) {
      return Math.floor(diff / 24) + "일 전 지원";
    } else if (diff > 0) {
      return diff + "시간 전 지원";
    } else {
      return "방금 전 지원";
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <ScrollView
        style={{
          paddingHorizontal: 16,
        }}
      >
        <PageInfo
          colorTitle={"나의 지원목록"}
          desc={
            "내가 지원한 활동지원서비스 신청건별\n진행 상황을 한눈에 볼 수 있습니다."
          }
          isBold={false}
          marginBottom={8}
        />
        <View style={{ width: "100%", marginTop: 32 }}>
          <Text style={{ marginLeft: "auto" }}>총 {applyList.length}건</Text>
        </View>

        {applyList.length === 0 ? (
          <View
            style={{
              marginTop: "50%",
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
              {loading ? "로딩 중..." : `아직 서비스에\n지원하지 않았어요!`}
            </Text>
          </View>
        ) : (
          applyList.map((apply) => {
            return (
              <View
                key={apply.apply_id}
                style={{
                  ...shadowView,
                  paddingHorizontal: 30,
                  paddingVertical: 20,
                  marginVertical: 8,
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{ fontSize: fontSizes.bigText, marginBottom: 16 }}
                  >
                    {apply.mem_name || apply.mem_id}님
                  </Text>
                  <Text
                    style={{
                      marginBottom: 16,
                      color: colors.pageTextGray1,
                      fontSize: fontSizes.smallText,
                    }}
                  >
                    {getDifferenceTime(apply.apply_date)}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    width: "100%",
                    marginBottom: 16,
                  }}
                >
                  <TouchableOpacity
                    style={{
                      flex: 5.5,
                      alignItems: "center",
                      paddingVertical: 10,
                    }}
                    onPress={() =>
                      navigation.navigate("ApplyLinkDetail", {
                        apply_id: apply.apply_id,
                      })
                    }
                  >
                    <Text style={{ fontSize: fontSizes.smallButton }}>
                      공고 자세히 보기
                    </Text>
                  </TouchableOpacity>
                  <View
                    style={{
                      flex: 5.5,
                      alignItems: "center",
                      paddingVertical: 10,
                      backgroundColor:
                        apply.status === 1 ? "white" : colors.buttonGray3,
                    }}
                  >
                    <Text
                      style={{
                        flex: 4.5,
                        fontSize: fontSizes.smallText,
                        color: apply.status === 1 ? colors.mainBlue : "white",
                      }}
                    >
                      {apply.status === 1 ? "매칭" : "미승인"}
                    </Text>
                  </View>
                </View>
                {apply.status === 1 && (
                  <>
                    <MainButton
                      isBlue={true}
                      isBig={false}
                      width={"100%"}
                      marginBottom={24}
                      text={"채팅방으로 이동하기"}
                      onPress={() => navigation.navigate("HelperChatList")}
                    />
                    <View
                      style={{
                        width: "100%",
                        borderWidth: 1,
                        borderColor: colors.mainBlue,
                        borderRadius: 12,
                        paddingHorizontal: 46,
                        paddingVertical: 10,
                      }}
                    >
                      <Text>
                        {apply.hp_memo || "아직 작성된 메모가 없습니다."}
                      </Text>
                    </View>
                  </>
                )}
              </View>
            );
          })
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HelperApplyList;
