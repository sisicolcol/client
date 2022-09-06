import { SafeAreaView, StyleSheet, Text, ScrollView, View } from "react-native";
import React, { useState, useEffect } from "react";
import PageInfo from "../../../components/common/PageInfo";
import { colors, fontSizes } from "../../../theme";
import MainButton from "../../../components/common/MainButton";
import BottomButton from "../../../components/common/BottomButton";

const ChatList = ({ navigation }) => {
  const [chatRoomList, setChatRoomList] = useState(data.result);

  //   const fetchHere = () => {
  //     fetch("http://172.30.1.1:3000/api/hp/setprofile", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         hp_id: "hp4",
  //         hp_name: "hpname4",
  //         hp_idc_id: 5,
  //         content: "수정된자기소개서내용",
  //       }),
  //     })
  //       .then((response) => console.log(response))
  //       .catch((error) => console.error(error));
  //   };

  //   useEffect(() => {
  //     fetchHere();
  //   }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingTop: 8,
      }}
    >
      <ScrollView style={{ paddingHorizontal: 16, marginBottom: 100 }}>
        <View style={{ marginLeft: 46 }}>
          <PageInfo
            title={"와\n채팅하기"}
            colorTitle={"활동지원사"}
            isBold={false}
            marginBottom={32}
          />
        </View>
        {chatRoomList.map((room) => {
          return (
            <View key={room.chat_room_no} style={styles.chatRoom}>
              <Text style={{ fontSize: fontSizes.bigText, marginBottom: 16 }}>
                활동지원사 {room.other}님
              </Text>
              <MainButton
                text="채팅방으로 이동하기"
                isBlue={true}
                isBig={false}
                isBold={true}
                width="100%"
                marginBottom={0}
                onPress={() => {
                  navigation.navigate("Chat", { room: room.chat_room_no });
                }}
              />
            </View>
          );
        })}
      </ScrollView>
      <BottomButton
        text={"홈 화면으로 돌아가기"}
        onPress={() => navigation.navigate("Home")}
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

const data = {
  isSuccess: true,
  code: 100,
  message: "성공",
  result: [
    {
      recent: "매칭 성공 테스트1",
      other: "testname4",
      partner_mem_no: 8,
      chat_room_no: 1,
      time: "3시간",
    },
    {
      recent: "매칭 성공 테스트2",
      other: "testname5",
      partner_mem_no: 8,
      chat_room_no: 2,
      time: "1시간",
    },
    {
      recent: "매칭 성공 테스트3",
      other: "testname6",
      partner_mem_no: 8,
      chat_room_no: 3,
      time: "2시간",
    },
    {
      recent: "매칭 성공 테스트3",
      other: "testname6",
      partner_mem_no: 12,
      chat_room_no: 6,
      time: "5시간",
    },
    {
      recent: "매칭 성공 테스트3",
      other: "testname6",
      partner_mem_no: 12,
      chat_room_no: 23,
      time: "5시간",
    },
  ],
};
