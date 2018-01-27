/* @flow */

import {Platform, StyleSheet} from 'react-native';
import {PRIMARY} from '../../styles/colors';

export const bannerStyles = StyleSheet.create({
  banner: {
    backgroundColor: PRIMARY,
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
