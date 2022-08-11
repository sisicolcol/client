import { createStackNavigator } from "@react-navigation/stack";
import { Home, Apply, Chat } from "../screens/blind/";

const Stack = createStackNavigator();

const BlindStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Group>
        <Stack.Screen name="Apply" component={Apply} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name="Chat" component={Chat} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default BlindStack;
