import { dashboardType } from "./type";

import axios from "../helper/axios";

export const createProjectDashBoard = (payload) => {
  return async (dispatch) => {
    try {
      dispatch({ type: dashboardType.CREATE_PROJECT_DASHBOARD_REQUEST });
      const res = await axios.post("/save/dashbaord", { payload });
      if (res.status === 200) {
        dispatch({
          type: dashboardType.CREATE_PROJECT_DASHBOARD_SUCCESS,
        });
        window.location.href = `/dashboard/${payload.projectName}`;
      }
    } catch (error) {
      dispatch({
        type: dashboardType.CREATE_PROJECT_DASHBOARD_FAILURE,
        payload: error.response.data,
      });
    }
  };
};

export const getAllChartList = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: dashboardType.GET_ALL_CHART_REQUEST });
      const res = await axios.get("/dashboard/getallChart");
      if (res.status === 200) {
        dispatch({
          type: dashboardType.GET_ALL_CHART_SUCCESS,
          payload: res.data,
        });
      }
    } catch (error) {}
  };
};

export const queryByElement = (payload, chart, chartType) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("/query/elementLabel", { payload });
      if (res.status === 200) {
        console.log(res.data.dataElement);
        if (chart === "chart1") {
          dispatch({
            type: dashboardType.GET_CHART1_SUCCESS,
            payload: [{ data: res.data.dataElement, chartType: chartType }],
          });
        } else if (chart === "chart2") {
          dispatch({
            type: dashboardType.GET_CHART2_SUCCESS,
            payload: [{ data: res.data.dataElement, chartType: chartType }],
          });
        } else if (chart === "chart3") {
          dispatch({
            type: dashboardType.GET_CHART3_SUCCESS,
            payload: [{ data: res.data.dataElement, chartType: chartType }],
          });
        } else if (chart === "chart4") {
          dispatch({
            type: dashboardType.GET_CHART4_SUCCESS,
            payload: [{ data: res.data.dataElement, chartType: chartType }],
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getDataChartGroup = (payload, chart, chartType) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("/getQuery", { payload });
      if (chart === "chart1") {
        dispatch({
          type: dashboardType.GET_CHART1_SUCCESS,
          payload: [{ data: res.data.dataArray, chartType: chartType }],
        });
      } else if (chart === "chart2") {
        dispatch({
          type: dashboardType.GET_CHART2_SUCCESS,
          payload: [{ data: res.data.dataArray, chartType: chartType }],
        });
      } else if (chart === "chart3") {
        dispatch({
          type: dashboardType.GET_CHART3_SUCCESS,
          payload: [{ data: res.data.dataArray, chartType: chartType }],
        });
      } else if (chart === "chart4") {
        dispatch({
          type: dashboardType.GET_CHART4_SUCCESS,
          payload: [{ data: res.data.dataArray, chartType: chartType }],
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllDashBoard = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: dashboardType.GET_ALL_DASHBOARD_REQUEST });
      const res = await axios.get("/getall/dashboardProject");
      if (res.status === 200) {
        dispatch({
          type: dashboardType.GET_ALL_DASHBOARD_SUCCESS,
          payload: res.data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getDashBoardSlug = (slug) => {
  return async (dispatch) => {
    try {
      dispatch({ type: dashboardType.GET_DASH_BY_SLUG_REQUEST });
      const res = await axios.post(`/get/getDashBoard/${slug}`);
      if (res.status === 200) {
        dispatch({
          type: dashboardType.GET_DASH_BY_SLUG_SUCCESS,
          payload: res.data,
        });
      }
    } catch (error) {}
  };
};

export const saveStateDashBoard = (payload) => {
  return async (dispatch) => {
    try {
      dispatch({ type: dashboardType.SAVE_STATE_DASHBOARD_REQUEST });
      const res = await axios.post("/update/dashbaord", { payload });
      if (res.status === 200) {
        dispatch({ type: dashboardType.SAVE_STATE_DASHBOARD_SUCCESS });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
