import {StyleSheet} from 'react-native';
import * as globals from '../../lib/globals';

const images = {

};

const styles = StyleSheet.create({
  input: {
    height: 35,
    color: globals.TEXT_COLOR,
    paddingHorizontal: 5
  },
  search: {
    borderColor: globals.MUTED_COLOR,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 5
  }
});

export {images, styles};
