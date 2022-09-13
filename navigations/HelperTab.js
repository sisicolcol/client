import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import {
  ApplyStack,
  ApplyListStack,
  ChatStack,
  MyPageStack,
} from "./HelperStack";
import { colors } from "../theme";
import { Entypo, MaterialIcons, Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const HelperTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: colors.buttonGray3,
      }}
    >
      <Tab.Screen
        name="Apply"
        component={ApplyStack}
        options={({ route }) => ({
          tabBarStyle: ((route) => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";
            if (routeName !== "Home") {
              return { display: "none" };
            }
            return styles.tabBarStyle;
          })(route),
          tabBarLabel: "홈",
          tabBarIcon: ({ focused }) => {
            return (
              <Entypo
                name="home"
                size={24}
                color={focused ? "black" : colors.buttonGray3}
              />
            );
          },
        })}
      />
      <Tab.Screen
        name="Chat"
        options={{
          tabBarLabel: "채팅",
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialIcons
                name="chat-bubble"
                size={24}
                color={focused ? "black" : colors.buttonGray3}
              />
            );
          },
        }}
        component={ChatStack}
      />
      <Tab.Screen
        name="ApplyList"
        options={{
          tabBarLabel: "지원",
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="md-reorder-three-outline"
                size={32}
                color={focused ? "black" : colors.buttonGray3}
              />
            );
          },
        }}
        component={ApplyListStack}
      />
      <Tab.Screen
        name="MyPageStack"
        options={({ route }) => ({
          tabBarStyle: ((route) => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? "MyPage";
            if (routeName !== "MyPage") {
              return { display: "none" };
            }
            return styles.tabBarStyle;
          })(route),
          tabBarLabel: "나",
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="person-sharp"
                size={20}
                color={focused ? "black" : colors.buttonGray3}
              />
            );
          },
        })}
        component={MyPageStack}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 88,
    backgroundColor: "white",
    borderTopWidth: 0,
    elevation: 0,
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowColor: colors.buttonGray3,
    paddingBottom: 35,
  },
});

export default HelperTab;
