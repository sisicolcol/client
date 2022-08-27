import { createStackNavigator } from "@react-navigation/stack";
import { HelperChat } from "../../screens/helper/index";

const Stack = createStackNavigator();

const ChatStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HelperChat" component={HelperChat} />
    </Stack.Navigator>
  );
};

export default ChatStack;
