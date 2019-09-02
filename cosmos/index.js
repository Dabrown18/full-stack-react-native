/**
 * @format
 */
import React, {Component} from "react";
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import reducer from './src/redux/reducers';
import App from './App';
import {name as appName} from './app.json';

const logger = createLogger();

const store = createStore(reducer, {}, applyMiddleware(thunk, logger));

class Cosmos extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

AppRegistry.registerComponent(appName, () => Cosmos);
