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
