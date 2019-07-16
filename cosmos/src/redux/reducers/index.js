import newsFeedReducer from './newsFeedReducer';
import {combineReducers} from "redux";

export default combineReducers({
  news: newsFeedReducer
})
