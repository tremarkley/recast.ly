import React from 'react';
import Search from './Search.jsx';
import VideoList from './VideoList.jsx';
import VideoPlayer from './VideoPlayer.jsx';
import YOUTUBE_API_KEY from '../config/youtube.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: null, 
      videoList: [],
      searchQuery: 'dog'
    };
  }
  componentDidMount() {
    this.props.searchYouTube({query: this.state.searchQuery, max: 5, key: YOUTUBE_API_KEY}, this.onSearchSetState.bind(this));
  }
  
  onSearchSetState(videos) {
    this.setState({
      currentVideo: videos[0],
      videoList: videos
    });
  }

  onVideoEntryClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  onSearchClick(value) {
    console.log('on search click value:', value);
    this.setState({
      searchQuery: value
    }, () => {
      this.props.searchYouTube({
        query: this.state.searchQuery, max: 5, key: window.YOUTUBE_API_KEY
      }, this.onSearchSetState.bind(this));
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search onSearchEvent={this.onSearchClick.bind(this)} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            <VideoList onClick={this.onVideoEntryClick.bind(this)} videos={this.state.videoList}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
