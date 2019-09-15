import React from 'react';
import PropTypes from 'prop-types';
import {View, TextInput, Keyboard} from 'react-native';
import {styles} from "../styles"

const Password = (props) => {
  const {
    password,
    setPassword
  } = props;

  return (
    <View style={styles.inputContainer}>
      <View style={styles.inputInnerContainer}>
        <TextInput
          style={styles.inputText}
          placeholder={'Password'}
          ref={input => {
            this.passwordTextInput = input;
          }}
          onSubmitEditing={Keyboard.dismiss}
          value={password}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          placeholderTextColor={'#FFFFFF'}
          clearButtonMode='while-editing'
        />
      </View>
      <View style={styles.inputDividerLine} />
    </View>
  )
};

Password.propTypes = {
  password: PropTypes.string,
  setPassword: PropTypes.func
};

export default Password;
