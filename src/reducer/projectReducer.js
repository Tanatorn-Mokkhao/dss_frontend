import { projectType } from "../action/type";

const initialState = {
  loading: false,
  error: null,
  table: [],
  elementX: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case projectType.CREATE_PROJECT_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case projectType.CREATE_PROJECT_SUCCESS:
      state = {
        ...state,
        loading: false,
      };
      break;
    case projectType.CREATE_PROJECT_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    case projectType.GET_ALLTABLE_REQUEST:
      state = {
        ...state,
        laoding: true,
      };
      break;
    case projectType.GET_ALLTABLE_SUCCESS:
      state = {
        ...state,
        loading: false,
        table: action.payload.data,
      };
      break;
    case projectType.GET_ALLTABLE_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case projectType.GET_ALL_ELEMENT_LABELX_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case projectType.GET_ALL_ELEMENT_LABELX_SUCCESS:
      state = {
        ...state,
        elementX: action.payload.data,
        loading: false,
      };
      break;
    case projectType.GET_ALL_ELEMENT_LABELX_FAILURE:
      state = {
        ...state,
        loading: false,
      };
      break;
  }
  return state;
};
