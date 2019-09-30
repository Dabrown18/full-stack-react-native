import { StyleSheet } from "react-native";
import * as globals from "../../lib/globals"

const images = {
  profileImage : require("../../assets/images/login/globe-logo.png")
};

const styles = StyleSheet.create({
  screenMain:{
    flex:1,
    backgroundColor: globals.COLORS.PRIMARY
  },
  screenContainer:{
    flex:1,
    flexDirection: 'column',
    backgroundColor: 'transparent',
    alignItems: 'center'
  },
  profileScrollContainer:{
    flex: 1,
    height:'100%',
    width: '100%',
    marginBottom: 0,
    flexDirection: 'column'
  },
  profileImageContainer:{
    width: '100%',
    height:'45%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  profileImageBackground:{
    width: globals.SCREEN_SIZE.width / 2.2,
    height: globals.SCREEN_SIZE.width / 2.2,
    borderRadius: globals.SCREEN_SIZE.width / 2,
     alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage:{
    width: globals.SCREEN_SIZE.width / 2.2,
    height: globals.SCREEN_SIZE.width / 2.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileDataContainer:{
    marginLeft: 15,
    marginRight: 15,
    height: '25%',
    flexDirection: 'column'
  }
});

export { images, styles  };
