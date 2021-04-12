import { authType } from "../action/type";

const inital = {
  authenticate: false,
  loading: false,
  error: null,
  user: [],
};

export default (state = inital, action) => {
  console.log(action);

  switch (action.type) {
    case authType.LOGIN_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case authType.LOGIN_SUCCESS:
      state = {
        ...state,
        authenticate: true,
        user: action.payload.user,
      };
      break;
    case authType.LOGIN_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    case authType.LOGOUT_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case authType.LOGOUT_SUCCESS:
      state = {
        ...inital,
        loading: false,
      };
      break;
    case authType.LOGOUT_FAILURE:
      state = {
        ...state,
        loading: false,
      };
      break;
  }
  return state;
};
