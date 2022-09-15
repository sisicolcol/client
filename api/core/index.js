import axios from "axios";
import { getUserToken } from "../../components/Storage";

let token = "";
getUserToken().then((data) => {
  token = data;
});

const request = axios.create({
  baseURL: `http://api.sscallcall.co.kr:3000/api`,
  // headers: {
  //   Authorization: getUserToken().then((data) => {
  //     return `Bearer ${data}`;
  //   }),
  // },
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
