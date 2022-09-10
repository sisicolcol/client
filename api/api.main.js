import request from "./core";

//회원가입, 로그인 등 공통 로직 처리

//로그인
export const login = async (id, password) => {
  return await request({
    method: "POST",
    url: "/auth/login",
    data: {
      mem_id: id,
      password: password,
    },
  }).catch((error) => console.error(error));
};

//회원가입
export const signup = async (signupData, data) => {
  return await request({
    method: "POST",
    url: "/auth/signup",
    data: {
      mem_id: signupData.id,
      password: signupData.password,
      mem_name: data.name,
      mem_phone: data.phone,
      mem_gender: data.gender,
      mem_cert: data.cert,
      mem_card: data.card,
      mem_address: data.address,
    },
  }).catch((error) => console.error(error));
};

//push 알림 토큰 저장
export const postPushToken = async (token, mem_id) => {
  return await request({
    method: "POST",
    url: "/alert",
    data: {
      mem_token: token.toString(),
      mem_id: mem_id,
    },
  }).catch((error) => console.error(error));
};
