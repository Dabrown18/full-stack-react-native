import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StatusBar, View, Text, Image, TouchableOpacity, Keyboard} from 'react-native';
import globals from "../../lib/globals";
import { images, styles } from "./styles";
import { useNavigation } from "react-navigation-hooks";
const Header = (props) => {
  const { navigate, goBack } = useNavigation();
  const {
    isBackButtonRequired,
    isLogoRequired,
    headerTitle,
    customHeaderStyle
  } = props;

  const onLeftMenuPress = () => {
    Keyboard.dismiss();
    if(isBackButtonRequired)
      goBack();
  };

  let headerStyle = styles.headerContainer;
  if(customHeaderStyle)
    headerStyle = customHeaderStyle;

  return (
    <View style={headerStyle}>
      <StatusBar
        backgroundColor={globals.COLORS.PRIMARY}
        barStyle="light-content"
      />

      {isBackButtonRequired ? (
        <TouchableOpacity style={styles.leftIconContainer} onPress={onLeftMenuPress} >
          <Image
            resizeMode="contain"
            source={images.backButtonImage}
            style={{ alignItems: "stretch", marginTop: 50}} />
        </TouchableOpacity>
      ) : null }
      <View style={styles.headerTitleContainer}>
        {
          isLogoRequired ? (
            <Image source={images.logo} resizeMode="contain" style={{alignItems: "stretch"}}/>
          ) : (
            <Text style={styles.headerTitleText}>{headerTitle}</Text>
          )
        }
      </View>
    </View>
  );
};

Header.propTypes = {
  isBackButtonRequired: PropTypes.bool,
  isLogoRequired: PropTypes.bool,
  headerTitle: PropTypes.string,
  isFilterRequired: PropTypes.bool,
  filterTitle: PropTypes.string,
  onFilterPress: PropTypes.func,
  customHeaderStyle: PropTypes.object
};

export default Header;
