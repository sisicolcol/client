import { createStackNavigator } from "@react-navigation/stack";
import { HelperApplyList, ApplyDetail } from "../../screens/helper/index";
import { Feather } from "@expo/vector-icons";

const Stack = createStackNavigator();

const ApplyListStack = () => {
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
      <Stack.Screen name="HelperApplyList" component={HelperApplyList} />
      <Stack.Screen name="ApplyLinkDetail" component={ApplyDetail} />
    </Stack.Navigator>
  );
};

export default ApplyListStack;
