import axios from "../helper/axios";
import { projectType } from "./type";
import { chartType } from "./type";

export const getAllTable = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: projectType.GET_ALLTABLE_REQUEST });
      const res = await axios.get("/get/table");
      if (res.status === 200) {
        dispatch({
          type: projectType.GET_ALLTABLE_SUCCESS,
          payload: res.data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllChart = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: chartType.GET_ALLCHART_REQUEST });
      const res = await axios.get("/get/chart");
      if (res.status === 200) {
        dispatch({
          type: chartType.GET_ALLCHART_SUCCESS,
          payload: res.data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
