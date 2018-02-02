import React from 'react';
import VideoListEntry from './VideoListEntry.jsx';

var VideoList = (props) => (
  <div className="video-list">
    {props.videos.map((video) =>
      <VideoListEntry onClick={props.onClick.bind(null, video)} key={video.id.videoId} video={video}/>
    )}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

export default VideoList;
