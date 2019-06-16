import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';

const MenuButton = ({toggleDrawer}) => (
  <TouchableOpacity onPress={toggleDrawer}>
    <Image
      source={require('../images/menu-icon.png')}
      style={styles.menuIcon}
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  menuIcon: {
    width: 30,
    height: 24,
    marginLeft: 15
  }
});

export default MenuButton;