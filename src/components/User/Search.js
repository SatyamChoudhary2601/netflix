import React, {Component} from 'react';

import {Link} from 'react-router-dom';


const $ = window.$;

class SearchComponent extends Component{

    constructor(props) {

        super(props);

        this.state = {
            
            isAuthenticated : this.props.data,
            
        };

    }

    componentDidMount() {
        // var scaling = 1.5;

        // var videoWidth = $('.video-sec').outerWidth();
        
        // var videoHeight = Math.round(videoWidth / (16/9));

        // var videoSecHeight = (videoHeight * scaling)

        // console.log(videoWidth, videoHeight, videoSecHeight);

        // Call api function

    }

    mouseOut() {
        console.log("Mouse out!!!");
        this.setState({flipped: false});
    }
      
    mouseOver() {
        console.log("Mouse over!!!");
        this.setState({flipped: true});
    }

    render(){
        return(
            <div>
                <div className="slider-topbottom-spacing">
                    <div className="video-container">
                        
                        <div class="video-sec"  onMouseOut={() => this.mouseOut()} onMouseOver={() => this.mouseOver()}></div>
                        <div class="video-sec">
                           
                        </div>
                        <div class="video-sec"></div>
                        <div class="video-sec"></div>
                        <div class="video-sec"></div>
                        <div class="video-sec"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchComponent;