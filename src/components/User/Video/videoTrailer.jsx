import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const VideoTrailer = () => {
  var trailerSlider = {
    dots: false,
    arrow: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
    <div id="trailers" className="tab-pane fade">
      <div className="slider-topbottom-spacing pl-0 pr-0 slider-overlay">
        <div className="pr-4per pl-4per">
          <h1 className="banner_video_title">frozen</h1>
        </div>
        <div>
          <Slider {...trailerSlider} className="trailer-slider slider">
            <div>
              <div className="relative">
                <img
                  className="trailers-img placeholder"
                  alt="episode-img"
                  src="assets/img/placeholder.gif"
                  data-src="assets/img/thumb8.jpg"
                  srcSet="assets/img/placeholder.gif 1x,
                                                                    assets/img/placeholder.gif 1.5x,
                                                                    assets/img/placeholder.gif 2x"
                  data-srcset="assets/img/thumb8.jpg 1x,
                                                                    assets/img/thumb8.jpg 1.5x,
                                                                    assets/img/thumb8.jpg 2x"
                />
                <div className="trailers-img-overlay">
                  <Link to="#">
                    <div className="thumbslider-outline">
                      <i className="fas fa-play" />
                    </div>
                  </Link>
                </div>
              </div>
              <div className="episode-content">
                <h4 className="episode-content-head">eye of the beholder</h4>
              </div>
            </div>
            <div>
              <div className="relative">
                <img
                  className="trailers-img placeholder"
                  alt="episode-img"
                  src="assets/img/placeholder.gif"
                  data-src="assets/img/thumb9.jpg"
                  srcSet="assets/img/placeholder.gif 1x,
                                                                    assets/img/placeholder.gif 1.5x,
                                                                    assets/img/placeholder.gif 2x"
                  data-srcset="assets/img/thumb9.jpg 1x,
                                                                    assets/img/thumb9.jpg 1.5x,
                                                                    assets/img/thumb9.jpg 2x"
                />
                <div className="trailers-img-overlay">
                  <Link to="#">
                    <div className="thumbslider-outline">
                      <i className="fas fa-play" />
                    </div>
                  </Link>
                </div>
              </div>
              <div className="episode-content">
                <h4 className="episode-content-head">eye of the beholder</h4>
              </div>
            </div>
            <div>
              <div className="relative">
                <img
                  className="trailers-img placeholder"
                  alt="episode-img"
                  src="assets/img/placeholder.gif"
                  data-src="assets/img/thumb1.jpg"
                  srcSet="assets/img/placeholder.gif 1x,
                                                                    assets/img/placeholder.gif 1.5x,
                                                                    assets/img/placeholder.gif 2x"
                  data-srcset="assets/img/thumb1.jpg 1x,
                                                                    assets/img/thumb1.jpg 1.5x,
                                                                    assets/img/thumb1.jpg 2x"
                />
                <div className="trailers-img-overlay">
                  <Link to="#">
                    <div className="thumbslider-outline">
                      <i className="fas fa-play" />
                    </div>
                  </Link>
                </div>
              </div>
              <div className="episode-content">
                <h4 className="episode-content-head">eye of the beholder</h4>
              </div>
            </div>
            <div>
              <div className="relative">
                <img
                  className="trailers-img placeholder"
                  alt="episode-img"
                  src="assets/img/placeholder.gif"
                  data-src="assets/img/thumb4.jpg"
                  srcSet="assets/img/placeholder.gif 1x,
                                                                    assets/img/placeholder.gif 1.5x,
                                                                    assets/img/placeholder.gif 2x"
                  data-srcset="assets/img/thumb4.jpg 1x,
                                                                    assets/img/thumb4.jpg 1.5x,
                                                                    assets/img/thumb4.jpg 2x"
                />
                <div className="trailers-img-overlay">
                  <Link to="#">
                    <div className="thumbslider-outline">
                      <i className="fas fa-play" />
                    </div>
                  </Link>
                </div>
              </div>
              <div className="episode-content">
                <h4 className="episode-content-head">eye of the beholder</h4>
              </div>
            </div>
            <div>
              <div className="relative">
                <img
                  className="trailers-img placeholder"
                  alt="episode-img"
                  src="assets/img/placeholder.gif"
                  data-src="assets/img/thumb5.jpg"
                  srcSet="assets/img/placeholder.gif 1x,
                                                                    assets/img/placeholder.gif 1.5x,
                                                                    assets/img/placeholder.gif 2x"
                  data-srcset="assets/img/thumb5.jpg 1x,
                                                                    assets/img/thumb5.jpg 1.5x,
                                                                    assets/img/thumb5.jpg 2x"
                />
                <div className="trailers-img-overlay">
                  <Link to="#">
                    <div className="thumbslider-outline">
                      <i className="fas fa-play" />
                    </div>
                  </Link>
                </div>
              </div>
              <div className="episode-content">
                <h4 className="episode-content-head">eye of the beholder</h4>
              </div>
            </div>
            <div>
              <div className="relative">
                <img
                  className="trailers-img placeholder"
                  alt="episode-img"
                  src="assets/img/placeholder.gif"
                  data-src="assets/img/thumb6.jpg"
                  srcSet="assets/img/placeholder.gif 1x,
                                                                    assets/img/placeholder.gif 1.5x,
                                                                    assets/img/placeholder.gif 2x"
                  data-srcset="assets/img/thumb6.jpg 1x,
                                                                    assets/img/thumb6.jpg 1.5x,
                                                                    assets/img/thumb6.jpg 2x"
                />
                <div className="trailers-img-overlay">
                  <Link to="#">
                    <div className="thumbslider-outline">
                      <i className="fas fa-play" />
                    </div>
                  </Link>
                </div>
              </div>
              <div className="episode-content">
                <h4 className="episode-content-head">eye of the beholder</h4>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default VideoTrailer;
