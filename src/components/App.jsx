class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: window.exampleVideoData[0], 
      videoList: window.exampleVideoData,
      searchQuery: 'dog'
    };
  }
  componentDidMount() {
    this.props.searchYouTube({query: this.state.searchQuery, max: 5, key: window.YOUTUBE_API_KEY}, this.onSearchSetState.bind(this));
  }

  // componentWillUpdate() {
  //   this.props.searchYouTube({query: this.state.searchQuery, max: 5, key: window.YOUTUBE_API_KEY}, this.onSearchSetState.bind(this));
  // }
  
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
    // console.log('this.state.searchQuery:', this.state.searchQuery)
    // console.log('on search click value:', value)
    // console.log('-----------------------')
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

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
