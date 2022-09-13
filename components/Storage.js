import AsyncStorage from "@react-native-async-storage/async-storage";

//USER : 사용자 타입
//USER_ID : 사용자 아이디
//USER_TOKEN : 사용자 토큰
//DEVICE_TOKEN : 기기 토큰(알림용)
const getUserType = async () => {
  const response = await AsyncStorage.getItem("USER_TYPE")
    .then((data) => {
      return data;
    })
    .catch((error) => console.error(error));

  return response;
};

const getUserId = async () => {
  const response = await AsyncStorage.getItem("USER_ID")
    .then((data) => {
      return data;
    })
    .catch((error) => console.error(error));
  return response;
};

const getUserToken = async () => {
  const response = await AsyncStorage.getItem("USER_TOKEN")
    .then((data) => {
      return data;
    })
    .catch((error) => console.error(error));
  return response;
};

const getDeviceToken = async () => {
  const response = await AsyncStorage.getItem("DEVICE_TOKEN")
    .then((data) => {
      return data;
    })
    .catch((error) => console.error(error));
  return response;
};

const getNewResume = async () => {
  const response = await AsyncStorage.getItem("NEW_IDC")
    .then((data) => {
      if (data === null) {
        return "";
      } else {
        return data;
      }
    })
    .catch((error) => console.error(error));
  return response;
};

export { getUserType, getUserId, getUserToken, getDeviceToken, getNewResume };
