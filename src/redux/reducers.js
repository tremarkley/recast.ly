import { combineReducers } from 'redux';
import {
  UPDATE_VIDEOLIST
} from './actions';

{
  query: 'search query'
  videos: [
    {
      id: '1',
      data: 'return from the api',
      selected: false
    }
  ]
}

const initialState = {
  searchQuery: 'cats',
  videos: []
}

function videos(state = [], action) {
  switch (action.type) {
    case UPDATE_VIDEOLIST:
      return action.videoArr
    case SELECT_VIDEO:
      return Object.assign({}, state, {
        videos: state.map((video, index) =>{
          if (video.id === action.index && !video.selected) {
            return Object.assign({}, video, {
              selected: !video.selected
            })
          } else {
            return Object.assign({}, video, {
              selected: video.selected
            })
          }
          return video;
        })
      })
    default:
      return state
  }
}

function searchQuery(state = 'Cats', action) {
  switch (action.type) {
    case SEARCH_YOUTUBE:
      return action.query
    default:
      return state;
  }
}

const videoPlayerApp = combineReducers({
  searchQuery,
  videos
})

export default videoPlayerApp