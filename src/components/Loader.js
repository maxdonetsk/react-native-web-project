/* @flow */

import React from 'react';
import {ActivityIndicator} from 'react-native';

const Loader = () => (
  <ActivityIndicator
    size="large"
    color="gray"
    style={{margin: 10}}/>
);

export default Loader;
