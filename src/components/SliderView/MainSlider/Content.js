import React, { Component } from "react";
import IconCross from "./../Icons/IconCross";
import "./Content.scss";
import Helper from "../../Helper/helper";
import VideoOverView from "../../User/Video/videoOverView";
import VideoEpisode from "../../User/Video/videoEpisode";
import VideoTrailer from "../../User/Video/videoTrailer";
import VideoMoreLikeThis from "../../User/Video/videoMoreLikeThis";
import VideoDetails from "../../User/Video/videoDetails";
import ContentLoader from "../../Static/contentLoader";
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
    loadingSecond: true,
    suggestion: null,
    loadingSuggestion: true
  };
  showSliderContent() {
    $(".slider-content").css("display", "block");
  }

  closeSliderContent() {
    $(".slider-content").css("display", "none");
  }

  componentDidMount() {
    console.log("did mount");
    // Single video API call.
    // let maindata = { ...this.state.maindata };
    // let errorHandle = 0;
    let inputData = {
      sub_profile_id: localStorage.getItem("active_profile_id"),
      admin_video_id: this.props.movie.admin_video_id,
      skip: 0
    };
    console.log("input data", inputData);
    this.singleVideoFirst(inputData);

    this.singleVideoSecond(inputData);

    this.suggestion(inputData);
  }

  componentWillReceiveProps(props) {
    console.log("Will Mount Called");
    // this.forceUpdate();
    let inputData = {
      sub_profile_id: localStorage.getItem("active_profile_id"),
      admin_video_id: props.movie.admin_video_id
    };
    console.log("Input Data", inputData);
    this.singleVideoFirst(inputData);
    this.singleVideoSecond(inputData);
  }

  render() {
    const movie = { ...this.props.movie };

    const {
      loadingFirst,
      videoDetailsFirst,
      videoDetailsSecond,
      loadingSecond,
      loadingSuggestion,
      suggestion
    } = this.state;
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
                <a className="nav-link" data-toggle="pill" href="#overview">
                  overview
                </a>
              </li>
              {loadingSecond
                ? ""
                : videoDetailsSecond.is_series && (
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="pill"
                        href="#episode"
                      >
                        episodes
                      </a>
                    </li>
                  )}

              {loadingSecond
                ? ""
                : videoDetailsSecond.trailer_section.length && (
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="pill"
                        href="#trailers"
                      >
                        Trailer & More
                      </a>
                    </li>
                  )}

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
                <ContentLoader />
              ) : (
                <VideoOverView
                  videoDetailsFirst={videoDetailsFirst}
                  activeClass="active"
                />
              )}

              {loadingSecond ? (
                "loading"
              ) : (
                <div id="episode" className="tab-pane fade">
                  <VideoEpisode
                    genreVideos={videoDetailsSecond.genre_videos}
                    genre={videoDetailsSecond.genres}
                  />
                </div>
              )}

              {loadingSecond ? (
                "loading"
              ) : (
                <div id="trailers" className="tab-pane fade">
                  <VideoTrailer trailer={videoDetailsSecond.trailer_section} />
                </div>
              )}

              <div id="more_link" className="tab-pane fade">
                {loadingSuggestion ? (
                  "Loading"
                ) : (
                  <VideoMoreLikeThis suggestion={suggestion} />
                )}
              </div>

              <div id="details" className="tab-pane fade">
                <VideoDetails />
              </div>
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
