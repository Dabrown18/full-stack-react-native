import { StyleSheet } from 'react-native';
import globals from '../../lib/globals';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(244,244,246, 0.5)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  form: {
    backgroundColor: globals.COLORS.white,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '22%',
    width: '80%'
  },
  titleContainer: {
    height: '65%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 8,
    color: globals.COLORS.darkGrey
  },
  message: {
    fontSize: 24,
    fontWeight: '300',
    color: globals.COLORS.darkGrey,
    textAlign: 'center'
  },
  confirmationButton: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  inputButton: {
    width: '100%',
    height: '100%',
    backgroundColor: globals.COLORS.blue
  },
  buttonStyle: {
    width: '100%',
    height: '100%',
    backgroundColor: globals.COLORS.blue,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 20,
    color: globals.COLORS.white
  }
});