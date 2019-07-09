import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import * as globals from '../../lib/globals';

const AppText = ({children, style, ...rest}) => (
  <Text style={[globals.COMMON_STYLES.text, style]} {...rest}>
    {children}
  </Text>
);

AppText.propTypes = {
  children: PropTypes.node
};

export default AppText;
