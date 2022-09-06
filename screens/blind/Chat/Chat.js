import React from "react";
import { View, Text, Button } from "react-native";

const Chat = ({ navigation }) => {
  return (
    <View>
      <Text>채팅방</Text>
      <Button title="눌러" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default Chat;
