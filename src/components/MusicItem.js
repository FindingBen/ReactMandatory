import React from 'react';
import PropTypes from 'prop-types';



const MusicItem = props=>{
    console.log(props);
    const{id,name,band,genre}=props;
    return(
        <div id={`card-${id}`} className="card">
            <div className="card-body">        
                <div className="card-header">{name + " " + " by " + band}</div>
                <div className="meta">{genre}</div>
                <a href="#" class="ui blue button">Play</a>
                <span className="index">{id}</span>
            </div>
        </div>
    );
};

MusicItem.propTypes={
    property:PropTypes.object.isRequired
}


export default MusicItem;
