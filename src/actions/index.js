// action creator

// instead of a default export we r calling named export.
export const selectSong = song => {
  // return an action
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};
