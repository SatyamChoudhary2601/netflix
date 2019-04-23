import React from "react";
import { Link } from "react-router-dom";

const VideoDetails = () => {
  return (
    <div id="details" className="tab-pane fade">
      <div className="slider-topbottom-spacing slider-overlay">
        <h1 className="banner_video_title">frozen</h1>
        <div className="row">
          <div className="col-lg-2 col-xl-2">
            <h4 className="detail-head">cast</h4>
            <ul className="detail-list">
              <li>
                <Link to="#">jason</Link>
              </li>
              <li>
                <Link to="#">jhon krasinski</Link>
              </li>
              <li>
                <Link to="#">david cross</Link>
              </li>
              <li>
                <Link to="#">joe ksandar</Link>
              </li>
              <li>
                <Link to="#">kevin r</Link>
              </li>
              <li>
                <Link to="#">constance wu</Link>
              </li>
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
            <p className="details-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
