import React, {useState, useEffect} from 'react';
import {Keyboard, BackHandler} from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import * as globals from '../../lib/globals';
import {connect} from 'react-redux';
import {useNavigation} from 'react-navigation-hooks';
import {bindActionCreators} from "redux";
import * as Actions from "../../redux/actions/loginActions";
import * as functions from '../../lib/functions';
import LoginView from './LoginView';

const LoginScreen = (props) => {
  const {navigate} = useNavigation();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const onLoginButtonPress = () => {
    if (!email) {
      functions.displayAlert(null, 'Enter Email.');
    } else if (!password) {
      functions.displayAlert(null, 'Enter Password.');
    } else {
      Keyboard.dismiss();
      NetInfo.isConnected.fetch().done((isConnected) => {
        if(isConnected){
          let apiParam = {
            'email': email,
            'password': password,
          };
          props.doLogin(apiParam,globals.LOGIN_TYPE.normal);
        }else{
          functions.displayAlert(null, 'No Network Connection');
        }
      });
    }
  };

  const onRegisterButtonPress = () => {
    navigate('Register', {'fromScreen': 'Login'})
  };

  return (
    <LoginView
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      onLoginButtonPress={onLoginButtonPress}
      onRegisterButtonPress={onRegisterButtonPress}
    />
  )
};

const mapStateToProps = (state, props) => {
  return {
    userData: state.loginReducer.userData,
    isLoginServiceLoading: state.loginReducer.isLoading,
    apiError: state.loginReducer.error,
    apiSuccess: state.loginReducer.success,
    isPinRequired: state.loginReducer.isPinRequired,
    isAppVersionError: state.loginReducer.isAppVersionError,
    deviceID: state.loginReducer.deviceID,
    isSessionExpired: state.loginReducer.isSessionExpired
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    doLogin:Actions.doLogin,
    resetLoginErrorMessage: Actions.resetLoginErrorMessage,
    enableLogin: Actions.enableLogin
  }, dispatch)
};

const loginWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);

loginWithRedux.navigationOptions = ({ navigation }) => ({
  header: null
});

export default loginWithRedux;

