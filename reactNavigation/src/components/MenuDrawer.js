import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const MenuDrawer = ({link}) => {
  const navLink = (nav, label) => {
    console.log('Here are our props', link);
    return (
      <TouchableOpacity style={{height: 40}} onPress={() => link.navigate(nav)}>
        <Text style={styles.navLink}>{label}</Text>
      </TouchableOpacity>
    )
  };

  return (
    <View style={styles.container}>
      <View style={styles.topLink}>
        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 20,
            paddingTop: 40,
            paddingLeft: 14
          }}
        >
          Menu Drawer
        </Text>
      </View>
      <View style={styles.bottomLink}>
        {navLink('HomeScreen', 'Home')}
        {navLink('SettingsScreen', 'Settings')}
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9cb2ce"
  },
  topLink: {
    height: 100,
    backgroundColor: "#3b5998"
  },
  bottomLink: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 10
  },
  navLink: {
    fontSize: 20,
    padding: 6,
    paddingLeft: 14,
    margin: 5,
    textAlign: 'left',
    color: "#4e4e55"
  }
});

export default MenuDrawer;