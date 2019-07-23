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

  let newsData = news;

  if (searchText && searchText.trim() !== "") {
    let dataAfterSearch = [];
    for (let i = 0; i < newsData.length; i++) {
      let author = newsData[i].author != null ? newsData[i].author.toLowerCase() : "";
      let description = newsData[i].description != null ? newsData[i].description.toLowerCase() : "";
      let title = newsData[i].title != null ? newsData[i].title.toLowerCase() : "";

      let matchAuthor = author.indexOf(searchText.trim().toLowerCase());
      let matchDescription = description.indexOf(searchText.trim().toLowerCase());
      let matchTitle = title.indexOf(searchText.trim().toLowerCase());

      if (matchAuthor !== -1 || matchDescription !== -1 || matchTitle !== -1) {
        dataAfterSearch.push(newsData[i])
      }
    }
    newsData = dataAfterSearch;
  }

  return (
    <View style={globals.COMMON_STYLES.pageContainer}>
      <Search searchText={searchText} setSearchText={setSearchText}/>
      {
        newsData && newsData.length > 0 ? (
          <View>
            <FlatList
              data={newsData}
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
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired
};


export default HomeView;
