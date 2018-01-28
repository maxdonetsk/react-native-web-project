/* @flow */

import React from 'react';
import {ScrollView, StatusBar, Text} from 'react-native';
import Header from './Header/Header';

const NextScreen = (props) => (
  <ScrollView>
    <Header
      title="NextScreen"
      isBackButtonEnabled/>
    <Text>Hello World!</Text>
  </ScrollView>
);

export default NextScreen;
