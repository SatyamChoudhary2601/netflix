import React, {Component} from 'react';

import {Link} from 'react-router-dom';

import ReactJWPlayer from 'react-jw-player';     

class VideoComponent extends Component{
    render(){
        return(
            <div>
                <div className="single-video">
                    
                    <ReactJWPlayer
                        playerId='X6vykLrnos0UM2n1ga4pH+8MqPQO11a5d8wBeccRsfqkd06F'
                        playerScript='localhost:3000/assets/jwplayer/jwplayer.js'
                        file='assets/video/sample.mp4'
                    />
                    <div className="back-arrowsec">
                        <Link to="/home">
                            <img src="assets/img/left-arrow.png" alt="arrow" /> 
                            <span className="txt-overflow capitalize ml-3">bird box</span>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoComponent;

