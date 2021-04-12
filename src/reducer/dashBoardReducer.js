import { dashboardType } from "../action/type";

const initialState = {
  loading: false,
  error: null,
  getAllChartList: [],
  chart1: [],
  chart2: [],
  chart3: [],
  chart4: [],
  getAllDashBoard: [],
  getDashBySlug: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case dashboardType.CREATE_PROJECT_DASHBOARD_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case dashboardType.CREATE_PROJECT_DASHBOARD_SUCCESS:
      state = {
        ...state,
        loading: false,
      };
      break;
    case dashboardType.CREATE_PROJECT_DASHBOARD_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    case dashboardType.GET_ALL_CHART_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case dashboardType.GET_ALL_CHART_SUCCESS:
      state = {
        ...state,
        loading: false,
        getAllChartList: action.payload.data,
      };
      break;
    case dashboardType.GET_ALL_CHART_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    case dashboardType.GET_CHART1_SUCCESS:
      state = {
        ...state,
        chart1: action.payload,
      };
      break;
    case dashboardType.GET_CHART2_SUCCESS:
      state = {
        ...state,
        chart2: action.payload,
      };
      break;
    case dashboardType.GET_CHART3_SUCCESS:
      state = {
        ...state,
        chart3: action.payload,
      };
      break;
    case dashboardType.GET_CHART4_SUCCESS:
      state = {
        ...state,
        chart4: action.payload,
      };
      break;
    case dashboardType.GET_ALL_DASHBOARD_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case dashboardType.GET_ALL_DASHBOARD_SUCCESS:
      state = {
        ...state,
        loading: false,
        getAllDashBoard: action.payload.data,
      };
      break;
    case dashboardType.GET_ALL_DASHBOARD_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    case dashboardType.GET_DASH_BY_SLUG_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case dashboardType.GET_DASH_BY_SLUG_SUCCESS:
      state = {
        ...state,
        loading: false,
        getDashBySlug: action.payload.data,
      };
      break;
    case dashboardType.GET_DASH_BY_SLUG_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    case dashboardType.SAVE_STATE_DASHBOARD_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case dashboardType.SAVE_STATE_DASHBOARD_SUCCESS:
      state = {
        ...state,
        loading: false,
      };
      break;
    case dashboardType.SAVE_STATE_DASHBOARD_FAILURE:
      state = {
        ...state,
        loading: false,
      };
      break;
  }
  return state;
};
