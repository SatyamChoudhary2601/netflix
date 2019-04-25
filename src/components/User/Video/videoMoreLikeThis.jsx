import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const VideoMoreLikeThis = ({ suggestion }) => {
  var morelikeSlider = {
    dots: false,
    arrow: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  return (
    <div className="slider-topbottom-spacing pl-0 pr-0 slider-overlay">
      <div className="pr-4per pl-4per">
        <h1 className="banner_video_title">More Like This</h1>
      </div>
      <div>
        <Slider {...morelikeSlider} className="more-like-slider slider">
          {suggestion.map(suggest => (
            <div key={suggest.admin_video_id}>
              <div className="relative">
                <img
                  className="trailers-img placeholder"
                  alt="episode-img"
                  src={suggest.default_image}
                  data-src="assets/img/thumb1.jpg"
                  srcSet={
                    suggest.default_image +
                    " 1x," +
                    suggest.default_image +
                    " 1.5x," +
                    suggest.default_image +
                    " 2x"
                  }
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
                  <span>{suggest.publish_time}</span>&nbsp;
                  <span className="grey-box pt-0 pb-0">
                    {suggest.age} <i className="fas fa-plus small" /> /{" "}
                    {suggest.category_id} <small>Views</small>
                  </span>
                  &nbsp;
                  <span>{suggest.duration}</span>&nbsp;
                </h4>
                <h4 className="episode-content-desc">{suggest.description}</h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default VideoMoreLikeThis;
