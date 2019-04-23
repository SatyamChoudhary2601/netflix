import React, { Component } from "react";
import IconCross from "./../Icons/IconCross";
import { Link } from "react-router-dom";
import "./Content.scss";
import api from "../../../Environment";
import Helper from "../../Helper/helper";
import Slider from "react-slick";
import VideoOverView from "../../User/Video/videoOverView";
import VideoEpisode from "../../User/Video/videoEpisode";
import VideoTrailer from "../../User/Video/videoTrailer";
import VideoMoreLikeThis from "../../User/Video/videoMoreLikeThis";
import VideoDetails from "../../User/Video/videoDetails";
import LoaderComponent from "../../Static/Loader";
const $ = window.$;
const DATE_OPTIONS = {
  year: "numeric",
  month: "short"
};

class Content extends Helper {
  constructor(props) {
    super(props);
  }

  state = {
    videoDetailsFirst: null,
    loadingFirst: true,
    videoDetailsSecond: null,
    loadingSecond: true
  };
  showSliderContent() {
    $(".slider-content").css("display", "block");
  }

  closeSliderContent() {
    $(".slider-content").css("display", "none");
  }

  componentDidMount() {
    // Single video API call.
    // let maindata = { ...this.state.maindata };
    // let errorHandle = 0;
    let inputData = {
      sub_profile_id: localStorage.getItem("active_profile_id"),
      admin_video_id: this.props.movie.admin_video_id
    };
    console.log("input data", inputData);
    this.singleVideoFirst(inputData);

    this.singleVideoSecond(inputData);
  }
  componentWillReceiveProps(props) {
    console.log("Will Mount Called");
    let inputData = {
      sub_profile_id: localStorage.getItem("active_profile_id"),
      admin_video_id: props.movie.admin_video_id
    };
    console.log("Input Data", inputData);
    this.singleVideoFirst(inputData);
    this.singleVideoSecond(inputData);
  }

  // renderOverview = videoDetailsFirst => {
  //   return (
  //     <div>
  //       {console.log("Render Overview ")}
  //       <h1 className="banner_video_title">{videoDetailsFirst.title}</h1>
  //       <h4 className="banner_video_details">
  //         <span className="green-clr">
  //           {new Date(videoDetailsFirst.publish_time).toLocaleDateString(
  //             "en-US",
  //             DATE_OPTIONS
  //           )}
  //         </span>
  //         <span className="grey-box">
  //           {videoDetailsFirst.age}
  //           <i className="fas fa-plus small" /> /{" "}
  //           {videoDetailsFirst.watch_count} <span className="small">Views</span>
  //         </span>
  //         <span>{videoDetailsFirst.duration}</span>
  //         <span className="small yellow-clr ml-1">
  //           <i className="fas fa-star" />
  //           <i className="fas fa-star" />
  //           <i className="fas fa-star" />
  //           <i className="far fa-star" />
  //           <i className="far fa-star" />
  //         </span>
  //       </h4>
  //       <h4 className="banner_video_details">
  //         <span>
  //           <i className="far fa-thumbs-up" />
  //         </span>
  //         <span className="mr-2">{videoDetailsFirst.likes}</span>
  //         <span>
  //           <i className="far fa-thumbs-down" />
  //         </span>
  //         <span className="mr-2">40</span>
  //       </h4>
  //       <h4 className="slider_video_text">{videoDetailsFirst.description}</h4>
  //       <div className="banner-btn-sec">
  //         <Link to="#" className="btn btn-danger btn-right-space br-0">
  //           <i className="fas fa-play mr-2" />
  //           play
  //         </Link>
  //         <Link to="#" className="btn btn-outline-secondary btn-right-space">
  //           <i className="fas fa-plus mr-2" />
  //           my list
  //         </Link>
  //         <Link to="#" className="btn express-btn mr-2">
  //           <i className="far fa-thumbs-up" />
  //         </Link>
  //         <Link to="#" className="btn express-btn btn-right-space">
  //           <i className="far fa-thumbs-down" />
  //         </Link>
  //         <Link
  //           to="#"
  //           data-toggle="modal"
  //           data-target="#spam-popup"
  //           className="btn express-btn btn-right-space"
  //         >
  //           <i className="fas fa-info" />
  //         </Link>
  //       </div>
  //     </div>
  //   );
  // };

  render() {
    const movie = { ...this.props.movie };

    const { loadingFirst, videoDetailsFirst } = this.state;
    return (
      <div className="content">
        <div className="content__background">
          <div className="content__background__shadow" />
          <div
            className="content__background__image"
            style={{ backgroundImage: `url(${movie.default_image})` }}
          />
        </div>
        <div className="content__area">
          <div className="content__area__container">
            {/* <div className="content__title">{movie.title}</div>
        <div className="content__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          et euismod ligula. Morbi mattis pretium eros, ut mollis leo tempus
          eget. Sed in dui ac ipsum feugiat ultricies. Phasellus vestibulum enim
          quis quam congue, non fringilla orci placerat. Praesent sollicitudin
        </div> */}
          </div>
          <div className="slider-content-tabsec">
            <ul className="nav nav-pills" role="tablist">
              <li className="nav-item">
                <a className="nav-link" data-toggle="pill" to={"#overview"}>
                  overview
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="pill" href="#episode">
                  episodes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="pill" href="#trailers">
                  trailers & more
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="pill" href="#more_link">
                  more like this
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="pill" href="#details">
                  details
                </a>
              </li>
            </ul>
          </div>

          <div className="slider-content-tabcontent">
            <div className="tab-content">
              {loadingFirst ? (
                "Loading"
              ) : (
                <VideoOverView videoDetailsFirst={videoDetailsFirst} />
              )}

              <VideoEpisode />

              <VideoTrailer />

              <VideoMoreLikeThis />

              <VideoDetails />
            </div>
          </div>

          <button className="content__close" onClick={this.props.onClose}>
            <IconCross />
          </button>
        </div>
      </div>
    );
  }
}

export default Content;
