import newsFeedReducer from './newsFeedReducer';
import loginReducer from "./loginReducer";
import {combineReducers} from "redux";

export default combineReducers({
  news: newsFeedReducer,
  loginReducer
})
