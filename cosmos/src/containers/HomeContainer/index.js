import {compose, hoistStatics, withHandlers, withState, lifecycle, withProps} from 'recompose';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {loadNews} from "../../redux/actions/newsActions";
import {reshapeNewsData} from "../../lib/functions";
import HomeView from './HomeView';

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

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withState('isNewsModalVisible', 'setIsNewsModalVisible', false),
  withState('isModalUrl', 'setIsModalUrl', undefined),
  withState('isNewsModalVisibleSuccessful', 'setIsNewsModalVisibleSuccessful', false),
  withProps(props => ({
    news: props.news
  })),
  withHandlers({
    onModalOpen: props => (url) => {
      props.setIsNewsModalVisible(true);
      props.setIsModalUrl(url)
    },
    onModalClose: props => () => {
      props.setIsNewsModalVisible(false);
      props.setIsModalUrl(undefined);
    }
  }),
  lifecycle({
    componentDidMount(){
      this.props.loadNews();
    }
  })
);

export default hoistStatics(enhancer)(HomeView);
