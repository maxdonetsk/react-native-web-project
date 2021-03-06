/* @flow */

import React, {Component} from 'react';
import {View, ScrollView, StatusBar, Text} from 'react-native';
import PropTypes from 'prop-types';

import Header from './Header/Header';
import RepoListItem from './RepoList/RepoListItem';
import Loader from './Loader';

class MainScreen extends Component {
  componentDidMount() {
    this.props.actions.getAll();
  }

  _goItem = full_name => this.props.history.push(`/repo/${full_name}`);

  render() {
    const {repos, isLoading, errMessage} = this.props.reposList;
    return (
      <View>
        <StatusBar backgroundColor="blue" barStyle="light-content"/>
        <Header
          title="MainScreen"
          isNextButtonEnabled/>
        <ScrollView>
          {isLoading && <Loader/>}
          {(!isLoading && !!errMessage) && <Text>{errMessage}</Text>}
          {(!isLoading && !!repos.length) && repos.map(repo => (
            <RepoListItem
              key={repo.id}
              repo={repo}
              onClick={() => this._goItem(repo.full_name)}
              onPress={() => this._goItem(repo.full_name)}/>
          ))}
        </ScrollView>
      </View>
    );
  }
}

MainScreen.propTypes = {
  reposList: PropTypes.shape({
    isLoading: PropTypes.bool.isRequired,
    errMessage: PropTypes.string.isRequired,
    repos: PropTypes.array.isRequired
  }).isRequired,
  actions: PropTypes.shape({
    getAll: PropTypes.func.isRequired
  }).isRequired
};

export default MainScreen;
