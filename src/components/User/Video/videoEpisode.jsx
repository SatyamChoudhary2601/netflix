import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const VideoEpisode = () => {
  var episodeSlider = {
    dots: false,
    arrow: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: false
  };
  return (
    <div id="episode" className="tab-pane fade">
      <div className="slider-topbottom-spacing pl-0 pr-0 slider-overlay">
        <div className="pr-4per pl-4per">
          <h1 className="banner_video_title">frozen</h1>
          <form>
            <div className="custom-select width-200">
              <select>
                <option value="0">season 1</option>
                <option value="1">season 2</option>
                <option value="2">season 3</option>
                <option value="3">season 4</option>
              </select>
            </div>
          </form>
        </div>
        <div>
          <Slider {...episodeSlider} className="episode-slider slider">
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
                <div className="episode-number">1</div>
              </div>
              <div className="episode-content">
                <div className="row">
                  <div className="col-xl-8 col-lg-8">
                    <h4 className="episode-content-head">
                      eye of the beholder
                    </h4>
                  </div>
                  <div className="col-xl-4 col-lg-4">
                    <h4 className="episode-content-head text-right">52m</h4>
                  </div>
                </div>
                <h4 className="episode-content-desc">
                  During their search for the escaped Dagur the Deranged, Hiccup
                  and the Dragon Riders discover a mysterious object -- one that
                  holds their destiny.
                </h4>
              </div>
            </div>
            <div>
              <div className="relative">
                <img
                  className="trailers-img placeholder"
                  alt="episode-img"
                  src="assets/img/placeholder.gif"
                  data-src="assets/img/thumb2.jpg"
                  srcSet="assets/img/placeholder.gif 1x,
                                                                    assets/img/placeholder.gif 1.5x,
                                                                    assets/img/placeholder.gif 2x"
                  data-srcset="assets/img/thumb2.jpg 1x,
                                                                    assets/img/thumb2.jpg 1.5x,
                                                                    assets/img/thumb2.jpg 2x"
                />
                <div className="trailers-img-overlay">
                  <Link to="#">
                    <div className="thumbslider-outline">
                      <i className="fas fa-play" />
                    </div>
                  </Link>
                </div>
                <div className="episode-number">2</div>
              </div>
              <div className="episode-content">
                <div className="row">
                  <div className="col-xl-8 col-lg-8">
                    <h4 className="episode-content-head">
                      eye of the beholder
                    </h4>
                  </div>
                  <div className="col-xl-4 col-lg-4">
                    <h4 className="episode-content-head text-right">52m</h4>
                  </div>
                </div>
                <h4 className="episode-content-desc">
                  During their search for the escaped Dagur the Deranged, Hiccup
                  and the Dragon Riders discover a mysterious object -- one that
                  holds their destiny.
                </h4>
              </div>
            </div>
            <div>
              <div className="relative">
                <img
                  className="trailers-img placeholder"
                  alt="episode-img"
                  src="assets/img/placeholder.gif"
                  data-src="assets/img/thumb3.jpg"
                  srcSet="assets/img/placeholder.gif 1x,
                                                                    assets/img/placeholder.gif 1.5x,
                                                                    assets/img/placeholder.gif 2x"
                  data-srcset="assets/img/thumb3.jpg 1x,
                                                                    assets/img/thumb3.jpg 1.5x,
                                                                    assets/img/thumb3.jpg 2x"
                />
                <div className="trailers-img-overlay">
                  <Link to="#">
                    <div className="thumbslider-outline">
                      <i className="fas fa-play" />
                    </div>
                  </Link>
                </div>
                <div className="episode-number">3</div>
              </div>
              <div className="episode-content">
                <div className="row">
                  <div className="col-xl-8 col-lg-8">
                    <h4 className="episode-content-head">
                      eye of the beholder
                    </h4>
                  </div>
                  <div className="col-xl-4 col-lg-4">
                    <h4 className="episode-content-head text-right">52m</h4>
                  </div>
                </div>
                <h4 className="episode-content-desc">
                  During their search for the escaped Dagur the Deranged, Hiccup
                  and the Dragon Riders discover a mysterious object -- one that
                  holds their destiny.
                </h4>
              </div>
            </div>
            <div>
              <div className="relative">
                <img
                  className="trailers-img placeholder"
                  alt="episode-img"
                  src="assets/img/placeholder.gif"
                  data-src="assets/img/thumb3.jpg"
                  srcSet="assets/img/placeholder.gif 1x,
                                                                    assets/img/placeholder.gif 1.5x,
                                                                    assets/img/placeholder.gif 2x"
                  data-srcset="assets/img/thumb3.jpg 1x,
                                                                    assets/img/thumb3.jpg 1.5x,
                                                                    assets/img/thumb3.jpg 2x"
                />
                <div className="trailers-img-overlay">
                  <Link to="#">
                    <div className="thumbslider-outline">
                      <i className="fas fa-play" />
                    </div>
                  </Link>
                </div>
                <div className="episode-number">4</div>
              </div>
              <div className="episode-content">
                <div className="row">
                  <div className="col-xl-8 col-lg-8">
                    <h4 className="episode-content-head">
                      eye of the beholder
                    </h4>
                  </div>
                  <div className="col-xl-4 col-lg-4">
                    <h4 className="episode-content-head text-right">52m</h4>
                  </div>
                </div>
                <h4 className="episode-content-desc">
                  During their search for the escaped Dagur the Deranged, Hiccup
                  and the Dragon Riders discover a mysterious object -- one that
                  holds their destiny.
                </h4>
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
                <div className="episode-number">5</div>
              </div>
              <div className="episode-content">
                <div className="row">
                  <div className="col-xl-8 col-lg-8">
                    <h4 className="episode-content-head">
                      eye of the beholder
                    </h4>
                  </div>
                  <div className="col-xl-4 col-lg-4">
                    <h4 className="episode-content-head text-right">52m</h4>
                  </div>
                </div>
                <h4 className="episode-content-desc">
                  During their search for the escaped Dagur the Deranged, Hiccup
                  and the Dragon Riders discover a mysterious object -- one that
                  holds their destiny.
                </h4>
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
                <div className="episode-number">6</div>
              </div>
              <div className="episode-content">
                <div className="row">
                  <div className="col-xl-8 col-lg-8">
                    <h4 className="episode-content-head">
                      eye of the beholder
                    </h4>
                  </div>
                  <div className="col-xl-4 col-lg-4">
                    <h4 className="episode-content-head text-right">52m</h4>
                  </div>
                </div>
                <h4 className="episode-content-desc">
                  During their search for the escaped Dagur the Deranged, Hiccup
                  and the Dragon Riders discover a mysterious object -- one that
                  holds their destiny.
                </h4>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default VideoEpisode;
