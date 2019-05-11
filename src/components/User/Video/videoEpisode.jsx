import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const VideoEpisode = genreDetails => {
  var episodeSlider = {
    dots: false,
    arrow: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false
  };
  const genreVideo = genreDetails.genreVideos;
  const genres = genreDetails.genre;

  return (
    <div className="slider-topbottom-spacing pl-0 pr-0 slider-overlay">
      <div className="pr-4per pl-4per">
        <h1 className="banner_video_title">Episode</h1>
        <form>
          <select className="form-control mw-200 mb-3">
            <option value="0">season 1</option>
            <option value="1">season 2</option>
            <option value="2">season 3</option>
            <option value="3">season 4</option>
          </select>
        </form>
      </div>
      <div>
        <Slider {...episodeSlider} className="episode-slider slider">
          {genreVideo.map(video => (
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
};

export default VideoEpisode;
