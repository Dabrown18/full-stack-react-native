import {Dimensions} from 'react-native';

let {height, width} = Dimensions.get('window');

module.exports = {
  SCREEN_SIZE: {
    width,
    height
  },
  COLORS: {
    PRIMARY: '#005679',
    SECONDARY: '#89C6E1',
    ACCENT: '#0F9DC8',
    BG_COLOR: '#F4F4F6',
    BAR_COLOR: '#4E4D52',
    TEXT_COLOR: '#4E4E55',
    HEADER_TEXT_COLOR: '#FFFFFF',
    LINK_COLOR: '#48E9D9',
    MUTED_COLOR: '#8E8786'
  },
  LOGIN_TYPE: {
    normal: 1,
    touch: 2,
    face: 3,
  },
  ASYNC_STORAGE_TYPE: {
    userData: 'userData',
    userSettings: 'userSettings',
    deviceToken: 'deviceToken'
  },
  BUTTON_TYPE: {
    loginButton: 1,
    signOutButton: 2
  },
  BUTTON_TITLE: {
    loginTitle: 'SIGN IN',
    signOutTitle: 'SIGN OUT'
  },
  COMMON_STYLES: {
    pageContainer: {
      backgroundColor: '#F4F4F6',
      marginTop: 0,
      paddingTop: 0,
      marginHorizontal: 0,
      paddingHorizontal: 10
    },
    text: {
      color: '#E5DBDA',
      fontFamily: 'Helvetica Neue'
    }
  }
};
