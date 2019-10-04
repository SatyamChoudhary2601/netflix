import React, { Component } from "react";

import { Link } from "react-router-dom";

import ReactPlayer from "react-player";

import Helper from "../../Helper/helper";

import ContentLoader from "../../Static/contentLoader";

class VideoComponent extends Helper {
  state = {
    loadingFirst: true,
    videoDetailsFirst: null
  };
  componentDidMount() {
    if (this.props.location.state) {
      this.setState({ loadingFirst: false });
      console.log("This props", this.props.location.state);
    } else {
      window.location = "/home";
    }
  }
  render() {
    const { loadingFirst } = this.state;
    let mainVideo;
    let videoTitle;
    if (loadingFirst) {
      return <ContentLoader />;
    } else {
      if (this.props.location.state.videoFrom != undefined) {
        mainVideo = this.props.location.state.videoDetailsFirst.resolutions
          .original;
        videoTitle = this.props.location.state.videoDetailsFirst.name;
      } else {
        mainVideo = this.props.location.state.videoDetailsFirst.main_video;
        videoTitle = this.props.location.state.videoDetailsFirst.title;
      }
      // const { videoDetailsFirst } = this.props.location.state;
      return (
        <div>
          <div className="single-video">
            <ReactPlayer
              url={mainVideo}
              controls={true}
              width="100%"
              height="100vh"
              playing={true}
              config={{
                file: {
                  attributes: {
                    controlsList: "nodownload"
                  }
                }
              }}
            />
            <div className="back-arrowsec">
              <Link to="/home">
                <img
                  src={window.location.origin + "/assets/img/left-arrow.png"}
                  alt="arrow"
                />
                <span className="txt-overflow capitalize ml-3">
                  {videoTitle}
                </span>
              </Link>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default VideoComponent;
