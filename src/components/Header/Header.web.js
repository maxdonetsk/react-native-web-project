/* @flow */

import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import history from '../../utils/History/history';
import {headerStyles} from './styles';

const Header = ({title, isBackButtonEnabled, isNextButtonEnabled}) => {
  const goNext = () => history.push('/next');

  return (
    <View style={headerStyles.header}>
      {isBackButtonEnabled ? (
        <TouchableOpacity
          onPress={history.goBack}>
          <Text style={headerStyles.button}>Back</Text>
        </TouchableOpacity>
      ) : (
        <Text style={headerStyles.button}></Text>
      )}
      <Text style={headerStyles.title}>{title}</Text>
      {isNextButtonEnabled ? (
        <TouchableOpacity
          onPress={goNext}>
          <Text style={[headerStyles.button, {textAlign: 'right'}]}>Next</Text>
        </TouchableOpacity>
      ) : (
        <Text style={headerStyles.button}></Text>
      )}
    </View>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  isBackButtonEnabled: PropTypes.bool,
  isNextButtonEnabled: PropTypes.bool
};

export default Header;
