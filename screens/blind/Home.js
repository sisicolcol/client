import React from "react";
import { View, Text, Button } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>메인화면</Text>
      <Button title="눌러" onPress={() => navigation.navigate("Apply")} />
      <Button title="눌러" onPress={() => navigation.navigate("Chat")} />
      <Button
        title="활동지원사 확인하기"
        onPress={() => navigation.navigate("Check")}
      />
      <Button
        title="활동지원사 확인하기"
        onPress={() => navigation.navigate("ApplyList")}
      />
    </View>
  );
};

export default Home;
