import React, {Component} from 'react';

import {Link} from 'react-router-dom';

import JWPlayer from 'react-jwplayer';

class VideoComponent extends Component{
    render(){
        return(
            <div>
                <JWPlayer videoId="http://streamtube.streamhash.com/uploads/videos/b7c02b4382db1ed499eed77601eb5d56294d83b4.mp4" />
                {/* file */}
            </div>
        )
    }
}

export default VideoComponent;

