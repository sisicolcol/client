import React, { useState, useEffect, useRef } from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import PageInfo from "../../../components/common/PageInfo";
import { chatStyles, colors } from "../../../theme";
import MainButton from "../../../components/common/MainButton";
import BottomButton from "../../../components/common/BottomButton";
import { TextInput } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { getChat, postChat } from "../../../api/api.main";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Message from "../../../components/Message";

const Chat = ({ navigation, route }) => {
  const { blind_user_no, chat_room_no, apply_id, blind_user_name } =
    route.params.room;
  const mem_no = route.params.mem_no;
  const [chatList, setChatList] = useState([]);
  const [payload, setPayload] = useState({});
  const [message, setMessage] = useState("");
  const [onFocus, setOnFocus] = useState(false);
  const scrollViewRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      const data = {
        mem_no: mem_no,
        partner_mem_no: blind_user_no,
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
    let time = (hr < 10 ? "0" + hr : hr) + ":" + (mn < 10 ? "0" + mn : mn);

    const newData = {
      메시지: message,
      전송시각: "14:30",
      sender_no: mem_no,
    };

    postChat(mem_no, blind_user_no, chat_room_no, message)
      .then(() => {
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
        paddingTop: 8,
      }}
    >
      <View style={{ marginLeft: 46 }}>
        <PageInfo
          title={`활동지원사\n${blind_user_name}과의 채팅방`}
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
        }}
      >
        <View
          style={[
            chatStyles.chatBox,
            chatStyles.partnerChat,
            { marginBottom: 12 },
          ]}
        >
          <Text style={{ paddingBottom: 16 }}>
            {payload.introduce !== undefined &&
              payload.introduce.split("다. ").map((data, idx) => {
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
              my_no={mem_no}
              send_time={chat.전송시각}
            />
          );
        })}
      </KeyboardAwareScrollView>
      <View
        style={{
          position: "relative",
          paddingHorizontal: 16,
          flexDirection: "row",
          paddingTop: 12,
        }}
      >
        <TextInput
          style={{
            width: "100%",
            marginBottom: onFocus ? 16 : 126,
            borderWidth: 1,
            borderRadius: 50,
            borderColor: colors.stroke,
            paddingLeft: 20,
            paddingRight: 60,
            paddingVertical: 10,
          }}
          onFocus={() => setOnFocus(true)}
          onEndEditing={() => setOnFocus(false)}
          placeholder="활동지원사에게 보낼 메세지를 입력하세요."
          value={message}
          onChangeText={(text) => setMessage(text)}
        />
        <TouchableOpacity
          style={{
            position: "absolute",
            right: 26,
            bottom: onFocus ? 27 : 137,
          }}
          accessibilityRole="button"
          accessibilityLabel="메세지 전송하기"
          onPress={() => sendMessage()}
        >
          <Ionicons name="ios-send" size={24} color={colors.mainBlue} />
        </TouchableOpacity>
      </View>

      {!onFocus && (
        <BottomButton
          text={"홈 화면으로 돌아가기"}
          onPress={() => navigation.popToTop()}
        />
      )}
    </SafeAreaView>
  );
};

export default Chat;
