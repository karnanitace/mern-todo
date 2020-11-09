import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import authReducer from "./authReducer";
import alertReducer from "./alertReducer";

export default combineReducers({
  todo: todoReducer,
  auth: authReducer,
  alert: alertReducer,
});
