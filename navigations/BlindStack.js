import { createStackNavigator } from "@react-navigation/stack";
import { Home, Apply, Chat } from "../screens/blind/";
import { Image } from "react-native";
import { Feather } from "@expo/vector-icons";

const Stack = createStackNavigator();

const BlindStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "black",
        headerStyle: { backgroundColor: "white", shadowColor: "transparent" },
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
        <Stack.Screen name="Chat" component={Chat} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default BlindStack;
