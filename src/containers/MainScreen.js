/* @flow */

import React, {Component} from 'react';
import {ScrollView, StatusBar} from 'react-native';

import Banner from '../components/Banner/Banner';
import ReposActions from '../actions/ReposActions';

class MainScreen extends Component {
  componentDidMount() {
    ReposActions.searchRepos();
  }

  render() {
    return (
      <ScrollView>
        <StatusBar backgroundColor="blue" barStyle="light-content"/>
        <Banner onClick={() => this.props.history.push('/next')}
                onPress={() => this.props.history.push('/next')}/>
      </ScrollView>
    );
  }
}

export default MainScreen;
