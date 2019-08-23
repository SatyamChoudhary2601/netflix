import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Slider from "react-slick";
import Helper from "../Helper/helper";
import api from "../../Environment";
import { withToastManager } from "react-toast-notifications";
import ToastDemo from "../Helper/toaster";

class HomePageBanner extends Helper {
  state = {
    wishlistApiCall: false,
    wishlistResponse: null,
    inputData: {
      sub_profile_id: localStorage.getItem("active_profile_id")
    },
    redirect: false,
    redirectPPV: false,
    redirectPaymentOption: false,
    videoDetailsFirst: null,
    playButtonClicked: false
  };
  componentDidMount() {
    this.setState({ playButtonClicked: false });
  }
  handleWishList = (event, admin_video_id) => {
    event.preventDefault();
    let inputData = {
      ...this.state.inputData,
      admin_video_id: admin_video_id
    };

    api.postMethod("wishlists/operations", inputData).then(response => {
      if (response.data.success === true) {
        ToastDemo(this.props.toastManager, response.data.message, "success");
        this.setState({
          wishlistResponse: response.data,
          wishlistApiCall: true
        });
      } else {
        ToastDemo(
          this.props.toastManager,
          response.data.error_messages,
          "error"
        );
      }
    });
  };

  handlePlayVideo = async (event, admin_video_id) => {
    event.preventDefault();

    this.setState({ playButtonClicked: true });
    let inputData = {
      ...this.state.inputData,
      admin_video_id: admin_video_id
    };

    await this.onlySingleVideoFirst(inputData);

    this.redirectStatus(this.state.videoDetailsFirst);
  };

  render() {
    var bannerSlider = {
      dots: false,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      autoplay: false
    };
    const { banner } = this.props;

    if (this.state.playButtonClicked) {
      const returnToVideo = this.renderRedirectPage(
        this.state.videoDetailsFirst
      );

      if (returnToVideo != null) {
        return returnToVideo;
      }
    }

    return (
      <Slider {...bannerSlider} className="banner-slider slider">
        {banner.data.map(video => (
          <div className="banner-sec" key={video.admin_video_id}>
            <div className="row m-0">
              <div className="col-3 col-md-3 col-lg-3 col-xl-3 p-0">
                <div className="banner-home home-left" />
              </div>
              <div className="col-9 col-md-9 col-lg-9 col-xl-9 p-0">
                <div className="banner-home relative">
                  <img
                    className="banner_right_img"
                    src={video.default_image}
                    srcSet={
                      video.default_image +
                      " 1x," +
                      video.default_image +
                      " 1.5x," +
                      video.default_image +
                      " 2x"
                    }
                    alt="banner img"
                  />
                  <div className="banner_right_overlay" />
                </div>
              </div>
            </div>
            <div className="banner-content">
              <div className="banner-text-centeralign">
                <div>
                  <h1 className="banner_video_title">{video.title}</h1>
                  <h4 className="banner_video_text">{video.description}</h4>
                  <div className="banner-btn-sec">
                    <Link
                      to="#"
                      onClick={event =>
                        this.handlePlayVideo(event, video.admin_video_id)
                      }
                      className="btn btn-grey"
                    >
                      <i className="fas fa-play mr-2" />
                      play
                    </Link>
                    <Link
                      to="#"
                      className="btn btn-grey"
                      onClick={event =>
                        this.handleWishList(event, video.admin_video_id)
                      }
                      value={video.admin_video_id}
                    >
                      <i className="fas fa-plus mr-2" />
                      my list
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    );
  }
}

export default withToastManager(HomePageBanner);
