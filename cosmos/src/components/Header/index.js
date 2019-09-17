import React from 'react';
import PropTypes from 'prop-types';
import {StatusBar, View, Text, TouchableOpacity, Keyboard, Image} from 'react-native';
import * as globals from  '../../lib/globals';
import {styles, images} from "./styles";
import {useNavigation} from "react-navigation-hooks";

const Header = (props) => {
  const {navigate, goBack} = useNavigation();
  const {
    isBackButtonRequired,
    headerTitle,
    customHeaderStyle
  } = props;

  const onLeftMenuPress = () => {
    Keyboard.dismiss();
    if (isBackButtonRequired) {
      goBack();
    }
  };

  let headerStyle = styles.headerContainer;
  if (customHeaderStyle) {
    headerStyle = customHeaderStyle
  }

  return (
    <View style={headerStyle}>
      <StatusBar
        backgroundColor={globals.COLORS.PRIMARY}
        barStyle='light-content'
      />
      {isBackButtonRequired ? (
        <TouchableOpacity style={styles.leftIconContainer} onPress={onLeftMenuPress}>
          <Image
            resizeMode='contain'
            source={images.backButtonImage}
            style={{alignItems: 'stretch', marginTop: 50}}
          />
        </TouchableOpacity>
      ) : null }
      <Text style={styles.headerTitleText}>{headerTitle}</Text>
    </View>
  )
};

Header.propTypes = {
  isBackButtonRequired: PropTypes.bool,
  headerTitle: PropTypes.string,
  customHeaderStyle: PropTypes.object
};

export default Header;
