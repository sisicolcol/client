import request from "./core";

const getApplyListB = () => {
  return request({ url: `/user/apply` });
};
