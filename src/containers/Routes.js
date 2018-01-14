import React from 'react';
import {Redirect, Route, Switch} from 'react-router';

import MainScreen from './MainScreen';
import NextScreen from './NextScreen';

const Root = () => (
  <Switch>
    <Route exact path="/next" component={NextScreen}/>
    <Route exact path="/" component={MainScreen}/>
  </Switch>
);

export default Root;