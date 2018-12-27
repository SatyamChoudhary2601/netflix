import React, {Component} from 'react';

// import {Link} from 'react-router-dom';

// import JWPlayer from 'react-jwplayer'; 
import ReactJWPlayer from 'react-jw-player';     

class VideoComponent extends Component{
    render(){
        return(
            <div>
                {/* <JWPlayer videoId="M2NCefPoiiKsaVB8nTttvMBxfb1J3Xl7PDXSaw==" /> */}
                <ReactJWPlayer
                    playerId='M2NCefPoiiKsaVB8nTttvMBxfb1J3Xl7PDXSaw=='
                    playerScript='/assets/jwplayer/jwplayer.js'
                    file='http://vjs.zencdn.net/v/oceans.mp4'
                />
            </div>
        )
    }
}

export default VideoComponent;

