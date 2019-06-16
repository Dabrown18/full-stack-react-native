import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation}) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.navigate('Details')}>
      <Text style={styles.textStyle}>Get Details</Text>
    </TouchableOpacity>
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

export default HomeScreen;