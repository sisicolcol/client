import React, { useState, useEffect, useRef } from "react";
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
import { getChat, postChat } from "../../../api/api.main";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Chat = ({ navigation, route }) => {
  const { mem_no, partner_mem_no, chat_room_no, apply_id } = route.params.room;
  const [chatList, setChatList] = useState([]);
  const [payload, setPayload] = useState({});
  const [message, setMessage] = useState("");
  const scrollViewRef = useRef();
  const me = 7;

  useEffect(() => {
    const fetchData = async () => {
      const data = {
        mem_no: mem_no,
        partner_mem_no: partner_mem_no,
        apply_id: apply_id,
      };
      await getChat(data)
        .then((data) => {
          if (data.isSuccess) {
            setPayload(data.result);
            setChatList(data.result.chats);
          }
        })
        .catch((err) => console.error(err));
    };

    fetchData();
  }, []);

  const sendMessage = () => {
    let hr = new Date().getHours();
    let mn = new Date().getMinutes();
    console.log("here");
    const newData = {
      메시지: message,
      전송시각: (hr < 10 ? "0" + hr : hr) + ":" + (mn < 10 ? "0" + mn : mn),
      sender_no: 7, //mem_no
    };
    postChat(7, partner_mem_no, chat_room_no, message)
      .then((data) => {
        console.log(data);
        setChatList((chatList) => [...chatList, newData]);
        setMessage("");
      })
      .catch((err) => console.error(err));
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

      <KeyboardAwareScrollView
        ref={scrollViewRef}
        onContentSizeChange={() =>
          scrollViewRef.current.scrollToEnd({ animated: true })
        }
        style={{
          paddingHorizontal: 16,
          // marginBottom: 200,
        }}
      >
        <View style={[styles.chatBox, styles.partnerChat]}>
          <Text style={{ paddingBottom: 16 }}>
            {payload["introduce "] !== undefined &&
              payload["introduce "].split("다. ").map((data, idx) => {
                if (idx === 2) return data;
                return data + "다.\n\n";
              })}
          </Text>
          <MainButton
            text="신청 서비스 내용 확인하기"
            isBig={false}
            isBlue={true}
            isBold={false}
            onPress={() =>
              navigation.navigate("ApplyList", { apply_id: apply_id })
            }
          />
        </View>
        {chatList.map((chat, idx) => {
          return (
            <View
              style={{ flexDirection: "row", alignItems: "flex-end" }}
              key={chat.메시지 + chat.전송시각 + idx}
            >
              {me === chat.sender_no && (
                <Text style={[styles.time, styles.myTime]}>
                  {chat.전송시각}
                </Text>
              )}
              <View
                style={[
                  styles.chatBox,
                  me === chat.sender_no ? styles.myChat : styles.partnerChat,
                ]}
              >
                <Text>{chat.메시지}</Text>
              </View>
              {me !== chat.sender_no && (
                <Text style={[styles.time, styles.partnerTime]}>
                  {chat.전송시각}
                </Text>
              )}
            </View>
          );
        })}
      </KeyboardAwareScrollView>
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
            marginBottom: 126,
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
          style={{
            position: "absolute",
            right: 26,
            bottom: 137,
          }}
          accessibilityRole="button"
          accessibilityLabel="메세지 전송하기"
          onPress={() => sendMessage()}
        >
          <Ionicons name="ios-send" size={24} color={colors.mainBlue} />
        </TouchableOpacity>
      </View>

      <BottomButton
        text={"홈 화면으로 돌아가기"}
        onPress={() => navigation.popToTop()}
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
