import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

class HomePageBanner extends Component {
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
                      to={`/video/${video.admin_video_id}`}
                      className="btn btn-grey"
                    >
                      <i className="fas fa-play mr-2" />
                      play
                    </Link>
                    <Link to="#" className="btn btn-grey">
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

export default HomePageBanner;
