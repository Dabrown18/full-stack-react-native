import {StyleSheet} from 'react-native';
import * as globals from '../../lib/globals';

const images = {};

const styles = StyleSheet.create({
  loginButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: globals.COLORS.SECONDARY,
    borderRadius: 50,
    marginTop: '15%'
  },
  loginTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  }
});

export {images, styles};
