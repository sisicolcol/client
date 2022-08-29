import { createStackNavigator } from "@react-navigation/stack";
import { Selection, Login, FirstSignUp, SecondSignUp } from "../screens/auth";
import { Feather } from "@expo/vector-icons";

const Stack = createStackNavigator();

const AuthStack = () => {
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
        name="Selection"
        component={Selection}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="FirstSignUp" component={FirstSignUp} />
      <Stack.Screen name="SecondSignUp" component={SecondSignUp} />
    </Stack.Navigator>
  );
};

export default AuthStack;
