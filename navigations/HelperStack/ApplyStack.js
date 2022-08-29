import { createStackNavigator } from "@react-navigation/stack";
import { Home, QuickApply, ReservationApply } from "../../screens/helper/index";
import { Feather } from "@expo/vector-icons";

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
