import { StyleSheet } from "react-native";
import globals from "../../lib/globals"

const images = {
  backButtonImage: require("../../assets/images/header/back-icn.png"),
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: globals.COLORS.PRIMARY
  },
  leftIconContainer:{
    marginTop:0,
    paddingLeft: globals.SCREEN_SIZE.width <= 320 ? 8 : 15,
    paddingRight:globals.SCREEN_SIZE.width <= 320 ? 8 : 15,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    height : "100%",
    left: 0
  },
  headerTitleContainer: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    height : "100%",
  },
  headerTitleText: {
    textAlign: "center",
    color: 'white',
    fontSize: 20
  }
});

export { images, styles  };
