/* @flow */

import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {bannerStyles} from './styles';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
// // Use prebuilt version of RNVI in dist folder
// import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Banner = ({onPress}) => (
  <TouchableOpacity style={bannerStyles.banner} onPress={onPress}>
    <Text style={bannerStyles.title}>React Native Web Boilerplate</Text>
    <Icon name="code" size={30} color="#900"/>
  </TouchableOpacity>
);

export default Banner;
