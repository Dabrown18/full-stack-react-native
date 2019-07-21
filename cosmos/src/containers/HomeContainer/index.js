import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import HomeView from './HomeView';
import {bindActionCreators} from "redux";
import {reshapeNewsData} from "../../lib/functions";
import {loadNews} from "../../redux/actions/newsActions";

const HomeScreen = (props) => {
  console.log('Here are our props: ', props);

  // State variables
  const [isNewsModalVisible, setIsNewsModalVisible] = useState(false);
  const [isModalUrl, setIsModalUrl] = useState(undefined);

  // Mounted
  useEffect(() => handleComponentMounted(), []);

  const handleComponentMounted = () => {
    props.loadNews();
  };

  const onModalOpen = (url) => {
    setIsNewsModalVisible(true);
    setIsModalUrl(url);
  };

  const onModalClose = () => {
    setIsNewsModalVisible(false);
    setIsModalUrl(undefined);
  };

  return (
    <HomeView
      onModalOpen={onModalOpen}
      isNewsModalVisible={isNewsModalVisible}
      isModalUrl={isModalUrl}
      onModalClose={onModalClose}
      news={props.news}
    />
  )
};

const mapStateToProps = (state) => ({
  news: reshapeNewsData(state.news)
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    loadNews
  }, dispatch)
);

const homeScreenWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);

export default homeScreenWithRedux;
