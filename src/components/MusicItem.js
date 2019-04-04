import React from 'react';

const MusicItem = props=>{
    const{id}=props
    return(
        <div id={`card-${id}`} className="card">
            <div className="card-body">
            
                <div className="card-header">{props.theSong.name + " " + " by " + props.theSong.band}</div>
                <div className="meta">{props.theSong.genre}</div>
                <a href="#" class="ui blue button">Play</a>
                <span className="index">{props.theSong.id+1}</span>
            </div>
        </div>
    );
};

export default MusicItem;
