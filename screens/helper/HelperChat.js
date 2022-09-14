import React from "react";
import { View, Text, Button } from "react-native";

const HelperChat = ({ navigation }) => {
  return (
    <View>
      <Text>메인화면</Text>
      <Button title="눌러" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default HelperChat;
