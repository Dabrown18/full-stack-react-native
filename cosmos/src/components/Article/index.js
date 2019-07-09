import React from 'react';
import PropTypes from 'prop-types';
import {View, TouchableOpacity} from 'react-native';
import {styles} from './styles';

import Byline from '../Byline';
import AppText from '../AppText';
import Thumbnail from '../Thumbnail';

const Article = (props) => {
  const {
    style,
    imageUrl,
    title,
    author,
    date,
    description,
    index,
    onPress
  } = props;

  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <View>
        <Thumbnail
          url={imageUrl}
          titleText={title}
          style={styles.thumbnail}
        />
        <View style={styles.content}>
          <Byline
            author={author}
            date={date}
          />
          <AppText style={styles.description}>
            {description}
          </AppText>
        </View>
      </View>
    </TouchableOpacity>
  )
};

Article.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date),
  author: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Article;
