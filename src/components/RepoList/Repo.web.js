/* @flow */

import React, {Component} from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';

class Repo extends Component {
  componentDidMount() {
    const {actions, match: {params: {owner, repo}}} = this.props;
    actions.getRepo(`${owner}/${repo}`);
  }

  componentWillUnmount() {
    this.props.actions.clearRepo();
  }

  render() {
    const {repo: {isLoading, errMessage, data}, history: {goBack}} = this.props;

    return (
      <View onClick={goBack}>
        {isLoading && <Text>Loading...</Text>}
        {(!isLoading && !!errMessage) && <Text>{errMessage}</Text>}
        {(!isLoading && !errMessage) && <Text>{JSON.stringify(data)}</Text>}
      </View>
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
