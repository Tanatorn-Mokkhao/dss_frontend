import { chartType } from "../action/type";

const initialState = {
  loading: false,
  error: null,
  chartProject: [],
  chartProjectPage: [],
  dataTable: [],
  dataQuery: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case chartType.CREATE_PROJECT_CHART_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case chartType.CREATE_PROJECT_CHART_SUCCESS:
      state = {
        ...state,
        loading: false,
      };
      break;
    case chartType.CREATE_PROJECT_CHART_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    case chartType.GET_ALLCHART_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;

    case chartType.GET_ALLCHART_SUCCESS:
      state = {
        ...state,
        loading: false,
        chartProject: action.payload.data,
      };
      break;
    case chartType.GET_ALLCHART_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    case chartType.GET_PROJECT_PAGE_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case chartType.GET_PROJECT_PAGE_SUCCESS:
      state = {
        ...state,
        loading: false,
        chartProjectPage: action.payload.data,
        dataTable: action.payload.table,
      };
      break;
    case chartType.GET_PROJECT_PAGE_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    case chartType.GET_QUERY_DATA_CHART_GROUP_X_Y_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case chartType.GET_QUERY_DATA_CHART_GROUP_X_Y_SUCCESS:
      state = {
        ...state,
        loading: false,
        dataQuery: action.payload.data,
      };
      break;
    case chartType.GET_QUERY_DATA_CHART_GROUP_X_Y_FAILURE:
      state = {
        ...state,
        loading: false,
      };
      break;
    case chartType.CLEAR_CHART:
      state = {
        ...initialState,
        loading: false,
      };
      break;
    case chartType.GET_ELEMENT_BY_LABELX_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case chartType.GET_ELEMENT_BY_LABELX_SUCCESS:
      state = {
        ...state,
        loading: false,
        dataQuery: action.payload.data,
      };
      break;
    case chartType.GET_ELEMENT_BY_LABELX_FAILURE:
      state = {
        ...state,
        loading: false,
      };
      break;
  }
  return state;
};
