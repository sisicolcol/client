import { Platform } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { NavigationContainer } from "@react-navigation/native";
import BlindStack from "./BlindStack";
import AuthStack from "./AuthStack";
import HelperTab from "./HelperTab";

import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const Navigation = () => {
  const [notification, setNotification] = useState(false);
  const [isSend, setIsSend] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    let deviceToken = AsyncStorage.getItem("DEVICE_TOKEN");
    if (deviceToken === null) {
      registerForPushNotificationsAsync().then((token) => {
        //  ~~ 여기서 서버로 토큰 보내주기. ~~
        if (!isSend) {
          axios({
            method: "POST",
            url: "http://172.30.1.1:3000/api/alert",
            data: {
              mem_token: token.toString(),
              mem_id: "hp2",
            },
          })
            .then(() => setIsSend(true))
            .catch((err) => console.log(err));
        }
        AsyncStorage.setItem("DEVICE_TOKEN", true);
        deviceToken = true;
      });
    }

    if (deviceToken) {
      notificationListener.current =
        Notifications.addNotificationReceivedListener((notification) => {
          setNotification(notification);
        });
      responseListener.current =
        Notifications.addNotificationResponseReceivedListener((response) => {
          console.log(response);
        });
    }

    return () => {
      if (
        typeof notificationListener.current !== "undefined" &&
        typeof responseListener.current !== "undefined" &&
        deviceToken
      ) {
        Notifications.removeNotificationSubscription(
          notificationListener.current
        );
        Notifications.removeNotificationSubscription(responseListener.current);
      }
    };
  }, []);

  return (
    <NavigationContainer>
      <BlindStack />
    </NavigationContainer>
  );
};

async function registerForPushNotificationsAsync() {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log("token : ", token);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  return token;
}

export default Navigation;
