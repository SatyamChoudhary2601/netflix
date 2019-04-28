import React from "react";
import cx from "classnames";
import SliderContext from "./context";
import ShowDetailsButton from "./ShowDetailsButton";
import Mark from "./Mark";
import "./Item.scss";

const Item = ({ movie }) => (
  <SliderContext.Consumer>
    {({ onSelectSlide, currentSlide, elementRef }) => {
      const isActive =
        currentSlide && currentSlide.admin_video_id === movie.admin_video_id;

      return (
        <div
          ref={elementRef}
          className={cx("item sliderthumb-text", {
            "item--open": isActive
          })}
          style={{ backgroundImage: "url(" + movie.default_image + ")" }}
        >
          <div className="width-100 slider-content-box">
            <a href="#">
              <div className="thumb-playicon">
                <i className="fas fa-play" />
              </div>
            </a>
            <h4 className="thumb-title">frozen</h4>
            <h5 className="thumb-details">
              <span className="green-clr">Aug 2018</span>
              <span className="grey-box">
                7<i className="fas fa-plus small" /> / 25{" "}
                <span className="small">Views</span>
              </span>
            </h5>
            <p className="thumb-desc">
              An ordinary teen. An ancient relic pulled from the rubble. And an
              underground civilization that needs a hero.An ordinary teen. An
              ancient relic pulled from the rubble. And an underground{" "}
            </p>
            <a href="#">
              <div className="text-center thumbarrow-sec">
                <img
                  src="assets/img/arrow-white.png"
                  className="thumbarrow thumbarrow-white"
                />
                <img
                  src="assets/img/arrow-red.png"
                  className="thumbarrow thumbarrow-red"
                />
              </div>
            </a>
          </div>

          <ShowDetailsButton onClick={() => onSelectSlide(movie)} />
          {isActive && <Mark />}
        </div>
      );
    }}
  </SliderContext.Consumer>
);

export default Item;
