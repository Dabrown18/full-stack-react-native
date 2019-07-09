import React from 'react';
import PropTypes from 'prop-types';
import AppText from '../AppText';
import {styles} from './styles';

const SmallText = ({children, style, ...rest}) => (
  <AppText style={[styles.small, style]} {...rest}>
    {children}
  </AppText>
);

AppText.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
};

export default SmallText;
