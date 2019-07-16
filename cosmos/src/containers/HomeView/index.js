import React, {Component} from 'react';
import {ActivityIndicator} from 'react-native';
import {View} from 'react-native';
import Article from '../../components/Article';
import NewsModal from '../../components/NewsModal';
import {styles} from './styles';
import * as globals from '../../lib/globals';
import {myKey} from "../../lib/myKey";
import {reshapeNewsData} from "../../lib/functions";
import {loadNews} from "../../redux/actions/newsActions";
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';


class HomeView extends Component {
  state = {
    isNewsModalVisible: false,
    isModalUrl: undefined
  };

  componentDidMount(){
    this.props.loadNews();
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

    return (
      <View style={globals.COMMON_STYLES.pageContainer}>
        {
          this.props.news.map((article, index) => {
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

const mapStateToProps = (state) => {
  return {
    news: reshapeNewsData(state.news)
  }
};

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    loadNews
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
