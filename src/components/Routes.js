import React from 'react';
import {Route, Switch} from 'react-router';

import MainScreen from '../containers/MainScreen';
import NextScreen from '../containers/NextScreen';
import Repo from '../containers/Repo';

const Root = () => (
  <Switch>
    <Route exact path="/next" component={NextScreen}/>
    <Route exact path="/repo/:owner/:repo" component={Repo}/>
    <Route exact path="/" component={MainScreen}/>
  </Switch>
);

export default Root;