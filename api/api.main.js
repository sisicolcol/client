import request from "./core";

//회원가입, 로그인 등 공통 로직 처리

//로그인
const login = async (id, password) => {
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
const signup = async (signupData, data) => {
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
const postPushToken = async (token, mem_id) => {
  return await request({
    method: "POST",
    url: "/alert",
    data: {
      mem_token: token.toString(),
      mem_id: mem_id,
    },
  }).catch((error) => console.error(error));
};

//채팅 목록 불러오기
const getChatList = async (mem_id) => {
  return await request({
    url: "/chat/list",
    params: {
      mem_id: mem_id,
    },
  }).catch((error) => console.error(error));
};

//채팅 불러오기
const getChat = async (data) => {
  return await request({
    url: "/chat",
    params: {
      mem_no: data.mem_no,
      partner_mem_no: data.partner_mem_no,
      apply_id: data.apply_id,
    },
  }).catch((error) => console.error(error));
};

//채팅 보내기
const postChat = async (me_mem_no, partner_mem_no, chat_room_no, message) => {
  return await request({
    method: "post",
    url: "/chat",
    params: {
      me_mem_no: me_mem_no,
      partner_mem_no: partner_mem_no,
      chat_room_no: chat_room_no,
    },
    data: {
      content: message,
    },
  }).catch((error) => console.error(error));
};

export { login, signup, postPushToken, getChatList, getChat, postChat };
