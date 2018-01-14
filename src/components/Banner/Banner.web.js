/* @flow */

import React from 'react';

import {Platform, StyleSheet, Text, View} from 'react-native';

const Banner = ({onClick}) => (
  <View style={styles.banner}
        onClick={onClick}>
    <Text style={styles.title}>React Native Web Boilerplate</Text>
  </View>
);

Banner.defaultProps = {
  displayName: 'Banner',
  onClick: () => {}
};

export default Banner;

const styles = StyleSheet.create({
  banner: {
    backgroundColor: '#673ab7',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
  title: {
    fontSize: 18,
    fontWeight: '200',
    color: '#fff',
    margin: 8,
  },
});
