import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import api from "../../../Environment";
import { withToastManager } from "react-toast-notifications";
import ToastDemo from "../../Helper/toaster";
import Helper from "../../Helper/helper";

class VideoEpisode extends Helper {
  state = {
    data: {
      value: ""
    },
    redirect: false,
    redirectPPV: false,
    redirectPaymentOption: false,
    videoDetailsFirst: null,
    playButtonClicked: false,
    inputData: {
      sub_profile_id: localStorage.getItem("active_profile_id")
    }
  };

  componentDidMount() {
    this.setState({ playButtonClicked: false });
  }

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
    api
      .postMethod("genre_videos", this.state.data)
      .then(response => {
        if (response.data.success) {
          console.log("checking", response);
          this.props.history.push("/view-profiles");
          console.log("Login Success");
        } else {
          // Do nothing
        }
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    console.log("Onchange called");
    console.log("data", this.state.data);
  };

  handlePlayVideo = async (event, admin_video_id) => {
    event.preventDefault();

    let inputData = {
      ...this.state.inputData,
      admin_video_id: admin_video_id
    };

    await this.onlySingleVideoFirst(inputData);

    if (this.state.videoDetailsFirst.success === false) {
      ToastDemo(
        this.props.toastManager,
        this.state.videoDetailsFirst.error_messages,
        "error"
      );
    } else {
      this.redirectStatus(this.state.videoDetailsFirst);
      this.setState({ playButtonClicked: true });
    }
  };

  render() {
    var episodeSlider = {
      dots: false,
      arrow: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: false
    };
    if (this.state.playButtonClicked) {
      const returnToVideo = this.renderRedirectPage(
        this.state.videoDetailsFirst
      );

      if (returnToVideo != null) {
        return returnToVideo;
      }
    }
    const { genreVideos, genres } = this.props;

    return (
      <div className="slider-topbottom-spacing pl-0 pr-0 slider-overlay">
        <div className="pr-4per pl-4per">
          <h1 className="banner_video_title">Episode</h1>
          <form>
            <select
              className="form-control mw-200 mb-3"
              onChange={this.handleChange}
              name="genre_id"
              value={this.state.data.value}
            >
              {genres.map(genre => (
                <option
                  key={genre.genre_id}
                  value={genre.genre_id}
                  name="genre_id"
                >
                  {genre.genre_name}
                </option>
              ))}
            </select>
          </form>
        </div>
        <div>
          <Slider {...episodeSlider} className="episode-slider slider">
            {genreVideos.map(video => (
              <div key={video.admin_video_id}>
                <div className="relative">
                  <img
                    className="trailers-img placeholder"
                    alt="episode-img"
                    src={video.default_image}
                    data-src="assets/img/thumb1.jpg"
                    srcSet={
                      video.default_image +
                      " 1x," +
                      video.default_image +
                      " 1.5x," +
                      video.default_image +
                      " 2x"
                    }
                    data-srcset="assets/img/thumb1.jpg 1x,
                      assets/img/thumb1.jpg 1.5x,
                      assets/img/thumb1.jpg 2x"
                  />
                  <div className="trailers-img-overlay">
                    <Link
                      to="#"
                      onClick={event =>
                        this.handlePlayVideo(event, video.admin_video_id)
                      }
                    >
                      <div className="thumbslider-outline">
                        <i className="fas fa-play" />
                      </div>
                    </Link>
                  </div>
                  <div className="episode-number">1</div>
                </div>
                <div className="episode-content">
                  <div className="row">
                    <div className="col-xl-8 col-lg-8">
                      <h4 className="episode-content-head">{video.title}</h4>
                    </div>
                    <div className="col-xl-4 col-lg-4">
                      <h4 className="episode-content-head text-right">52m</h4>
                    </div>
                  </div>
                  <h4 className="episode-content-desc">{video.description}</h4>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}

export default withToastManager(VideoEpisode);
