import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BlindStack from "./BlindStack";
import AuthStack from "./AuthStack";
import HelperTab from "./HelperTab";

const Navigation = () => {
  return (
    <NavigationContainer>
      <HelperTab />
    </NavigationContainer>
  );
};

export default Navigation;
