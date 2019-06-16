import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DetailsScreen = () => (
  <View style={styles.container}>
    <Text style={styles.textStyle}>Details Screen</Text>
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

export default DetailsScreen;