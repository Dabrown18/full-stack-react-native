import React from 'react';
import PropTypes from 'prop-types';
import {View, Image, StatusBar, ImageBackground} from 'react-native';
import * as globals from '../../../lib/globals';
import {images, styles} from './styles';
import RegisterForm from './RegisterForm';
import Loader from '../../../components/Loader';
import Header from "../../../components/Header";

const RegisterView = (props) => {
  const {
    onRegisterButtonPress,
    email,
    displayName,
    setDisplayName,
    password,
    setEmail,
    setPassword,
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
          backgroundColor: 'rgba(0, 86, 121, 0.8)'
        }}
      />
      {isLoginServiceLoading ? <Loader /> : null}
      <View style={styles.screenContainer}>
        <View style={styles.logoView}>
          <Image source={images.logo} style={styles.logoImage} resizeMode='contain'/>
        </View>
      </View>
      <RegisterForm
        email={email}
        displayName={displayName}
        setDisplayName={setDisplayName}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        onRegisterButtonPress={onRegisterButtonPress}
      />
    </ImageBackground>
  )
};

RegisterView.propTypes = {
  onRegisterButtonPress: PropTypes.func,
  email: PropTypes.string,
  password: PropTypes.string,
  setEmail: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  isLoginServiceLoading: PropTypes.bool
};

export default RegisterView;
