/* @flow */

import React, {Component} from 'react';

import {ScrollView, StatusBar} from 'react-native';

import Banner from '../components/Banner/Banner';

class MainScreen extends Component {
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
