import React from 'react';
import MusicItem from './MusicItem';


const MusicList = props => {
  const songs = props
    .songs
    .filter(song => {
      return (song.name + song.band)
        
    })
    .map(song => {
      return <MusicItem key={song.name} theSong={song} />;
    });

  return(
    <div>
      
     <div className="d-flex justify-content-center">     
        {songs}         
      </div>
    </div>
  );
};

export default MusicList
