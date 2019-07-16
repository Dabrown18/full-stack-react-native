import React from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import reducer from './src/redux/reducers';
import {HomeContainer} from "./src/lib/router";

const logger = createLogger();

const store = createStore(reducer, {}, applyMiddleware(thunk, logger));

const App = () => {
  return (
    <Provider store={store}>
      <HomeContainer/>
    </Provider>
  )
};

export default App;
