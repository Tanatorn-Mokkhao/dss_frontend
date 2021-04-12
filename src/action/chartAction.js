import { chartType } from "./type";
import axios from "../helper/axios";

export const createChartProject = (payload) => {
  return async (dispatch) => {
    try {
      dispatch({ type: chartType.CREATE_PROJECT_CHART_REQUEST });
      const res = await axios.post("/create/chart", { payload });
      if (res.status === 200) {
        dispatch({ type: chartType.CREATE_PROJECT_CHART_SUCCESS });
        window.location.href = `/${payload.dataProject.projectName}?type=${payload.dataProject.chartType}`;
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getPageChart = (slug) => {
  return async (dispatch) => {
    try {
      dispatch({ type: chartType.GET_PROJECT_PAGE_REQUEST });
      const res = await axios.get(`/get/chart/${slug}`);
      if (res.status === 200) {
        dispatch({
          type: chartType.GET_PROJECT_PAGE_SUCCESS,
          payload: res.data,
        });
      }
    } catch (error) {
      // if (error.response.status === 400) {
      //   console.log("error");
      // }
    }
  };
};

export const getDataChartGroup = (payload) => {
  return async (dispatch) => {
    try {
      dispatch({ type: chartType.GET_QUERY_DATA_CHART_GROUP_X_Y_REQUEST });
      const res = await axios.post("/getQuery", { payload });
      if (res.status === 200) {
        dispatch({
          type: chartType.GET_QUERY_DATA_CHART_GROUP_X_Y_SUCCESS,
          payload: { data: res.data.dataArray },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const queryByElement = (payload) => {
  return async (dispatch) => {
    try {
      dispatch({ type: chartType.GET_ELEMENT_BY_LABELX_REQUEST });
      const res = await axios.post("/query/elementLabel", { payload });
      if (res.status === 200) {
        console.log(res.data.dataElement);
        dispatch({
          type: chartType.GET_ELEMENT_BY_LABELX_SUCCESS,
          payload: { data: res.data.dataElement },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
