/* @flow */

import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

const Banner = ({onClick}) => (
  <View style={styles.banner}
        onClick={onClick}>
    <Text style={styles.title}>React Native Web Boilerplate</Text>
  </View>
);

export default Banner;
