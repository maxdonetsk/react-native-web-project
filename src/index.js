/* @flow */

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-native';

import history from './utils/History/history';
import store from './store/configureStore';
import Routes from './components/Routes';

class App extends Component<{}> {
  render() {
    return (
      <Router history={history}>
        <Provider store={store}>
          <Routes/>
        </Provider>
      </Router>
    );
  }
}

export default App;