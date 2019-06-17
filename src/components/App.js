import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';
// this is anamed export, we r exporting a specific fn so we add {} eg:
// import { selectSong } from '../actions';

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
