import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HelperTab from "./HelperTab";
import BlindStack from "./BlindStack";
import AuthStack from "./AuthStack";

const Navigation = () => {
  return (
    <NavigationContainer>
      <BlindStack />
    </NavigationContainer>
  );
};

export default Navigation;
