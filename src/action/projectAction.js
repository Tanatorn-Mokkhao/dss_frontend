import axios from "../helper/axios";
import { projectType } from "./type";

export const createProject = (payload) => {
  return async (dispatch) => {
    try {
      dispatch({ type: projectType.CREATE_PROJECT_REQUEST });
      const res = await axios.post("/create/project", { payload });
      if (res.status == 200) {
        dispatch({ type: projectType.CREATE_PROJECT_SUCCESS });
      }
    } catch (error) {
      // console.log(error.response.status);
      if (error.response.status == 413) {
        dispatch({
          type: projectType.CREATE_PROJECT_FAILURE,
          payload: { error: "ขนาดไฟล์เกิน 200kb" },
        });
      } else {
        dispatch({
          type: projectType.CREATE_PROJECT_FAILURE,
          payload: error.response.data,
        });
      }
    }
  };
};
export const getAllElementX = (element) => {
  return async (dispatch) => {
    try {
      dispatch({ type: projectType.GET_ALL_ELEMENT_LABELX_REQUEST });
      const res = await axios.post("/get/dataByLabel", { payload: element });
      if (res.status === 200) {
        dispatch({
          type: projectType.GET_ALL_ELEMENT_LABELX_SUCCESS,
          payload: res.data,
        });
      }
    } catch (error) {}
  };
};
