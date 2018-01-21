/* @flow */

import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';

const RepoListItem = ({full_name, onClick}) => {
  return (
    <View onClick={onClick}>
      <Text>{full_name}</Text>
    </View>
  );
};

RepoListItem.propTypes = {
  full_name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default RepoListItem;
