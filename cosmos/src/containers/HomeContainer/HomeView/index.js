import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FlatList} from 'react-native';
import {View} from 'react-native';
import Article from '../../../components/Article';
import NewsModal from '../../../components/NewsModal';
import Search from '../../../components/Search';
import {styles} from './styles';
import * as globals from '../../../lib/globals';

const HomeView = (props) => {
  const {
    onModalOpen,
    isNewsModalVisible,
    isModalUrl,
    onModalClose,
    news,
    searchText,
    setSearchText
  } = props;

  let currentNewsData = news;

  if(searchText && searchText.trim() !== '') {
    let dataAfterSearch = [];

    for (let  i = 0; i < currentNewsData.length; i++) {
      let matchAuthor = (currentNewsData[i].author.toLowerCase()).indexOf(searchText.trim().toLowerCase());
      let matchDescription = (currentNewsData[i].description.toLowerCase()).indexOf(searchText.trim().toLowerCase());
      let matchTitle = (currentNewsData[i].title.toLowerCase()).indexOf(searchText.trim().toLowerCase());

      if (matchAuthor !== -1 || matchDescription !== -1 || matchTitle !== -1) {
        dataAfterSearch.push(currentNewsData[i])
      }

      currentNewsData = dataAfterSearch;
    }
  }

  return (
    <View style={globals.COMMON_STYLES.pageContainer}>
      <Search searchText={searchText} setSearchText={setSearchText}/>
      {
        currentNewsData && currentNewsData.length > 0 ? (
          <View>
            <FlatList
              data={currentNewsData}
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
        ) : (
          null
        )
      }
    </View>
  )
};

HomeView.propTypes = {
  news: PropTypes.array,
  onModalOpen: PropTypes.func,
  isNewsModalVisible: PropTypes.bool,
  isModalUrl: PropTypes.string,
  onModalClose: PropTypes.func,
  searchText: PropTypes.string,
  setSearchText: PropTypes.func
};


export default HomeView;
