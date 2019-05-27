import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Button from './src/components/Button';

export default class App extends Component  {
  constructor(props) {
    console.log(`1st App constructor`);
    super(props);

    this.state = {
      value: ''
    };
  }

  onButtonPress = () => {
    this.setState({
      value: Date.now()
    })
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(`2nd App getDerivedStateFromProps`);
  }

  componentDidMount() {
    console.log(`4th App componentDidMount`)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(`5th App shouldComponentUpdate`);
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(`6th App componentDidUpdate`)
  }

  componentWillUnmount() {
    console.log(`7th App componentWillUnmount`)
  }
  
  render() {
    console.log(`3rd App render`);
    return (
      <View style={styles.container}>
        <Button onButtonPress={this.onButtonPress}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
