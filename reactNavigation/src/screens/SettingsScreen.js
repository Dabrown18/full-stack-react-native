import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SettingsScreen = () => (
  <View style={styles.container}>
    <Text style={styles.textStyle}>Settings Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    fontSize: 20
  }
});

export default SettingsScreen;