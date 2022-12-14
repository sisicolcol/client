import { Text, View } from "react-native";
import React from "react";
import { chatStyles } from "../theme";

const Message = ({ message, sender_no, my_no, send_time }) => {
  return (
    <View
      style={{ flexDirection: "row", alignItems: "flex-end", marginBottom: 12 }}
    >
      {my_no === sender_no && (
        <Text
          style={[chatStyles.time, chatStyles.myTime]}
          accessibilityLabel={`보낸 시간 : ${send_time}`}
        >
          {send_time}
        </Text>
      )}
      <View
        accessibilityLabel={
          my_no === sender_no
            ? `나의 메세지 : ${message}`
            : `상대방의 메세지 : ${message}`
        }
        style={[
          chatStyles.chatBox,
          my_no === sender_no ? chatStyles.myChat : chatStyles.partnerChat,
        ]}
      >
        <Text>{message}</Text>
      </View>
      {my_no !== sender_no && (
        <Text
          style={[chatStyles.time, chatStyles.partnerTime]}
          accessibilityLabel={`보낸 시간 : ${send_time}`}
        >
          {send_time}
        </Text>
      )}
    </View>
  );
};

export default Message;
