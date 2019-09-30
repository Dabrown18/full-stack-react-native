import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import { connect } from 'react-redux'
import globals from "../../lib/globals"
import { images, styles} from "./styles";


const ProfileImage = ({

}) => (
  <View style={styles.profileImageContainer}>
    <View style={styles.profileImageBackground}>
    	<Image style={styles.profileImage} source={images.profileImage}></Image>
    </View>
  </View>
);

ProfileImage.propTypes = {
};

export default ProfileImage;
