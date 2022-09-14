import React from "react";
import { View, Text, Button, SafeAreaView } from "react-native";

const HelperApplyList = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>신청하기</Text>
      <Button title="눌러" onPress={() => navigation.goback()} />
    </SafeAreaView>
  );
};

export default HelperApplyList;
