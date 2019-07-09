import React from 'react';
import PropTypes from 'prop-types';
import {ImageBackground, View} from 'react-native';
import {styles} from './styles';
import Title from '../Title';
import * as globals from '../../lib/globals';

const Thumbnail = ({url, titleText, style}) => {
  const imageStyling = {
    backgroundColor: `${globals.COLORS.PRIMARY}77`
  };

  const TitleComponent = <Title style={styles.title}>{titleText}</Title>;

  return (
    <View style={[styles.container, style]}>
      {
        url.length > 0 ? (
          <ImageBackground
            style={[styles.image, imageStyling]}
            source={{
              uri: url
            }}
          >
            {TitleComponent}
          </ImageBackground>
        ) : (
          <View
            style={[styles.image, imageStyling]}
          >
            {TitleComponent}
          </View>
        )
      }
    </View>
  )
};

Thumbnail.propTypes = {
  url: PropTypes.string.isRequired,
  titleText: PropTypes.string.isRequired
};

export default Thumbnail;
