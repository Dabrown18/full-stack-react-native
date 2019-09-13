import * as ActionTypes from '../actions/types';

const defaultLoginState = {
  userData: {},
  isLogged: false,
  isLoading: false,
  error: undefined,
  success: undefined,
  isSessionExpired: false
};

export default function loginReducer(state = defaultLoginState, action) {
  switch (action.type) {
    case ActionTypes.LOGIN_SERVICE_LOADING:
      return Object.assign({}, state, {
        isLoading: true
      });
    case ActionTypes.LOGIN_SERVICE_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });
    case ActionTypes.RESET_LOGIN_ERROR_MESSAGE:
      return Object.assign({}, state, {
        error: undefined
      });
    case ActionTypes.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        userData: action.responseData,
        isLogged: true
      });
    case ActionTypes.ENABLE_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        isLogged: true
      });
    case ActionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        userData: {},
        isLogged: false,
        isLoading: false,
        error: undefined,
        success: undefined,
        isSessionExpired: true
      };
    default:
      return state;
  }
}
