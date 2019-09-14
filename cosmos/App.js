import React, {Component} from 'react';
import {HomeContainer, AuthContainer} from "./src/lib/router";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as LoginActions from './src/redux/actions/loginActions';
import * as globals from './src/lib/globals';


class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    if (this.props.isLogged) {
      return (
        <HomeContainer/>
      )
    } else {
      return <AuthContainer/>
    }
  }

}

const mapStateToProps = (state) => {
  return {
    isLogged: state.loginReducer.isLogged
  }
};

const mapDispatchToProps = (dispatach) => {
  return bindActionCreators({
    doLogout: LoginActions.doLogout
  }, dispatach)
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
