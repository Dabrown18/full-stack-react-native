import React from 'react';
import PropTypes from 'prop-types';
import { View} from 'react-native';
import globals from "../../lib/globals"
import { styles } from "./styles";
import Header from "../../components/Header";
import ProfileImage from "./ProfileImage";
import Button from "../../components/Button";

const ProfileView = (props) => {
  console.log('Props: ', props);
const {
  userData,
  onSignOutButtonPress
} = props;

 return (
   <View style={styles.screenMain}>
    <Header
      navigation={props.navigation}
      headerTitle={userData.displayName}
      customHeaderStyle={{
        height: globals.SCREEN_SIZE.height / 11,
        alignItems: "center",
        backgroundColor: globals.COLORS.PRIMARY
      }}
    />
      <View style={styles.screenContainer}>
        <View
          style={styles.profileScrollContainer}
        >
          <ProfileImage />
          <Button
            buttonType={globals.BUTTON_TYPE.signOutButton}
            buttonSize={{width: 100, height:30}}
            buttonBackground={globals.COLORS.ACCENT}
            buttonOnPress={onSignOutButtonPress}
            buttonTitle={globals.BUTTON_TITLE.signOutTitle} />
        </View>
      </View>
   </View>
 );

};

ProfileView.propTypes = {
  onSignOutButtonPress: PropTypes.func,
  userData: PropTypes.object
};


export default ProfileView;
