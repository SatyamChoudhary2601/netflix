import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { withToastManager } from "react-toast-notifications";
import api from "../../../Environment";
import ToastDemo from "../../Helper/toaster";
import Helper from "../../Helper/helper";
const DATE_OPTIONS = {
  year: "numeric",
  month: "short"
};

class VideoOverView extends Helper {
  state = {
    inputData: {
      admin_video_id: this.props.videoDetailsFirst.admin_video_id,
      sub_profile_id: localStorage.getItem("active_profile_id")
    },
    likeApiCall: false,
    dislikeApiCall: false,
    likeReponse: null,
    disLikeReponse: null,
    wishlistApiCall: false,
    wishlistResponse: {
      wishlist_id: null
    },
    redirect: false,
    redirectPPV: false,
    redirectPaymentOption: false
  };
  handleOnClickLike = event => {
    event.preventDefault();

    console.log("onclick like", this.state.inputData);
    api.postMethod("videos/like", this.state.inputData).then(response => {
      console.log("response", response);
      if (response.data.success === true) {
        ToastDemo(this.props.toastManager, "You liked this Video!", "success");
        this.setState({ likeReponse: response.data.data, likeApiCall: true });
      } else {
        ToastDemo(
          this.props.toastManager,
          response.data.error_messages,
          "error"
        );
      }
    });
    console.log("like State", this.state.likeReponse);
  };

  handleOnClickDislike = event => {
    event.preventDefault();

    console.log("onclick dislike", this.state.inputData);
    api.postMethod("videos/dis_like", this.state.inputData).then(response => {
      console.log("response", response);
      if (response.data.success === true) {
        ToastDemo(
          this.props.toastManager,
          "You Disliked this Video!",
          "success"
        );
        this.setState({
          disLikeReponse: response.data.data,
          dislikeApiCall: true
        });
      } else {
        ToastDemo(this.props.toastManager, response.data.error, "error");
      }
    });
  };

  handleWishList = event => {
    event.preventDefault();

    // this.wishlistUpdate(this.state.inputData);

    api
      .postMethod("wishlists/operations", this.state.inputData)
      .then(response => {
        console.log("response", response);
        if (response.data.success === true) {
          ToastDemo(this.props.toastManager, response.data.message, "success");
          this.setState({
            wishlistResponse: response.data,
            wishlistApiCall: true
          });
          console.log(
            "Wishlist data ",
            this.state.wishlistResponse.wishlist_id
          );
        } else {
          ToastDemo(
            this.props.toastManager,
            response.data.error_messages,
            "error"
          );
        }
      });
  };

  handlePlayVideo = event => {
    event.preventDefault();
    if (this.props.videoDetailsFirst.should_display_ppv != 0) {
      if (this.props.videoDetailsFirst.ppv_page_type == 2) {
        this.setState({ redirectPaymentOption: true });
      } else {
        this.setState({ redirectPPV: true });
      }
    } else {
      console.log("Redirect");
      this.setState({ redirect: true });
    }
  };
  render() {
    const { videoDetailsFirst } = this.props;
    const {
      likeReponse,
      likeApiCall,
      disLikeReponse,
      dislikeApiCall,
      wishlistApiCall,
      wishlistResponse,
      redirect,
      redirectPPV,
      redirectPaymentOption
    } = this.state;

    if (redirect) {
      return (
        <Redirect
          to={{
            pathname: `/video/${videoDetailsFirst.admin_video_id}`,
            state: { videoDetailsFirst: videoDetailsFirst }
          }}
        />
      );
    } else if (redirectPPV) {
      return (
        <Redirect
          to={{
            pathname: "/pay-per-view",
            state: {
              videoDetailsFirst: videoDetailsFirst
            }
          }}
        />
      );
    } else if (redirectPaymentOption) {
      return (
        <Redirect
          to={{
            pathname: "/payment-options",
            state: {
              videoDetailsFirst: videoDetailsFirst
            }
          }}
        />
      );
    }
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
              {videoDetailsFirst.watch_count}{" "}
              <span className="small">Views</span>
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
            <span className="mr-2">
              {likeApiCall ? likeReponse.like_count : videoDetailsFirst.likes}
            </span>
            <span>
              <i className="far fa-thumbs-down" />
            </span>
            <span className="mr-2">
              {dislikeApiCall
                ? disLikeReponse.dislike_count
                : videoDetailsFirst.dislikes}
            </span>
          </h4>
          <h4 className="slider_video_text">{videoDetailsFirst.description}</h4>
          <div className="banner-btn-sec">
            <Link
              to="#"
              className="btn btn-danger btn-right-space br-0"
              onClick={this.handlePlayVideo}
            >
              <i className="fas fa-play mr-2" />
              play
            </Link>
            <Link
              to="#"
              onClick={this.handleWishList}
              className="btn btn-outline-secondary btn-right-space"
            >
              {wishlistApiCall ? (
                wishlistResponse.wishlist_id != null ? (
                  <i className="fas fa-check mr-2" />
                ) : (
                  <i className="fas fa-plus mr-2" />
                )
              ) : videoDetailsFirst.wishlist_status ? (
                <i className="fas fa-check mr-2" />
              ) : (
                <i className="fas fa-plus mr-2" />
              )}
              my list
            </Link>
            <Link
              to="#"
              onClick={this.handleOnClickLike}
              className="btn express-btn mr-2"
            >
              <i className="far fa-thumbs-up" />
            </Link>
            <Link
              to="#"
              onClick={event => this.handleOnClickDislike(event)}
              className="btn express-btn btn-right-space"
            >
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
  }
}

export default withToastManager(VideoOverView);
