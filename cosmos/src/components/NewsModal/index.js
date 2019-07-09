import React from 'react';
import {Modal, TouchableOpacity, View} from 'react-native';
import {WebView} from "react-native-webview";
import PropTypes from 'prop-types';
import SmallText from '../SmallText';
import {styles} from './styles';

const NewsModal = (props) => {
  const {
    isNewsModalVisible,
    onModalClose,
    isModalUrl
  } = props;

  return (
    <Modal
      animationType="slide"
      transparent={false}
      onRequestClose={() => onModalClose}
      visible={isNewsModalVisible}
    >
      <View style={styles.modalContent}>
        <TouchableOpacity
          onPress={onModalClose}
          style={styles.closeButton}
        >
          <SmallText>Close</SmallText>
        </TouchableOpacity>
        <WebView
          source={{ uri: isModalUrl}}
        />
      </View>
    </Modal>
  )
};

NewsModal.propTypes = {
  isNewsModalVisible: PropTypes.bool.isRequired,
  onModalClose: PropTypes.func.isRequired,
  isModalUrl: PropTypes.string.isRequired
};

export default NewsModal;
