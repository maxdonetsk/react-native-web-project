/* @flow */

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {NativeRouter} from 'react-router-native';

import store from './store/configureStore';
import Routes from './containers/Routes';

class App extends React.Component<{}> {
  render() {
    return (
      <NativeRouter>
        <Provider store={store}>
          <Routes/>
        </Provider>
      </NativeRouter>
    );
  }
}

export default App;