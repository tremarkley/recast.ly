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
  query: 'cats',
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

function videoPlayerApp(state = {}, action) {
  return {
    query: searchQuery(state.query, action),
    videos: videos(state.videos, action)
  }
}

// function videoPlayerApp(state = initialState, action) {
//   switch (action.type) {
//     case UPDATE_VIDEOLIST:
//       return Object.assign({}, state, {
//         videos: action.videoArr
//       })
//     case SEARCH_YOUTUBE:
//       return Object.assign({}, state, {
//         query: action.query
//       })
//     case UPDATE_VIDEO:
//       return Object.assign({}, state, {
//         videos: state.videos.map((video, index) =>{
//           if (video.id === action.index && !video.selected) {
//             return Object.assign({}, video, {
//               selected: !video.selected
//             })
//           } else {
//             return Object.assign({}, video, {
//               selected: video.selected
//             })
//           }
//           return video;
//         })
//       })
//     default:
//       return state
//   }
// }