import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const VideoMoreLikeThis = () => {
  var morelikeSlider = {
    dots: false,
    arrow: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
    <div id="more_link" className="tab-pane fade">
      <div className="slider-topbottom-spacing pl-0 pr-0 slider-overlay">
        <div className="pr-4per pl-4per">
          <h1 className="banner_video_title">frozen</h1>
        </div>
        <div>
          <Slider {...morelikeSlider} className="more-like-slider slider">
            <div>
              <div className="relative">
                <img
                  className="trailers-img placeholder"
                  alt="episode-img"
                  src="assets/img/thumb1.jpg"
                  data-src="assets/img/thumb1.jpg"
                  srcset="assets/img/placeholder.gif 1x,
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
                  <div className="add-to-wishlist">
                    <Link to="#">
                      <i className="fas fa-plus-circle" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="episode-content">
                <h4 className="episode-content-head">
                  <span>2018</span>&nbsp;
                  <span className="grey-box pt-0 pb-0">
                    7 <i className="fas fa-plus small" /> / 25{" "}
                    <small>Views</small>
                  </span>
                  &nbsp;
                  <span>1h 36m</span>&nbsp;
                </h4>
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
                  srcset="assets/img/placeholder.gif 1x,
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
                  <div className="add-to-wishlist">
                    <Link to="#">
                      <i className="fas fa-plus-circle" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="episode-content">
                <h4 className="episode-content-head">
                  <span>2018</span>&nbsp;
                  <span className="grey-box pt-0 pb-0">
                    7 <i className="fas fa-plus small" /> / 25{" "}
                    <small>Views</small>
                  </span>
                  &nbsp;
                  <span>1h 36m</span>&nbsp;
                </h4>
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
                  srcset="assets/img/placeholder.gif 1x,
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
                  <div className="add-to-wishlist">
                    <Link to="#">
                      <i className="fas fa-plus-circle" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="episode-content">
                <h4 className="episode-content-head">
                  <span>2018</span>&nbsp;
                  <span className="grey-box pt-0 pb-0">
                    7 <i className="fas fa-plus small" /> / 25{" "}
                    <small>Views</small>
                  </span>
                  &nbsp;
                  <span>1h 36m</span>&nbsp;
                </h4>
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
                  srcset="assets/img/placeholder.gif 1x,
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
                  <div className="add-to-wishlist">
                    <Link to="#">
                      <i className="fas fa-plus-circle" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="episode-content">
                <h4 className="episode-content-head">
                  <span>2018</span>&nbsp;
                  <span className="grey-box pt-0 pb-0">
                    7 <i className="fas fa-plus small" /> / 25{" "}
                    <small>Views</small>
                  </span>
                  &nbsp;
                  <span>1h 36m</span>&nbsp;
                </h4>
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
                  srcset="assets/img/placeholder.gif 1x,
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
                  <div className="add-to-wishlist">
                    <Link to="#">
                      <i className="fas fa-plus-circle" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="episode-content">
                <h4 className="episode-content-head">
                  <span>2018</span>&nbsp;
                  <span className="grey-box pt-0 pb-0">
                    7 <i className="fas fa-plus small" /> / 25{" "}
                    <small>Views</small>
                  </span>
                  &nbsp;
                  <span>1h 36m</span>&nbsp;
                </h4>
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
                  data-src="assets/img/thumb6.jpg"
                  srcset="assets/img/placeholder.gif 1x,
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
                  <div className="add-to-wishlist">
                    <Link to="#">
                      <i className="fas fa-plus-circle" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="episode-content">
                <h4 className="episode-content-head">
                  <span>2018</span>&nbsp;
                  <span className="grey-box pt-0 pb-0">
                    7 <i className="fas fa-plus small" /> / 25{" "}
                    <small>Views</small>
                  </span>
                  &nbsp;
                  <span>1h 36m</span>&nbsp;
                </h4>
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

export default VideoMoreLikeThis;
