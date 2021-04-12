import axios from "axios";
import store from "../store/store";
import { authType } from "../action/type";
const baseURL =
  window.location.hostname === "localhost"
    ? "http://localhost:2005/api"
    : "https://dssbackend.herokuapp.com/api";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:2005/api",
  withCredentials: true,
});
// baseURL: "https://dssbackend.herokuapp.com/api",

axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    const { status } = error.response;
    if (status === 401) {
      localStorage.clear();
      store.dispatch({ type: authType.LOGOUT_SUCCESS });
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
