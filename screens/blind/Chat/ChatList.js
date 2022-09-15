import { SafeAreaView, StyleSheet, Text, ScrollView, View } from "react-native";
import React, { useState, useEffect } from "react";
import PageInfo from "../../../components/common/PageInfo";
import { colors, fontSizes } from "../../../theme";
import MainButton from "../../../components/common/MainButton";
import BottomButton from "../../../components/common/BottomButton";
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
        style={{ paddingHorizontal: 16, marginBottom: 100 }}
      >
        <View style={{ marginLeft: 30 }}>
          <PageInfo
            colorTitle={"활동지원사"}
            title={"와\n채팅하기"}
            isBold={false}
            marginBottom={32}
          />
        </View>
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
              {loading ? "로딩 중..." : `아직 활동지원사와\n매칭되지 않았어요!`}
            </Text>
          </View>
        ) : (
          chatRoomList.map((room) => {
            return (
              <View key={room.chat_room_no} style={styles.chatRoom}>
                <Text style={{ fontSize: fontSizes.bigText, marginBottom: 16 }}>
                  활동지원사 {room.blind_user_name}님
                </Text>
                <MainButton
                  text="채팅방으로 이동하기"
                  isBlue={true}
                  isBig={false}
                  isBold={true}
                  width="100%"
                  marginBottom={0}
                  onPress={() => {
                    navigation.navigate("Chat", { room: room, mem_no: memNo });
                  }}
                />
              </View>
            );
          })
        )}
      </KeyboardAwareScrollView>
      <BottomButton
        text={"홈 화면으로 돌아가기"}
        onPress={() => navigation.popToTop()}
      />
    </SafeAreaView>
  );
};

export default ChatList;

const styles = StyleSheet.create({
  chatRoom: {
    alignItems: "flex-start",
    borderWidth: 2,
    borderColor: colors.stroke,
    borderRadius: 12,
    paddingHorizontal: 30,
    paddingVertical: 20,
    marginBottom: 8,
  },
});
