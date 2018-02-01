var searchYouTube = ({query, max, key}, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      q: query, 
      maxResults: max, 
      key: key,
      type: 'video',
      part: 'snippet',
      videoEmbeddable: true
    }
  }).done(({items}) => {
      // console.log(`Successful get: ${JSON.stringify(items)}`);
      callback(items);
  })
};

window.searchYouTube = searchYouTube;
