import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App.jsx';
import searchYouTube from './lib/searchYouTube.js'

// TODO: Render the `App` component to the DOM
ReactDOM.render(<App searchYouTube={searchYouTube} videos={[]}/>, document.getElementById('app'));
