import React from "react";
import { View, Text, Button } from "react-native";

const Apply = ({ navigation }) => {
  return (
    <View>
      <Text>신청하기</Text>
      <Button title="눌러" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default Apply;
