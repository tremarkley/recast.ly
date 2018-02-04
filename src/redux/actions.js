/*
  action types
*/

const SELECT_VIDEO = 'UPDATE_VIDEO';
const SEARCH_YOUTUBE = 'SEARCH_YOUTUBE';
const UPDATE_VIDEOLIST = 'UPDATE_VIDEOLIST';


export function updateVideo(index) {
 return { type: SELECT_VIDEO, index }
}

export function searchYouTube(query) {
  return { type: SEARCH_YOUTUBE, query }
}

export function updateVideoList(videoArr) {
  return { type: UPDATE_VIDEOLIST, videoArr }
}



