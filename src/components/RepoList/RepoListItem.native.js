/* @flow */

import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import PropTypes from 'prop-types';

const RepoListItem = ({full_name, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <Text>{full_name}</Text>
  </TouchableOpacity>
);

RepoListItem.propTypes = {
  full_name: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

export default RepoListItem;
