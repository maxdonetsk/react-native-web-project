/* @flow */

import {Platform, StyleSheet} from 'react-native';
import {PRIMARY} from '../../styles/colors';

export const repoListItemStyles = StyleSheet.create({
  item: {
    display: 'flex',
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center'
  },
  avatar: {
    width: 30,
    height: 30,
    marginRight: 10,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
});
