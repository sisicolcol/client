import React from "react";
import { View, Text, Button } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>메인화면</Text>
      <Button
        title="퀵 활동"
        onPress={() => navigation.navigate("QuickApply")}
      />
      <Button
        title="사전 예약"
        onPress={() => navigation.navigate("ReservationApply")}
      />
      <Button
        title="시각장애인과 채팅하기"
        onPress={() => navigation.navigate("Chat")}
      />
      <Button
        title="지원목록"
        onPress={() => navigation.navigate("ApplyList")}
      />
      <Button
        title="내 정보"
        onPress={() => navigation.navigate("MyPageStack")}
      />
    </View>
  );
};

export default Home;
