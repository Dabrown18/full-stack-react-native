import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from './styles';
import * as globals from '../../lib/globals';

const Button = (props) => {
  const {
    buttonType,
    buttonOnPress,
    buttonTitle,
    buttonSize,
    customButtonStyle,
    buttonBackground
  } = props;

  let buttonStyle = [];
  let buttonTitleStyle = [];

  if (buttonType === globals.BUTTON_TYPE.loginButton) {
    buttonStyle.push(styles.loginButton);
    buttonTitleStyle.push(styles.loginTitle);
  } else if (buttonType === globals.BUTTON_TYPE.registerButton) {
    buttonStyle.push(styles.registerButton);
    buttonTitleStyle.push(styles.registerTitle);
  } else {
    buttonStyle.push(styles.signOutButton);
    buttonTitleStyle.push(styles.signOutTitle);

    if (buttonSize) {
      buttonStyle.push({borderRadius: buttonSize.height/2})
    }

    if (buttonType === globals.BUTTON_TYPE.signOutButton) {
      buttonStyle.push({marginLeft: 10, marginBottom: 10})
    }
  }

  if (buttonSize) {
    buttonStyle.push({ width: buttonSize.width, height: buttonSize.height })
  }

  if (customButtonStyle) {
    buttonStyle.push(customButtonStyle);
  }

  if (buttonBackground) {
    buttonStyle.push({ backgroundColor: buttonBackground })
  }

  return (
    <TouchableOpacity style={buttonStyle} onPress={buttonOnPress}>
      <Text style={buttonTitleStyle}>
        {buttonTitle}
      </Text>
    </TouchableOpacity>
  )
};

Button.propTypes = {
  buttonType: PropTypes.number,
  buttonSize: PropTypes.object,
  buttonOnPress: PropTypes.func,
  buttonTitle: PropTypes.string,
  customButtonStyle: PropTypes.object,
  buttonBackground: PropTypes.string
};

export default Button;
