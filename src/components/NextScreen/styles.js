/* @flow */

import {Platform, StyleSheet} from 'react-native';
import {PRIMARY} from '../../styles/colors';

export const nextScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 80,
    height: 80,
  },
});
