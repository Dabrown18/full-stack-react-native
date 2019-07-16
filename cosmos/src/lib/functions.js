import moment from 'moment';

const getMultimediaUrlFormat = (multimedia, format) => {
  // If multimedia does exist return empty string
  if (!multimedia) return '';

  const matchingForm = multimedia.find(media => media.format === format);
  // If matchingForm does exist return empty string
  if(!matchingForm) return '';

  return matchingForm.url
};

export const reshapeNewsData = (news) => {
  return (
    news.newsData.map(({abstract, byline, multimedia, published_date, title, url }) => ({
      description: abstract || '',
      author: byline ? byline.replace('By ', '') : '',
      imageUrl: getMultimediaUrlFormat(multimedia, 'thumbLarge'),
      date: moment(published_date).format('MMM Do YYYY'),
      title,
      url
    }))
  )
};
