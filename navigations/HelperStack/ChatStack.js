import { createStackNavigator } from "@react-navigation/stack";
import { HelperChat } from "../../screens/helper/index";
import { Feather } from "@expo/vector-icons";

const Stack = createStackNavigator();

const ChatStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "black",
        headerStyle: { backgroundColor: "white", shadowColor: "transparent" },
        title: "",
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
      <Stack.Screen name="HelperChat" component={HelperChat} />
    </Stack.Navigator>
  );
};

export default ChatStack;