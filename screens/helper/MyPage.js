import React from "react";
import { View, Text, Button } from "react-native";

const MyPage = ({ navigation }) => {
  return (
    <View>
      <Text>마이페이지</Text>
      <Button title="눌러" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default MyPage;
