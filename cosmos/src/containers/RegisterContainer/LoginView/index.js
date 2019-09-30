import React from 'react';
import PropTypes from 'prop-types';
import {View, Image, StatusBar, ImageBackground, Text} from 'react-native';
import * as globals from '../../../lib/globals';
import {images, styles} from './styles';
import LoginForm from './LoginForm';
import Loader from '../../../components/Loader';
import Header from "../../../components/Header";

const LoginView = (props) => {
  const {
    onLoginButtonPress,
    email,
    password,
    setEmail,
    setPassword,
    displayName,
    setDisplayName,
    isLoginServiceLoading
  } = props;

  return (
    <ImageBackground style={styles.screenMain} source={images.background}>
      <Header
        isBackButtonRequired={true}
        navigation={props.navigation}
        customHeaderStyle={{
          height: 50,
          alignItems: "center",
          paddingTop: 20,
          backgroundColor: 'rgba(0, 86, 121, 0.8)'}}
      />
      {isLoginServiceLoading ? <Loader /> : null}
      <View style={styles.screenContainer}>
        <View style={styles.logoView}>
          <Image source={images.logo} style={styles.logoImage} resizeMode='contain'/>
          <Text
            style={{
              color: 'white',
              fontSize: globals.SCREEN_SIZE.width / 15
            }}
          >
            Create Your Account
          </Text>
        </View>
      </View>
      <LoginForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        displayName={displayName}
        setDisplayName={setDisplayName}
        onLoginButtonPress={onLoginButtonPress}
      />
    </ImageBackground>
  )
};

LoginView.propTypes = {
  onLoginButtonPress: PropTypes.func,
  email: PropTypes.string,
  password: PropTypes.string,
  setEmail: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  displayName: PropTypes.string,
  setDisplayName: PropTypes.func,
  isLoginServiceLoading: PropTypes.bool
};

export default LoginView;
