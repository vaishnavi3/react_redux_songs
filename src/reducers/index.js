import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    {title: ' No scrubs ', duration: '4:04'},
    {title: ' song 2 ', duration: '1:04'},
    {title: ' song 3 ', duration: '6:01'},
    {title: ' song 4 ', duration: '2:09'}
  ];
};


const selectedSongReducer = ( selectedSong=null, action) => {
  if (action.type == 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
