import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import PageInfo from "../../../components/common/PageInfo";
import { colors, fontSizes, shadowView } from "../../../theme";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { getUserId } from "../../../components/Storage";
import { getChatList } from "../../../api/api.main";

const ChatList = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [chatRoomList, setChatRoomList] = useState([]);
  const [memNo, setMemNo] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const user = await getUserId();
      await getChatList(user).then((data) => {
        if (data.isSuccess) {
          setMemNo(data.result.mem_no);
          setChatRoomList(data.result.checkList);
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
        paddingTop: 8,
      }}
    >
      <KeyboardAwareScrollView
        style={{
          paddingHorizontal: 16,
          marginBottom: 100,
        }}
      >
        <PageInfo
          colorTitle={"시각장애인"}
          title={"과\n채팅하기"}
          desc={"활동지원서비스  전\n매칭된 분과 대화를 나눌 수 있습니다."}
          isBold={false}
          marginBottom={8}
        />
        <View style={{ height: 32 }} />

        {chatRoomList.length === 0 ? (
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
              {loading ? "로딩 중..." : `아직 서비스에\n매칭되지 않았어요!`}
            </Text>
          </View>
        ) : (
          chatRoomList.map((room) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("HelperChat", {
                    room: room,
                    mem_no: memNo,
                  })
                }
                key={room.chat_room_no}
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
                    {room.partner}님
                  </Text>
                  <Text
                    style={{
                      marginBottom: 16,
                      color: colors.pageTextGray1,
                      fontSize: fontSizes.smallText,
                    }}
                  >
                    {room.time} 전
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    width: "100%",
                  }}
                >
                  <Text
                    style={{
                      fontSize: fontSizes.smallText,
                      color: colors.pageTextGray1,
                      marginRight: "auto",
                    }}
                  >
                    {room.content}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })
        )}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default ChatList;
