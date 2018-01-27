/* @flow */

import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';
import PropTypes from 'prop-types';
import {repoListItemStyles} from "./styles";

const RepoListItem = ({repo, onPress}) => (
  <TouchableOpacity
    onPress={onPress}
    style={repoListItemStyles.item}>
    <Image
      source={{uri: repo.owner.avatar_url}}
      style={repoListItemStyles.avatar}/>
    <Text
      style={repoListItemStyles.name}>
      {repo.full_name}
    </Text>
  </TouchableOpacity>
);

RepoListItem.propTypes = {
  repo: PropTypes.shape({
    full_name: PropTypes.string.isRequired,
    owner: PropTypes.shape({
      avatar_url: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  onPress: PropTypes.func.isRequired
};

export default RepoListItem;
