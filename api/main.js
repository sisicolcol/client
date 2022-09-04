import request from "./core";

export const getApplyListB = async () => {
  return await request({ url: `/user/apply` }).catch((error) =>
    console.error(error)
  );
};
