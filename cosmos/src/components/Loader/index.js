import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {styles} from './styles';
import * as globals from '../../lib/globals';

const Loader = () => (
  <View style={styles.loader}>
    <ActivityIndicator size="large" color={globals.COLORS.PRIMARY}/>
  </View>
);

export default Loader;
