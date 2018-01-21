/* @flow */

import React, {Component} from 'react';
import {TouchableOpacity, Text} from 'react-native';

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
      <TouchableOpacity onPress={goBack}>
        {isLoading && <Text>Loading...</Text>}
        {(!isLoading && !!errMessage) && <Text>{errMessage}</Text>}
        {(!isLoading && !errMessage) && <Text>{JSON.stringify(data)}</Text>}
      </TouchableOpacity>
    );
  }
};

export default Repo;
