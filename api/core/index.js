import axios from "axios";

const request = axios.create({
  baseURL: `http://${process.env.REACT_NATIVE_BASE_URL}:/api`,
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
