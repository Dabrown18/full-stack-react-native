import {StyleSheet} from 'react-native';
import * as globals from '../../lib/globals';

const images = {

};

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: globals.COLORS.BG_COLOR
  },
  closeButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row'
  }
});

export {images, styles};
