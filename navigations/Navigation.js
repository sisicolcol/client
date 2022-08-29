import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HelperTab from "./HelperTab";
import BlindStack from "./BlindStack";
import AuthStack from "./AuthStack";

const Navigation = () => {
  return (
    <NavigationContainer>
      <HelperTab />
    </NavigationContainer>
  );
};

export default Navigation;
