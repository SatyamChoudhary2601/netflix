import React, { Component } from "react";
import { Link } from "react-router-dom";
import Helper from "../../Helper/helper";

class VideoDetails extends Helper {
  render() {
    const { videoDetailsFirst } = this.props;
    console.log("video details,", videoDetailsFirst);
    return (
      <div className="slider-topbottom-spacing slider-overlay">
        <h1 className="banner_video_title">{videoDetailsFirst.title}</h1>
        <div className="row">
          <div className="col-lg-2 col-xl-2">
            <h4 className="detail-head">cast</h4>
            <ul className="detail-list">
              {videoDetailsFirst.cast_crews.map(cast => (
                <li>
                  <Link
                    to={{
                      pathname: "/view-all",
                      state: {
                        cast_crew_id: cast.cast_crew_id,
                        title: cast.name,
                        videoType: "cast"
                      }
                    }}
                  >
                    {cast.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-2 col-xl-2">
            <h4 className="detail-head">genres</h4>
            <ul className="detail-list">
              <li>
                <Link to="#">Action Comedies</Link>
              </li>
              <li>
                <Link to="#">Children & Family Films</Link>
              </li>
              <li>
                <Link to="#">Films for ages 8 to 10</Link>
              </li>
              <li>
                <Link to="#">family features</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-8 col-xl-8">
            <h4 className="detail-head">description</h4>
            <p className="details-text">{videoDetailsFirst.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoDetails;
