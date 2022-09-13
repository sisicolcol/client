import { createStackNavigator } from "@react-navigation/stack";
import { MyPage, IntroDetail } from "../../screens/helper/index";
import { Feather, Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const Stack = createStackNavigator();

const MyPageStack = () => {
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
        name="MyPage"
        component={MyPage}
        options={{
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 15 }}
              onPress={() => console.log("setting")}
            >
              <Ionicons name="settings-sharp" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name="IntroDetail" component={IntroDetail} />
    </Stack.Navigator>
  );
};

export default MyPageStack;
