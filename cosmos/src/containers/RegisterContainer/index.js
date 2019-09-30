import React, {useState, useEffect} from 'react';
import {Keyboard, BackHandler, TouchableOpacity, Text} from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import * as globals from '../../lib/globals';
import {connect} from 'react-redux';
import {useNavigation} from 'react-navigation-hooks';
import {bindActionCreators} from "redux";
import * as Actions from "../../redux/actions/loginActions";
import * as functions from '../../lib/functions';
import LoginView from './LoginView';

const RegisterScreen = (props) => {
  const {navigate} = useNavigation();

  const [email, setEmail] = useState(null);
  const [displayName, setDisplayName] = useState(null);
  const [password, setPassword] = useState(null);

  const onLoginButtonPress = () => {
    if (!email) {
      functions.displayAlert(null, 'Enter Email.');
    } else if (!displayName) {
      functions.displayAlert(null, 'Enter Display Name.');
    } else if (!password) {
      functions.displayAlert(null, 'Enter Password.');
    } else {
      Keyboard.dismiss();
      NetInfo.isConnected.fetch().done((isConnected) => {
        if(isConnected){
          let apiParam = {
            'email': email,
            'displayName': displayName,
            'password': password,
          };
          props.doRegistration(apiParam,globals.LOGIN_TYPE.normal);
        }else{
          functions.displayAlert(null, 'No Network Connection');
        }
      });
    }
  };

  return (
    <LoginView
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      displayName={displayName}
      setDisplayName={setDisplayName}
      onLoginButtonPress={onLoginButtonPress}
    />
  )
};

const mapStateToProps = (state, props) => {
  return {
    userData: state.loginReducer.userData,
    isLoginServiceLoading: state.loginReducer.isLoading,
    apiError: state.loginReducer.error,
    apiSuccess: state.loginReducer.success,
    deviceID: state.loginReducer.deviceID,
    isSessionExpired: state.loginReducer.isSessionExpired
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    doRegistration:Actions.doRegistration,
    resetLoginErrorMessage: Actions.resetLoginErrorMessage,
    enableLogin: Actions.enableLogin
  }, dispatch)
};

const loginWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterScreen);

loginWithRedux.navigationOptions = ({ navigation }) => ({
  header: true,
  headerLeft: (
    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
      <Text style={{ fontSize: 16, marginLeft: 15, color: 'white'}}>Back</Text>
    </TouchableOpacity>
  )
});

export default loginWithRedux;

