import { combineReducers } from "redux";
import authReducer from "./auth";
import projectReducer from "./projectReducer";
import chartReducer from "./chartReducer";
import dashboardReducer from "./dashBoardReducer";
const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  chart: chartReducer,
  dashboard: dashboardReducer,
});
export default rootReducer;
