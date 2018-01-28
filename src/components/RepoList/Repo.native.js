/* @flow */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ScrollView, View, Image, Text} from 'react-native';

import Header from '../Header/Header';
import {repoStyles} from "./styles";

class Repo extends Component {
  componentDidMount() {
    const {actions, match: {params: {owner, repo}}} = this.props;
    actions.getRepo(`${owner}/${repo}`);
  }

  componentWillUnmount() {
    this.props.actions.clearRepo();
  }

  render() {
    const {isLoading, errMessage, data} = this.props.repo;

    return (
      <ScrollView>
        <Header
          title={(!isLoading && !errMessage) ? data.full_name : ''}
          isBackButtonEnabled/>
        {isLoading && <Text>Loading...</Text>}
        {(!isLoading && !!errMessage) && <Text>{errMessage}</Text>}
        {(!isLoading && !errMessage) && (
          <View style={repoStyles.view}>
            <Image
              source={{uri: data.owner.avatar_url}}
              style={repoStyles.avatarImage}/>
          </View>
        )}
      </ScrollView>
    );
  }
};

Repo.propTypes = {
  repo: PropTypes.shape({
    isLoading: PropTypes.bool.isRequired,
    errMessage: PropTypes.string.isRequired,
    data: PropTypes.shape().isRequired
  }).isRequired,
  actions: PropTypes.shape({
    getRepo: PropTypes.func.isRequired,
    clearRepo: PropTypes.func.isRequired
  }).isRequired
};

export default Repo;
