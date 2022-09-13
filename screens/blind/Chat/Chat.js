import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import PageInfo from "../../../components/common/PageInfo";
import { colors, fontSizes } from "../../../theme";
import MainButton from "../../../components/common/MainButton";
import BottomButton from "../../../components/common/BottomButton";
import { TextInput } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

const Chat = ({ navigation, route }) => {
  const [chatList, setChatList] = useState(data.result.chat_list);
  const [message, setMessage] = useState("");
  const me = 46;

  const sendMessage = () => {
    sendMessage("");
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingTop: 8,
      }}
    >
      <View style={{ marginLeft: 46 }}>
        <PageInfo
          colorTitle={"활동지원사"}
          title={"와\n채팅하기"}
          isBold={false}
          marginBottom={32}
        />
      </View>

      <ScrollView
        style={{
          paddingHorizontal: 16,
          marginBottom: 200,
        }}
      >
        <View style={[styles.chatBox, styles.partnerChat]}>
          <Text style={{ paddingBottom: 16 }}>
            {data.result.highlights.service_time}에 신청한 활동지원 서비스에
            매칭된 활동지원사 입니다.{"\n"}
            {"\n"} 시시콜콜은 서비스 신청 이후 이용자 간 소통으로 변경된 사항에
            대해서 책임을 지지 않습니다.{"\n"}
            {"\n"} 사전에 약속된 내용을 엄수해주시길 바랍니다.
          </Text>
          <MainButton
            text="신청 서비스 내용 확인하기"
            isBig={false}
            isBlue={true}
            isBold={false}
            onPress={() => navigation.navigate("ApplyList")}
          />
        </View>
        {chatList.map((chat) => {
          return (
            <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
              {me === chat.sender_no && (
                <Text style={[styles.time, styles.myTime]}>{chat.time}</Text>
              )}
              <View
                key={chat.message + chat.time}
                style={[
                  styles.chatBox,
                  me === chat.sender_no ? styles.myChat : styles.partnerChat,
                ]}
              >
                <Text>{chat.message}</Text>
              </View>
              {me !== chat.sender_no && (
                <Text style={[styles.time, styles.partnerTime]}>
                  {chat.time}
                </Text>
              )}
            </View>
          );
        })}
      </ScrollView>
      <View
        style={{
          position: "relative",
          paddingHorizontal: 16,
          flexDirection: "row",
        }}
      >
        <TextInput
          style={{
            width: "100%",
            marginBottom: 176,
            borderWidth: 1,
            borderRadius: 50,
            borderColor: colors.stroke,
            paddingLeft: 20,
            paddingRight: 60,
            paddingVertical: 10,
          }}
          placeholder="활동지원사에게 보낼 메세지를 입력하세요."
          value={message}
          onChangeText={(text) => setMessage(text)}
        />
        <TouchableOpacity
          style={{ position: "absolute", right: 26, bottom: 182 }}
          accessibilityRole="button"
          accessibilityLabel="메세지 전송하기"
          onPress={sendMessage}
        >
          <Ionicons name="ios-send" size={24} color={colors.mainBlue} />
        </TouchableOpacity>
      </View>

      <BottomButton
        text={"홈 화면으로 돌아가기"}
        onPress={() => navigation.navigate("Home")}
      />
    </SafeAreaView>
  );
};

export default Chat;

const styles = StyleSheet.create({
  chatContainer: {
    wordBreak: "keep-all",
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 8,
    width: "100%",
  },
  chatBox: {
    wordBreak: "keep-all",
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 12,

    maxWidth: "80%",
  },
  myChat: {
    backgroundColor: colors.chatBlue,
    marginLeft: 8,
  },
  partnerChat: {
    backgroundColor: colors.chatGray6,
    marginRight: 8,
  },
  myTime: {
    marginLeft: "auto",
    fontSize: 11,
    letterSpacing: -0.03,
  },
  partnerTime: {
    marginRight: "auto",
    fontSize: 11,
    letterSpacing: -0.03,
  },
  time: {
    marginBottom: 12,
  },
});

const data = {
  isSuccess: true,
  code: 100,
  message: "성공",
  result: {
    chat_room_no: 1,
    partner: "testname3",
    highlights: {
      service_time: "8월 25일 00:00",
      start_point: "강남역",
      end_point: "서울역",
    },
    start_message:
      "testname3 님께서 헬퍼님의 활동지원 서비스를 승인하셨습니다. 아래 버튼을 눌러서 자세한 서비스 내용을 확인해보세요",
    chat_list: [
      {
        message:
          "t111111111111111111111111111111111111111111adsssssffffffffffffffffffffffffffffffffffffff",
        time: "16:46",
        sender_no: 13,
      },
      {
        message: "test messageqwefqwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww 2",
        time: "16:46",
        sender_no: 46,
      },
    ],
  },
};
