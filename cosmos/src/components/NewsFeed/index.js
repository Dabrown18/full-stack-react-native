import React, {Component} from 'react';
import {ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import Article from '../Article';
import NewsModal from '../NewsModal';
import {articles} from "../../lib/data";
import {styles} from './styles';
import * as globals from '../../lib/globals';
import {myKey} from "../../lib/myKey";
import {reshapeNewsData} from "../../lib/functions";

export default class NewsFeed extends Component {
  state = {
    isNewsModalVisible: false,
    isModalUrl: undefined,
    dataSource: null,
    isLoading: true
  };

  componentDidMount(){
    fetch(`https://api.nytimes.com/svc/topstories/v2/science.json?api-key=${myKey}`)
      .then(response => response.json())
      .then(res => {
        this.setState({
          isLoading: false,
          dataSource: reshapeNewsData(res.results)
        })
      })
  }

  onModalOpen = (url) => {
    this.setState({
      isNewsModalVisible: true,
      isModalUrl: url
    })
  };

  onModalClose = () => {
    this.setState({
      isNewsModalVisible: false,
      isModalUrl: undefined
    })
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={globals.COMMON_STYLES.pageContainer}>
          <ActivityIndicator />
        </View>
      )
    }
    return (
      <View style={globals.COMMON_STYLES.pageContainer}>
        {
          this.state.dataSource.map((article, index) => {
            return (
              <Article
                key={index}
                date={article.date}
                imageUrl={article.imageUrl}
                title={article.title}
                description={article.description}
                author={article.author}
                index={index}
                onPress={() => this.onModalOpen(article.url)}
                style={styles.newsItem}
              />
            )
          })
        }
        <NewsModal
          isNewsModalVisible={this.state.isNewsModalVisible}
          onModalClose={this.onModalClose}
          isModalUrl={this.state.isModalUrl}
        />
      </View>
    )
  }
};
