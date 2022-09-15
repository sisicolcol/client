import { createStackNavigator } from "@react-navigation/stack";
import {
  Home,
  Apply,
  Chat,
  ChatList,
  HelperList,
  ApplyList,
  ApplyDetail,
  ApplyHelper,
  CheckResume,
  Result,
  AlertList,
} from "../screens/blind/";
import { Image } from "react-native";
import { Feather } from "@expo/vector-icons";

const Stack = createStackNavigator();

const BlindStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "black",
        headerStyle: { backgroundColor: "white", shadowColor: "transparent" },
        title: "",
        headerBackAccessibilityLabel: "뒤로가기 버튼",
        headerBackTitleVisible: false,
        headerBackImage: () => {
          const style = {
            marginLeft: 10,
          };
          return (
            <Feather
              name="chevron-left"
              size={36}
              color="black"
              style={style}
            />
          );
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => (
            <Image
              source={require("../images/logo.png")}
              resizeMode="contain"
              style={{ width: 72 }}
            />
          ),
        }}
      />
      <Stack.Group>
        <Stack.Screen
          name="Apply"
          component={Apply}
          options={{ title: "활동지원서비스 신청하기" }}
        />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen
          name="ChatList"
          component={ChatList}
          options={{ title: "" }}
        />
        <Stack.Screen name="Chat" component={Chat} options={{ title: "" }} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen
          name="ApplyList"
          options={{ title: "신청 활동지원서비스" }}
          component={ApplyList}
        />
        <Stack.Screen
          name="ApplyDetail"
          options={{ title: "신청 활동지원서비스" }}
          component={ApplyDetail}
        />
        <Stack.Screen
          name="ApplyHelper"
          options={{ title: "신청 활동지원서비스" }}
          component={ApplyHelper}
        />
        <Stack.Screen
          name="ApplyCheckResume"
          options={{ title: "신청 활동지원서비스" }}
          component={CheckResume}
        />
        <Stack.Screen
          name="Result"
          options={{ title: "", headerLeft: () => null }}
          component={Result}
        />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen
          name="HelperList"
          options={{ title: "지원한 활동지원사 확인하기" }}
          component={HelperList}
        />
        <Stack.Screen
          name="HelperCheckResume"
          options={{ title: "지원한 활동지원사 확인하기" }}
          component={CheckResume}
        />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen
          name="AlertList"
          options={{ title: "알림" }}
          component={AlertList}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default BlindStack;
