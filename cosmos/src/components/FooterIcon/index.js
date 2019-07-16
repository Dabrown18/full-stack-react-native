import React from 'react';
import PropTypes from 'prop-types';
import {View, Image} from 'react-native';
import {styles, images} from './styles';

const FooterIcon = ({tabBarIndex, isFocused}) => {
  let tabBarImage;

  if(parseInt(tabBarIndex) === 0) {
    (isFocused)
      ? tabBarImage = images.newsIconSelected
      : tabBarImage = images.newsIconUnselected
  } else {
    (isFocused)
      ? tabBarImage = images.profileIconSelected
      : tabBarImage = images.profileIconUnselected
  }

  return (
    <View style={styles.tabBarItem}>
      <Image resizeMode='contain' source={tabBarImage}/>
    </View>
  )
};

FooterIcon.propTypes = {
  tabBarIndex: PropTypes.number,
  isFocused: PropTypes.bool
};

export default FooterIcon;
