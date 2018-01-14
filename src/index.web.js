/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import store from './store/configureStore';
import Routes from './containers/Routes';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes/>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
