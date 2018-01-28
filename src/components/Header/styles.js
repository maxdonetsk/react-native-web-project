/* @flow */

import {Platform, StyleSheet} from 'react-native';
import {PRIMARY} from '../../styles/colors';

export const headerStyles = StyleSheet.create({
  header: {
    backgroundColor: PRIMARY,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
  title: {
    fontSize: 18,
    fontWeight: '200',
    color: '#fff',
    padding: 8,
  },
  button: {
    backgroundColor: PRIMARY,
    color: '#fff',
    padding: 8,
    fontSize: 18,
    fontWeight: '200',
    minWidth: 100,
  },
});
