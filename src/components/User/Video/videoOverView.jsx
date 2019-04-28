import React, { Component } from "react";
import { Link } from "react-router-dom";
const DATE_OPTIONS = {
  year: "numeric",
  month: "short"
};

const VideoOverView = data => {
  console.log("Props", data.activeClass);
  const videoDetailsFirst = data.videoDetailsFirst;
  return (
    <div className="slider-topbottom-spacing">
      <div className="overview-content">
        {console.log("Render Overview ")}
        <h1 className="banner_video_title">{videoDetailsFirst.title}</h1>
        <h4 className="banner_video_details">
          <span className="green-clr">
            {new Date(videoDetailsFirst.publish_time).toLocaleDateString(
              "en-US",
              DATE_OPTIONS
            )}
          </span>
          <span className="grey-box">
            {videoDetailsFirst.age}
            <i className="fas fa-plus small" /> /{" "}
            {videoDetailsFirst.watch_count} <span className="small">Views</span>
          </span>
          <span>{videoDetailsFirst.duration}</span>
          <span className="small yellow-clr ml-1">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="far fa-star" />
            <i className="far fa-star" />
          </span>
        </h4>
        <h4 className="banner_video_details">
          <span>
            <i className="far fa-thumbs-up" />
          </span>
          <span className="mr-2">{videoDetailsFirst.likes}</span>
          <span>
            <i className="far fa-thumbs-down" />
          </span>
          <span className="mr-2">40</span>
        </h4>
        <h4 className="slider_video_text">{videoDetailsFirst.description}</h4>
        <div className="banner-btn-sec">
          <Link to="#" className="btn btn-danger btn-right-space br-0">
            <i className="fas fa-play mr-2" />
            play
          </Link>
          <Link to="#" className="btn btn-outline-secondary btn-right-space">
            <i className="fas fa-plus mr-2" />
            my list
          </Link>
          <Link to="#" className="btn express-btn mr-2">
            <i className="far fa-thumbs-up" />
          </Link>
          <Link to="#" className="btn express-btn btn-right-space">
            <i className="far fa-thumbs-down" />
          </Link>
          <Link
            to="#"
            data-toggle="modal"
            data-target="#spam-popup"
            className="btn express-btn btn-right-space"
          >
            <i className="fas fa-info" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VideoOverView;
