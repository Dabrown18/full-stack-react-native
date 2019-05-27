import React, {Component} from 'react';
import {TouchableOpacity, Text} from 'react-native';

export default class Button extends Component {
  constructor(props) {
    console.log(`1st Button constructor`);
    super(props);

  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(`2nd Button getDerivedStateFromProps`);
  }

  componentDidMount() {
    console.log(`4th Button componentDidMount`)
  }

  render() {
    console.log(`3rd Button render`);
    const {onButtonPress} = this.props;

    return (
      <TouchableOpacity
        onPress={onButtonPress}
        style={{
          backgroundColor: 'red',
          width: '50%',
          height: '8%',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 50
        }}
      >
        <Text
          style={{
            color: '#FFFFFF',
            fontSize: 25,
            fontWeight: '700'
          }}
        >Press Here</Text>
      </TouchableOpacity>
    )
  }
}