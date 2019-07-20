import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FlatList} from 'react-native';
import {View} from 'react-native';
import Article from '../../../components/Article';
import NewsModal from '../../../components/NewsModal';
import {styles} from './styles';
import * as globals from '../../../lib/globals';

const HomeView = (props) => {
  const {
    onModalOpen,
    isNewsModalVisible,
    isModalUrl,
    onModalClose,
    news
  } = props;

  return (
    <View style={globals.COMMON_STYLES.pageContainer}>
      <FlatList
        data={news}
        showVerticalScrollIndicator={false}
        keyExtractor={item => item.url}
        renderItem={({item, ...rest}) => {
          const index = parseInt(rest[1], 10);
          return (
            <Article
              key={index}
              date={item.date}
              imageUrl={item.imageUrl}
              title={item.title}
              description={item.description}
              author={item.author}
              index={index}
              onPress={() => onModalOpen(item.url)}
              style={styles.newsItem}
            />
          )
        }}
      />

      <NewsModal
        isNewsModalVisible={isNewsModalVisible}
        onModalClose={onModalClose}
        isModalUrl={isModalUrl}
      />
    </View>
  )
};

HomeView.propTypes = {
  news: PropTypes.array,
  onModalOpen: PropTypes.func,
  isNewsModalVisible: PropTypes.bool,
  isModalUrl: PropTypes.string,
  onModalClose: PropTypes.func
};


export default HomeView;
