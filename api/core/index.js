import axios from "axios";

const request = axios.create({
  baseURL: `http://api.sscallcall.co.kr:3000/api`,
});

request.defaults.timeout = 2500;

request.interceptors.response.use(
  (response) => {
    const res = response.data;
    return res;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
export default request;
