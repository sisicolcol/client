import { createStackNavigator } from "@react-navigation/stack";
import { Home, QuickApply, ReservationApply } from "../../screens/helper/index";

const Stack = createStackNavigator();

const ApplyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Group>
        <Stack.Screen name="QuickApply" component={QuickApply} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name="ReservationApply" component={ReservationApply} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default ApplyStack;
