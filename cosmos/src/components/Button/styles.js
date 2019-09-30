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
  },
  registerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: globals.COLORS.ACCENT,
    borderRadius: 50,
    marginTop: '15%'
  },
  registerTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  signOutButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: globals.COLORS.ACCENT,
    borderRadius: 50,
    marginTop: 15
  },
  signOutTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15
  }
});

export {images, styles};
