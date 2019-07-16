import * as ActionTypes from '../actions/types';

const defaultState = {
  newsData: []
};

const newsFeedReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_NEWS:
      return Object.assign({}, state, {
        newsData: action.payload.results || []
      });
    default:
      return state;
  }
};

export default newsFeedReducer;
