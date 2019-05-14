import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const VideoTrailer = data => {
  var trailerSlider = {
    dots: false,
    arrow: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  const trailerDetails = data.trailer;
  return (
    <div className="slider-topbottom-spacing pl-0 pr-0 slider-overlay">
      <div className="pr-4per pl-4per">
        <h1 className="banner_video_title">Trailer and More</h1>
      </div>
      <div>
        <Slider {...trailerSlider} className="trailer-slider slider">
          {trailerDetails.map(trailer => (
            <div key={Math.random()}>
              <div className="relative">
                <img
                  className="trailers-img placeholder"
                  alt="episode-img"
                  src={trailer.default_image}
                  data-src="assets/img/thumb8.jpg"
                  srcSet={
                    trailer.default_image +
                    " 1x," +
                    trailer.default_image +
                    " 1.5x," +
                    trailer.default_image +
                    " 2x"
                  }
                  data-srcset="assets/img/thumb8.jpg 1x,
                                                                  assets/img/thumb8.jpg 1.5x,
                                                                  assets/img/thumb8.jpg 2x"
                />
                <div className="trailers-img-overlay">
                  <Link
                    to={{
                      pathname: `/video/${trailer.admin_video_id}`,
                      state: { videoDetailsFirst: trailer }
                    }}
                  >
                    <div className="thumbslider-outline">
                      <i className="fas fa-play" />
                    </div>
                  </Link>
                </div>
              </div>
              <div className="episode-content">
                <h4 className="episode-content-head">{trailer.name}</h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default VideoTrailer;
