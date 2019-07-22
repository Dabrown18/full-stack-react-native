import React from 'react';
import PropTypes from 'prop-types';
import {View, TextInput, Keyboard} from 'react-native';
import {styles} from './styles';
import * as globals from '../../lib/globals';

const Search = ({setSearchText, searchText}) => {
  return (
    <View style={styles.search}>
      <TextInput
        style={styles.input}
        placeholder={'Search'}
        placeholderTextColor={globals.MUTED_COLOR}
        ref={input => {
          this.searchTextInput = input
        }}
        blurSubmit={false}
        value={searchText}
        onChangeText={text => setSearchText(text)}
        onSubmitEditing={Keyboard.dismiss}
      />
    </View>
  )
};

Search.propTypes = {
  setSearchText: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired
};

export default Search;
