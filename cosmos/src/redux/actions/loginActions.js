import * as ActionTypes from './types';
import apiHelper from '../../lib/apiHelper';
import defaultLoginState from '../reducers/loginReducer';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import * as globals from '../../lib/globals';

export const apiServiceActionLoading = () => ({
  type: ActionTypes.LOGIN_SERVICE_LOADING
});

export const apiServiceActionError = (error) => ({
  type: ActionTypes.LOGIN_SERVICE_ERROR,
  error: error
});

export const loginServiceActionSuccess = (responseData) => ({
  type: ActionTypes.LOGIN_SUCCESS,
  responseData,
});

export function doRegistration(params, loginType) {
  return async (dispatch) => {
    dispatch(apiServiceActionLoading());
    const loginApi = await axios.post(apiHelper.getRegisterApi(), params)
      .then(response => {
        AsyncStorage.getItem(globals.ASYNC_STORAGE_TYPE.userData)
          .then(userStorageData => {
            // if user settings does not exist do this
            if (userStorageData === null) {
              let userSettings = {userID: response.data.userID};
              AsyncStorage.setItem(globals.ASYNC_STORAGE_TYPE.userSettings, JSON.stringify(userSettings));
              dispatch(loginServiceActionSuccess(response.data));
            } else {
              // if internal settings exist do this
              let userData = JSON.parse(userStorageData);
              // if settings NOT equal to response settings do this
              if (userData.userID !== response.data.userID) {
                let userSettings = {userID: response.data.userID};
                AsyncStorage.setItem(globals.ASYNC_STORAGE_TYPE.userSettings, JSON.stringify(userSettings));
                dispatch(loginServiceActionSuccess(response.data))
              } else {
                // internal settings equal to response settings
                AsyncStorage.getItem(globals.ASYNC_STORAGE_TYPE.userSettings)
                  .then(userSettingsData => {
                    // if null set settings = to response
                    if (userSettingsData === null) {
                      let userSettings = {userID: response.data.userID};
                      AsyncStorage.setItem(globals.ASYNC_STORAGE_TYPE.userSettings, JSON.stringify(userSettings));
                    } else {
                      // if NOT null
                      let userSettings = JSON.parse(userSettingsData);
                      // make sure settings match response data
                      if (userSettings.userID !== response.data.userID) {
                        userSettings.userID = response.data.userID;
                        AsyncStorage.setItem(globals.ASYNC_STORAGE_TYPE.userSettings, JSON.stringify(userSettings));
                      }
                    }
                    dispatch(loginServiceActionSuccess(response.data))
                  });
              }

            }
            if (loginType === globals.LOGIN_TYPE.normal) {
              AsyncStorage.setItem(globals.ASYNC_STORAGE_TYPE.userData, JSON.stringify(response.data));
            }
          });
      }).catch(error => {
        dispatch(apiServiceActionError(error.response.data.message))
      });
  }
}

export function doLogin(params, loginType) {
  return async (dispatch) => {
    dispatch(apiServiceActionLoading());
    const loginApi = await axios.post(apiHelper.getLoginApi(), params)
      .then(response => {
        AsyncStorage.getItem(globals.ASYNC_STORAGE_TYPE.userData)
          .then(userStorageData => {
            // if user settings does not exist do this
            if (userStorageData === null) {
              let userSettings = {userID: response.data.userID};
              AsyncStorage.setItem(globals.ASYNC_STORAGE_TYPE.userSettings, JSON.stringify(userSettings));
              dispatch(loginServiceActionSuccess(response.data));
            } else {
              // if internal settings exist do this
              let userData = JSON.parse(userStorageData);
              // if settings NOT equal to response settings do this
              if (userData.userID !== response.data.userID) {
                let userSettings = {userID: response.data.userID};
                AsyncStorage.setItem(globals.ASYNC_STORAGE_TYPE.userSettings, JSON.stringify(userSettings));
                dispatch(loginServiceActionSuccess(response.data))
              } else {
                // internal settings equal to response settings
                AsyncStorage.getItem(globals.ASYNC_STORAGE_TYPE.userSettings)
                  .then(userSettingsData => {
                    // if null set settings = to response
                    if (userSettingsData === null) {
                      let userSettings = {userID: response.data.userID};
                      AsyncStorage.setItem(globals.ASYNC_STORAGE_TYPE.userSettings, JSON.stringify(userSettings));
                    } else {
                      // if NOT null
                      let userSettings = JSON.parse(userSettingsData);
                      // make sure settings match response data
                      if (userSettings.userID !== response.data.userID) {
                        userSettings.userID = response.data.userID;
                        AsyncStorage.setItem(globals.ASYNC_STORAGE_TYPE.userSettings, JSON.stringify(userSettings));
                      }
                    }
                    dispatch(loginServiceActionSuccess(response.data))
                  });
              }

            }
            if (loginType === globals.LOGIN_TYPE.normal) {
              AsyncStorage.setItem(globals.ASYNC_STORAGE_TYPE.userData, JSON.stringify(response.data));
            }
          });
      }).catch(error => {
        dispatch(apiServiceActionError(error.response.data.message))
      });
  }
}

export function doLogout(resetNavigation:Function) {
  AsyncStorage.getItem(globals.ASYNC_STORAGE_TYPE.userData)
    .then(storageData => {
      if (storageData !== null) {
        let userData = JSON.parse(storageData);
        userData.token = null;
        AsyncStorage.setItem(globals.ASYNC_STORAGE_TYPE.userData, JSON.stringify(userData));
      }
    });
  return dispatch => {
    dispatch({
      type: ActionTypes.LOGOUT_SUCCESS,
      ...defaultLoginState,
      resetNavigation
    })
  }
}

export function resetLoginErrorMessage() {
  return dispatch => {
    return dispatch({
      type: ActionTypes.RESET_LOGIN_ERROR_MESSAGE
    })
  }
}

export function enableLogin() {
  return dispatch => {
    return dispatch({
      type: ActionTypes.ENABLE_LOGIN_SUCCESS
    })
  }
}


