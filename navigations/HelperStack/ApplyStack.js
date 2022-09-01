import { createStackNavigator } from "@react-navigation/stack";
import {
  Home,
  QuickApply,
  ReservationApply,
  ApplyDetail,
  IntroSelection,
  ExistingIntroDetail,
  NewIntroDetail,
} from "../../screens/helper/index";
import { Feather } from "@expo/vector-icons";
import { Image } from "react-native";

const Stack = createStackNavigator();

const ApplyStack = () => {
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
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => (
            <Image
              source={require("../../images/logo.png")}
              resizeMode="contain"
              style={{ width: 72 }}
            />
          ),
        }}
      />
      <Stack.Group>
        <Stack.Screen name="QuickApply" component={QuickApply} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name="ReservationApply" component={ReservationApply} />
      </Stack.Group>
      <Stack.Screen
        name="ApplyDetail"
        component={ApplyDetail}
        options={{ title: "상세 내역 확인하기" }}
      />
      <Stack.Screen
        name="IntroSelection"
        component={IntroSelection}
        options={{ title: "지원하기" }}
      />
      <Stack.Screen
        name="ExistingIntroDetail"
        component={ExistingIntroDetail}
      />
      <Stack.Screen name="NewIntroDetail" component={NewIntroDetail} />
    </Stack.Navigator>
  );
};

export default ApplyStack;
