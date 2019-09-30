import React from 'react';
import PropTypes from 'prop-types';
import {View, TextInput} from 'react-native';
import {styles} from "../styles"

const Email = (props) => {
  const {
    email,
    setEmail
  } = props;

  return (
    <View style={styles.inputContainer}>
      <View style={styles.inputInnerContainer}>
        <TextInput style={styles.inputText} placeholder={'Email'}
                   ref={input => {
                     this.emailTextInput = input;
                   }}
                   onSubmitEditing={() => {
                     this.displayNameTextInput.focus();
                   }}
                   blurOnSubmit={false}
                   value={email}
                   autoCapitalize = 'none'
                   onChangeText={(text) => setEmail(text)}
                   placeholderTextColor={'#FFFFFF'} clearButtonMode="while-editing"
                   returnKeyType={"next"} keyboardType="email-address">
        </TextInput>

      </View>
      <View style={styles.inputDividerLine} />
    </View>
  )
};

Email.propTypes = {
  email: PropTypes.string,
  setEmail: PropTypes.func
};

export default Email;
