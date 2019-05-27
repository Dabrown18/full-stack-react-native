import PropTypes from 'prop-types';
import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import globals from '../../lib/globals';
import {styles} from './styles';

const Button = (props) => {
  const {
    buttonType,
    onButtonPress,
    buttonTitle,
    buttonSize,
    customButtonStyle,
    buttonBackground
  } = props;

  let buttonStyle = [];
  let buttonTitleStyle = [];

  if (buttonType === globals.BUTTON_TYPE.confirmation) {
    buttonStyle.push(styles.buttonStyle);
    buttonTitleStyle.push(styles.buttonTitle);
  } else if (buttonType === globals.BUTTON_TYPE.approved) {
    buttonStyle.push(styles.buttonStyle);
    buttonTitleStyle.push(styles.buttonTitle);
  } else {
    buttonStyle.push(styles.buttonStyle);
    buttonTitleStyle.push(styles.buttonTitle);
  }

  if(buttonSize) {
    buttonStyle.push({width: buttonSize.width, height: buttonSize.height })
  }

  if (customButtonStyle) {
    buttonStyle.push(customButtonStyle)
  }

  if(buttonBackground) {
    buttonStyle.push({ backgroundColor: buttonBackground})
  }

  return (
    <TouchableOpacity style={buttonStyle} onPress={onButtonPress}>
      <Text style={buttonTitleStyle}>{buttonTitle}</Text>
    </TouchableOpacity>
  )
};

Button.proptypes = {
  buttonType: PropTypes.number.isRequired,
  onButtonPress: PropTypes.func.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  buttonSize: PropTypes.object.isRequired,
  customButtonStyle: PropTypes.object
};

export default Button;