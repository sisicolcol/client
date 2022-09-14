import React, { useState, useEffect, useRef } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { chatStyles, colors, fontSizes } from "../../../theme";
import { TextInput } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { getChat, postChat } from "../../../api/api.main";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Message from "../../../components/Message";
import MainButton from "../../../components/common/MainButton";

const Chat = ({ navigation, route }) => {
  const { mem_no, partner_mem_no, chat_room_no, apply_id, parnter } =
    route.params.room;
  const [chatList, setChatList] = useState([]);
  const [payload, setPayload] = useState({});
  const [message, setMessage] = useState("");
  const scrollViewRef = useRef();
  const me = 7;

  console.log(payload);

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
    let hr = parseInt(new Date().getHours());
    let mn = parseInt(new Date().getMinutes());
    console.log("here");
    console.log(hr, mn);
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
  if (payload.info === undefined) {
    return (
      <SafeAreaView>
        <Text>로딩중...</Text>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 16,
        paddingTop: 8,
      }}
    >
      <View
        style={{ width: "100%", marginBottom: 32, backgroundColor: "white" }}
      >
        <Text>서비스 일시 : {payload.info.date}</Text>
        <Text>서비스 일시 : {payload.info.departure}</Text>
        <Text>서비스 일시 : {payload.info.destination}</Text>
      </View>

      <KeyboardAwareScrollView
        ref={scrollViewRef}
        onContentSizeChange={() =>
          scrollViewRef.current.scrollToEnd({ animated: true })
        }
      >
        <View
          style={[
            chatStyles.chatBox,
            chatStyles.partnerChat,
            { marginBottom: 12 },
          ]}
        >
          <Text style={{ fontSize: fontSizes.smallText, fontWeight: "600" }}>
            매칭 확정
          </Text>
          <Text
            style={{ fontSize: fontSizes.smallInfo, paddingVertical: 16 }}
          >{`${parnter} 님께서 활동지원사님의\n지원서비스를 승낙하셨습니다.\n\n아래 버튼을 눌러서\n자세한 내용을 확인해보세요.`}</Text>
          <MainButton
            text="신청 서비스 내용 확인하기"
            isBig={false}
            isBlue={true}
            isBold={false}
            onPress={() =>
              navigation.navigate("ApplyDetail", { apply_id: apply_id })
            }
          />
        </View>
        {chatList.map((chat, idx) => {
          return (
            <Message
              key={chat.메시지 + idx}
              message={chat.메시지}
              sender_no={chat.sender_no}
              my_no={me}
              send_time={chat.전송시각}
            />
          );
        })}
      </KeyboardAwareScrollView>
      <View
        style={{
          position: "relative",
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: 42,
        }}
      >
        <TextInput
          style={{
            width: "100%",
            borderWidth: 1,
            borderRadius: 50,
            borderColor: colors.stroke,
            paddingLeft: 20,
            paddingRight: 60,
            paddingVertical: 10,
          }}
          placeholder="메세지를 입력하세요."
          value={message}
          onChangeText={(text) => setMessage(text)}
        />
        <TouchableOpacity
          style={{
            position: "absolute",
            right: 26,
          }}
          accessibilityRole="button"
          accessibilityLabel="메세지 전송하기"
          onPress={sendMessage}
        >
          <Ionicons name="ios-send" size={24} color={colors.mainBlue} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Chat;

const styles = StyleSheet.create({});
