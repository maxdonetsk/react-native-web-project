/* @flow */

import React from 'react';
import {Text, View} from 'react-native';
import {bannerStyles} from './styles';

const Banner = ({onClick}) => (
  <View style={bannerStyles.banner}
        onClick={onClick}>
    <Text style={bannerStyles.title}>React Native Web Boilerplate</Text>
  </View>
);

export default Banner;
