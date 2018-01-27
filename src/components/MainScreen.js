/* @flow */

import React, {Component} from 'react';
import {ScrollView, StatusBar, Text} from 'react-native';
import PropTypes from 'prop-types';

import Banner from './Banner/Banner';
import RepoListItem from './RepoList/RepoListItem';

class MainScreen extends Component {
  componentDidMount() {
    this.props.actions.getAll();
  }

  _goNext = () => this.props.history.push('/next');

  _goItem = full_name => this.props.history.push(`/repo/${full_name}`);

  render() {
    const {repos, isLoading, errMessage} = this.props.reposList;
    return (
      <ScrollView>
        <StatusBar backgroundColor="blue" barStyle="light-content"/>
        <Banner onClick={this._goNext}
                onPress={this._goNext}/>
        {isLoading && <Text>Loading...</Text>}
        {(!isLoading && !!errMessage) && <Text>{errMessage}</Text>}
        {(!isLoading && !!repos.length) && repos.map(repo => (
          <RepoListItem
            key={repo.id}
            repo={repo}
            onClick={() => this._goItem(repo.full_name)}
            onPress={() => this._goItem(repo.full_name)}/>
        ))}
      </ScrollView>
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
