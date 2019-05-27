import React, {Component} from "react";
import {View, Text, TouchableOpacity, Alert, TextInput, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ' '
    }
  }


  render() {
    return (
      <View style={styles.container}
      >
        <Text>{this.state.text}</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({text})}
          value={this.state.text}
        />
      </View>

    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    height: 50,
    width: '75%',
    borderColor: '#FFF',
    borderWidth: 2
  }
});