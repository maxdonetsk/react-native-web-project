/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';

import history from './utils/History/history';
import store from './store/configureStore';
import Routes from './containers/Routes';

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <Routes/>
    </Provider>
  </Router>,
  document.getElementById('root')
);
