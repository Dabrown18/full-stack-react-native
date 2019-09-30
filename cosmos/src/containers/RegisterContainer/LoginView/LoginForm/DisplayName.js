import React from 'react';
import PropTypes from 'prop-types';
import {styles} from "../styles";
import {TextInput, View} from "react-native";

const DisplayName = (props) => {
  const {
    displayName,
    setDisplayName
  } = props;

  return (
    <View style={styles.inputContainer}>
      <View style={styles.inputInnerContainer}>
        <TextInput
          style={styles.inputText}
          placeholder={'Display name'}
          ref={input => {
          this.displayNameTextInput = input;
          }}
          onSubmitEditing={() => {
          this.passwordTextInput.focus();
          }}
          blurOnSubmit={false}
          value={displayName}
          autoCapitalize = 'none'
          onChangeText={(text) => setDisplayName(text)}
          placeholderTextColor={'#FFFFFF'}
          clearButtonMode="while-editing"
          returnKeyType={"next"}
        >
        </TextInput>

      </View>
      <View style={styles.inputDividerLine} />
    </View>
  )
};

DisplayName.propTypes = {
  displayName: PropTypes.string,
  setDisplayName: PropTypes.func
};

export default DisplayName;
