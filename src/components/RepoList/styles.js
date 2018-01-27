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
    marginRight: 10,
    borderRadius: 5,
    overflow: 'hidden',
  },
  avatarImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
});
