import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Button from './src/components/Button';
import MyModal from './src/components/MyModal';
import globals from './src/lib/globals';

export default class App extends Component<Props> {
  state = {
    visibility: false
  };

  title = '';
  message = '';

  setModalConfirmation = () => {
    this.setState({visibility: !this.state.visibility})

    if (globals.BUTTON_TYPE.confirmation) {
      this.title = 'Are you sure?';
      this.message =  'There is no going back!';
    }
  };

  setModalApproved = () => {
    this.setState({visibility: !this.state.visibility});

    if (globals.BUTTON_TYPE.confirmation) {
      this.title = 'Approved';
      this.message =  'Check your email for confirmation';
    }
  };

  setModalInput = () => {
    this.setState({visibility: !this.state.visibility});

    if (globals.BUTTON_TYPE.confirmation) {
      this.title = 'Add your name';
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          buttonType={globals.BUTTON_TYPE.confirmation}
          onButtonPress={this.setModalConfirmation}
          buttonTitle={globals.BUTTON_TITLE.confirmation}
          buttonSize={{ width: '75%', height: '10%'}}
          customButtonStyle={{ marginTop: 10, borderRadius: 50}}
        />
        <Button
          buttonType={globals.BUTTON_TYPE.approved}
          onButtonPress={this.setModalApproved}
          buttonTitle={globals.BUTTON_TITLE.approved}
          buttonSize={{ width: '60%', height: '10%'}}
          customButtonStyle={{ marginTop: 10, borderRadius: 50}}
        />
        <Button
          buttonType={globals.BUTTON_TYPE.input}
          onButtonPress={this.setModalInput}
          buttonTitle={globals.BUTTON_TITLE.input}
          buttonSize={{ width: '45%', height: '10%'}}
          customButtonStyle={{ marginTop: 10, borderRadius: 50}}
        />
        <MyModal
          modalType={globals.MODAL_TYPE.confirmation}
          title={this.title}
          message={this.message}
          buttonTitle={globals.MODAL_BUTTON_TITLE.okay}
          visibility={this.state.visibility}
          setModalVisible={this.setModalConfirmation}
        />
        <MyModal
          modalType={globals.MODAL_TYPE.approved}
          title={this.title}
          message={this.message}
          buttonTitle={globals.MODAL_BUTTON_TITLE.okay}
          visibility={this.state.visibility}
          setModalVisible={this.setModalApproved}
        />
        <MyModal
          modalType={globals.MODAL_TYPE.input}
          title={this.title}
          message={this.message}
          buttonTitle={globals.MODAL_BUTTON_TITLE.okay}
          visibility={this.state.visibility}
          textInput={true}
          setModalVisible={this.setModalInput}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
