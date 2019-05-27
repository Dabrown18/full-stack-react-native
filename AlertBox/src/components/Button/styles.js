import {StyleSheet} from 'react-native';
import globals from '../../lib/globals';

export const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: globals.COLORS.blue,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonTitle: {
    color: globals.COLORS.white,
    fontSize: 30
  }
});