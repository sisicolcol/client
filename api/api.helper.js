import request from "./core";

//활동지원사 api 처리

//퀵) 목록 조회
const getQuickServiceList = async () => {
  return await request({ url: `/apply/quick` }).catch((error) =>
    console.error(error)
  );
};

//사전) 목록 조회
const getPreServiceList = async () => {
  return await request({ url: `/apply/pre` }).catch((error) =>
    console.error(error)
  );
};

//퀵, 사전) 지원_기존 자기소개서 가져오기
const getResume = async (hp_id) => {
  return await request({ url: `/hp/apply/${hp_id}` }).catch((error) =>
    console.error(error)
  );
};

//퀵, 사전) 지원하기
const postApply = async (data) => {
  return await request({
    method: "post",
    url: `/hp/apply`,
    data: {
      apply_id: data.apply_id,
      mem_id: data.mem_id,
      hp_id: data.hp_id,
      is_new: data.is_new,
      new_idc: data.new_idc,
      apply_date: data.apply_date,
      start_point: data.start_point,
      end_point: data.end_point,
    },
  }).catch((error) => console.error(error));
};

//나의지원목록) 조회하기
const getApplyList = async (hp_id) => {
  return await request({ url: `/helper/${hp_id}` }).catch((error) =>
    console.error(error)
  );
};

//나의지원목록) 메모 수정하기
const postModifyMemo = async (data) => {
  return await request({
    method: "post",
    url: `/hp_memo/${data.hp_id}/${data.apply_id}`,
    data: {
      memo: data.memo,
    },
  }).catch((error) => console.error(error));
};

//마이페이지) 기존자기소개서 가져오기
const getDefaultResume = async (hp_id) => {
  return await request({ url: `/hp/preidc/${hp_id}` }).catch((error) =>
    console.error(error)
  );
};

//마이페이지) 기존자기소개서 수정하기
const postModifyResume = async (data) => {
  return await request({
    method: "post",
    url: `/hp/preidc`,
    data: {
      is_exist: data.is_exist,
      hp_id: data.hp_id,
      content: data.content,
    },
  }).catch((error) => console.error(error));
};

export {
  getQuickServiceList,
  getPreServiceList,
  getResume,
  postApply,
  getApplyList,
  postModifyMemo,
  getDefaultResume,
  postModifyResume,
};
