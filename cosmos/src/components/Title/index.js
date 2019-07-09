import React from 'react';
import PropTypes from 'prop-types';
import AppText from '../AppText';
import {styles} from "./styles";


const Title = ({children, style}) => (
  <AppText style={[styles.title, style]}>
    {children}
  </AppText>
);

AppText.propTypes = {
  children: PropTypes.node
};

export default Title;
