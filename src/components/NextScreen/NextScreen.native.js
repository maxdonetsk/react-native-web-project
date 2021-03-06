/* @flow */

import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import Image from 'react-native-remote-svg';
import Header from '../Header/Header';
import {nextScreenStyles} from './styles';

const NextScreen = () => (
  <View style={nextScreenStyles.container}>
    <Header
      title="NextScreen"
      isBackButtonEnabled/>
    <ScrollView contentContainerStyle={nextScreenStyles.scrollView}>
      <View style={nextScreenStyles.view}>
        <Image
          source={require('../../assets/icons/linearicons.svg')}
          style={nextScreenStyles.image}/>
      </View>
      <Text>I'm an SVG-file!</Text>
    </ScrollView>
  </View>
);

export default NextScreen;
