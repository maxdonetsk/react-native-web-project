/* @flow */

import {StyleSheet} from 'react-native';

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

export const repoStyles = StyleSheet.create({
  view: {
    padding: 10,
    alignItems: 'center',
    borderRadius: 50,
    overflow: 'hidden',
  },
  avatarImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
