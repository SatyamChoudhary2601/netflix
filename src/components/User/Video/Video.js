import React, { Component } from "react";

import { Link } from "react-router-dom";

import ReactJWPlayer from "react-jw-player";
import Helper from "../../Helper/helper";

class VideoComponent extends Helper {
  state = {
    loadingFirst: true,
    videoDetailsFirst: null
  };
  componentDidMount() {
    let inputData = {
      sub_profile_id: localStorage.getItem("active_profile_id"),
      admin_video_id: this.props.match.params.id
    };
    this.onlySingleVideoFirst(inputData);
  }
  render() {
    const { loadingFirst, videoDetailsFirst } = this.state;
    return (
      <div>
        {loadingFirst ? (
          ""
        ) : (
          <div className="single-video">
            <ReactJWPlayer
              playerId="X6vykLrnos0UM2n1ga4pH+8MqPQO11a5d8wBeccRsfqkd06F"
              playerScript={
                window.location.origin + "/assets/jwplayer/jwplayer.js"
              }
              file={videoDetailsFirst.main_video}
              isAutoPlay={true}
            />
            <div className="back-arrowsec">
              <Link to="/home">
                <img
                  src={window.location.origin + "/assets/img/left-arrow.png"}
                  alt="arrow"
                />
                <span className="txt-overflow capitalize ml-3">
                  {videoDetailsFirst.title}
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default VideoComponent;
