import { authType, chartType } from "./type";
import axios from "../helper/axios";

export const signin = (payload) => {
  return async (dispatch) => {
    try {
      dispatch({ type: authType.LOGIN_REQUEST });
      const res = await axios.post("/user/signin", { payload });
      if (res.status == 202) {
        const { user } = res.data;
        localStorage.setItem("status", true);
        localStorage.setItem("user", JSON.stringify(user));
        dispatch({
          type: authType.LOGIN_SUCCESS,
          payload: user,
        });
      }
    } catch (error) {
      dispatch({
        type: authType.LOGIN_FAILURE,
        payload: error.response.data,
      });
    }
  };
};
export const signup = (payload) => {
  return async (dispatch) => {
    try {
      dispatch({ type: authType.SIGNUP_REQUEST });
      const res = await axios.post("/user/signup", { payload });
      if (res.status === 201) {
        dispatch({ type: authType.SIGNUP_SUCCESS });
        window.location.href = "/signin";
      }
    } catch (error) {
      dispatch({
        type: authType.SIGNUP_FAILURE,
        payload: error.response.data,
      });
    }
  };
};
export const isLogged = () => {
  return async (dispatch) => {
    const status = localStorage.getItem("status");
    if (status) {
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch({
        type: authType.LOGIN_SUCCESS,
        payload: { user: user },
      });
    }
  };
};

export const Logout = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: authType.LOGOUT_REQUEST });
      const res = await axios.post("/user/signout");
      if (res.status == 202) {
        localStorage.clear();
        dispatch({ type: authType.LOGOUT_SUCCESS });
        dispatch({ type: chartType.CLEAR_CHART });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
