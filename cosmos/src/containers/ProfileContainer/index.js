import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import NetInfo from "@react-native-community/netinfo";
import ProfileView from './ProfileView';
import {bindActionCreators} from "redux";
import * as LoginActions from "../../redux/actions/loginActions";
import * as functions from "../../lib/functions"

const ProfileScreen = (props) => {

  const onSignOutButtonPress = () => {
    functions.signOutAlert(props.doLogout)
  };

  return (
    <ProfileView
      userData={props.userData}
      onSignOutButtonPress={onSignOutButtonPress}
    />
  );
};


const mapStateToProps = (state, props) => {
  return {
    userData: state.loginReducer.userData
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    doLogout: LoginActions.doLogout,
  }, dispatch)
};

const profileScreenWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileScreen);

profileScreenWithRedux.navigationOptions = ({ navigation }) => ({
  header: null
});

export default profileScreenWithRedux;
