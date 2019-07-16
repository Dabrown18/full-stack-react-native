import {StyleSheet} from 'react-native';
import * as globals from '../../lib/globals';

const images = {
  newsIconSelected: require('../../assets/images/footer/icn-news-active.png'),
  newsIconUnselected: require('../../assets/images/footer/icn-news-inactive.png'),
  profileIconSelected: require('../../assets/images/footer/icn-profile-active.png'),
  profileIconUnselected: require('../../assets/images/footer/icn-profile-inactive.png')
};

const styles = StyleSheet.create({
  tabBarItem: {
    width: (globals.SCREEN_SIZE.width / 4),
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export {images, styles};
