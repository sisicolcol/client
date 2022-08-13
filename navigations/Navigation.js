import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BlindStack from "./BlindStack";
import AuthStack from "./AuthStack";

const Navigation = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default Navigation;
