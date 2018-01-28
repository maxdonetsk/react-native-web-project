/* @flow */

import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import Header from '../Header/Header';
import {nextScreenStyles} from './styles';

const NextScreen = () => (
  <View style={nextScreenStyles.container}>
    <Header
      title="NextScreen"
      isBackButtonEnabled/>
    <ScrollView contentContainerStyle={nextScreenStyles.scrollView}>
      <View style={nextScreenStyles.view}>
        <img
          src={require('../../assets/icons/linearicons.svg')}
          width={80}/>
      </View>
      <Text>I'm an SVG-file!</Text>
    </ScrollView>
  </View>
);

export default NextScreen;
