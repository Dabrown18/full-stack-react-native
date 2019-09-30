import {StyleSheet} from 'react-native';
import * as globals from '../../../lib/globals';

const images = {
  background: require('../../../assets/images/login/login-background.jpg'),
  logo: require('../../../assets/images/login/globe-logo.png')
};

const styles = StyleSheet.create({
  screenMain: {
    flex: 1,
    backgroundColor: 'rgba(0, 86, 121, 0.8)'
  },
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 86, 121, 0.8)'
  },
  logoView: {
    position: 'absolute', left: 0, right: 0, top: 0,
    width: globals.SCREEN_SIZE.width,
    height: '65%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginTop: '20%'
  },
  logoImage: {
    width: globals.SCREEN_SIZE.width,
    height: '100%'
  },
  loginScreen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 86, 121, 0.8)',
    zIndex: 99
  },
  loginContainer: {
    marginTop: 0,
    height: '75%',
    flexDirection: 'column',
    backgroundColor: 'transparent'
  },
  loginView: {
    width: globals.SCREEN_SIZE.width - (2 * 15),
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  inputContainer: {
    width: globals.SCREEN_SIZE.width - (4 * 15),
    height: '25%',
    justifyContent: 'flex-end',
    flexDirection: 'column'
  },
  inputInnerContainer: {
    width: globals.SCREEN_SIZE.width - (4 * 15),
    height: 0 - 15 - 1,
    flexDirection: 'row'
  },
  inputIconConainter: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '300',
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    width: '98%'
  },
  inputDividerLine: {
    width: globals.SCREEN_SIZE.width - (4 * 15),
    borderBottomColor: 'transparent',
    borderBottomWidth: 1
  }
});

export {images, styles};
