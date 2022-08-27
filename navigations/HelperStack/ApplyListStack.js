import { createStackNavigator } from "@react-navigation/stack";
import { HelperApplyList } from "../../screens/helper/index";

const Stack = createStackNavigator();

const ApplyListStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HelperApplyList" component={HelperApplyList} />
    </Stack.Navigator>
  );
};

export default ApplyListStack;
