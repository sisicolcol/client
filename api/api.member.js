import request from "./core";

// *활동지원서비스 신청하기
// 활동지원서비스 신청하기
export const applyService = async (data) => {
  return await request({
    method: "post",
    url: `/user/apply`,
    data: {
      mem_id: data.mem_id,
      service_date: data.service_date,
      service_time: data.service_time,
      start_point: data.start_point,
      end_point: data.end_point,
      duration: data.duration,
      way: data.way,
      contents: data.contents,
      details: data.details,
    },
  }).catch((error) => console.error(error));
};

// *신청목록
// 신청목록) 시각장애인 신청목록 조회하기
export const getApplyList = async (mem_id) => {
  return await request({ url: `/user/applylist/${mem_id}` }).catch((error) =>
    console.error(error)
  );
};

// 신청목록) 자세한 신청내용 보기
export const getApplyDetail = async (apply_id) => {
  return await request({
    url: `/user/apply/detail/${apply_id}`,
  }).catch((error) => console.error(error));
};

// 신청목록) 매칭 활동지원사 목록 조회하기
export const getMatchingHelperList = async (apply_id) => {
  return await request({
    url: `/user/match/${apply_id}`,
  }).catch((error) => console.error(error));
};

// 신청목록 - 매칭활동지원사 확인하기) 이력서 조회하기
export const getMatchingHelperResume = async (hp_id) => {
  return await request({
    url: `/user/resume/${hp_id}`,
  }).catch((error) => console.error(error));
};

// 신청목록) 메모 수정/저장
export const postMemo = async (data) => {
  return await request({
    method: "post",
    url: `/memo/${data.apply_id}`,
    data: {
      memo: data.memo,
    },
  }).catch((error) => console.error(error));
};

// 신청목록) 서비스 완료
export const serviceSuccess = async (data) => {
  return await request({
    method: "post",
    url: `/user/success`,
    data: {
      apply_id: data.apply_id,
      overtime: data.overtime,
    },
  }).catch((error) => console.error(error));
};

//신청목록-서비스 파투
export const serviceFailed = async (data) => {
  return await request({
    method: "post",
    url: `/user/fail`,
    data: {
      apply_id: data.apply_id, //지원서 id
      reason: data.reason, //파투 사유
    },
  }).catch((error) => console.error(error));
};

// *지원한 활동지원사 확인하기
// 지원한 활동지원사 목록 조회하기
export const getApplyHelperList = async (mem_id) => {
  return await request({
    url: `/user/helperlist/${mem_id}`,
  }).catch((error) => console.error(error));
};

// 지원한 헬퍼 수락/거절하기
export const postAcceptApply = async (is_success, pg_id) => {
  return await request({
    method: "post",
    url: `/user/helper/accept`,
    data: {
      is_success: is_success, //수락 여부 1, 0, -1
      pg_id: pg_id, //지원서 id
    },
  }).catch((error) => console.error(error));
};

export const getAlertList = async (mem_id) => {
  return await request({
    url: `/alertlist/${mem_id}`,
  }).catch((error) => console.error(error));
};
