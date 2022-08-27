import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import {
  ApplyStack,
  ApplyListStack,
  ChatStack,
  MyPageStack,
} from "./HelperStack";

const Tab = createBottomTabNavigator();

const HelperTab = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Apply"
        component={ApplyStack}
        options={({ route }) => ({
          tabBarStyle: ((route) => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";
            console.log(routeName);
            if (routeName !== "Home") {
              return { display: "none" };
            }
            return;
          })(route),
        })}
      />
      <Tab.Screen name="Chat" component={ChatStack} />
      <Tab.Screen name="ApplyList" component={ApplyListStack} />
      <Tab.Screen name="MyPageStack" component={MyPageStack} />
    </Tab.Navigator>
  );
};

export default HelperTab;
