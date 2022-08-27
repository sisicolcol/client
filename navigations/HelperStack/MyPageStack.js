import { createStackNavigator } from "@react-navigation/stack";
import { MyPage } from "../../screens/helper/index";

const Stack = createStackNavigator();

const MyPageStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyPage" component={MyPage} />
    </Stack.Navigator>
  );
};

export default MyPageStack;
