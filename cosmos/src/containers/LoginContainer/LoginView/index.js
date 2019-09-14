import React from 'react';
import PropTypes from 'prop-types';
import {View, Image, StatusBar, ImageBackground} from 'react-native';
import * as globals from '../../../lib/globals';
import {images, styles} from './styles';
import LoginForm from './LoginForm';
import Loader from '../../../components/Loader';

const LoginView = (props) => {
  const {
    onLoginButtonPress,
    email,
    password,
    setEmail,
    setPassword,
    isLoginServiceLoading
  } = props;

  return (
    <ImageBackground style={styles.screenMain} source={images.background}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={globals.COLORS.PRIMARY}
      />
      {isLoginServiceLoading ? <Loader /> : null}
      <View style={styles.screenContainer}>
        <View style={styles.logoView}>
          <Image source={images.logo} style={styles.logoImage} resizeMode='contain'/>
        </View>
      </View>
      <LoginForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
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
  isLoginServiceLoading: PropTypes.bool
};

export default LoginView;
