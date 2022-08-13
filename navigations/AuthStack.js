import { createStackNavigator } from "@react-navigation/stack";
import { Selection } from "../screens/auth";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Selection"
        component={Selection}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
