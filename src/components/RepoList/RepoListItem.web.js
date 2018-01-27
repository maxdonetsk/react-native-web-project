/* @flow */

import React from 'react';
import {View, Text, Image} from 'react-native';
import PropTypes from 'prop-types';
import {repoListItemStyles} from './styles';

const RepoListItem = ({repo, onClick}) => {
  return (
    <View
      onClick={onClick}
      style={repoListItemStyles.item}>
      <Image
        source={{uri: repo.owner.avatar_url}}
        style={repoListItemStyles.avatar}/>
      <Text
        style={repoListItemStyles.name}>
        {repo.full_name}
      </Text>
    </View>
  );
};

RepoListItem.propTypes = {
  repo: PropTypes.shape({
    full_name: PropTypes.string.isRequired,
    owner: PropTypes.shape({
      avatar_url: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired
};

export default RepoListItem;
