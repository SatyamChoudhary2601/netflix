import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import cx from "classnames";
import SliderContext from "./context";
import ShowDetailsButton from "./ShowDetailsButton";
import Mark from "./Mark";
import "./Item.scss";
import Helper from "../../Helper/helper";
const DATE_OPTIONS = {
  year: "numeric",
  month: "short"
};

class Item extends Helper {
  state = {
    loadingFirst: true,
    videoDetailsFirst: null,
    redirect: false,
    redirectPPV: false,
    redirectPaymentOption: false
  };

  handlePlayVideo = async event => {
    event.preventDefault();

    const inputData = {
      sub_profile_id: localStorage.getItem("active_profile_id"),
      admin_video_id: this.props.movie.admin_video_id,
      skip: 0
    };

    await this.onlySingleVideoFirst(inputData);

    if (this.state.videoDetailsFirst.should_display_ppv != 0) {
      if (this.state.videoDetailsFirst.ppv_page_type == 2) {
        this.setState({ redirectPaymentOption: true });
      } else {
        this.setState({ redirectPPV: true });
      }
    } else {
      console.log("Redirect");
      this.setState({ redirect: true });
    }
  };
  render() {
    const { movie } = this.props;
    const {
      videoDetailsFirst,
      redirect,
      redirectPPV,
      redirectPaymentOption
    } = this.state;

    if (redirect) {
      return (
        <Redirect
          to={{
            pathname: `/video/${videoDetailsFirst.admin_video_id}`,
            state: { videoDetailsFirst: videoDetailsFirst }
          }}
        />
      );
    } else if (redirectPPV) {
      return (
        <Redirect
          to={{
            pathname: "/pay-per-view",
            state: {
              videoDetailsFirst: videoDetailsFirst
            }
          }}
        />
      );
    } else if (redirectPaymentOption) {
      return (
        <Redirect
          to={{
            pathname: "/payment-options",
            state: {
              videoDetailsFirst: videoDetailsFirst
            }
          }}
        />
      );
    }

    return (
      <SliderContext.Consumer>
        {({ onSelectSlide, currentSlide, elementRef }) => {
          const isActive =
            currentSlide &&
            currentSlide.admin_video_id === movie.admin_video_id;

          return (
            <div
              ref={elementRef}
              className={cx("item sliderthumb-text", {
                "item--open": isActive
              })}
              style={{ backgroundImage: "url(" + movie.default_image + ")" }}
            >
              <a
                onClick={() => onSelectSlide(movie)}
                className="close-overlay"
              />
              <div className="width-100 slider-content-box">
                <Link to="#" onClick={this.handlePlayVideo}>
                  <div className="thumb-playicon">
                    <i className="fas fa-play" />
                  </div>
                </Link>
                <h4 className="thumb-title">{movie.title}</h4>
                <h5 className="thumb-details">
                  <span className="green-clr">
                    {new Date(movie.publish_time).toLocaleDateString(
                      "en-US",
                      DATE_OPTIONS
                    )}
                  </span>
                  <span className="grey-box">
                    {movie.age}
                    <i className="fas fa-plus small" /> / 25{" "}
                    <span className="small">Views</span>
                  </span>
                </h5>
                <p className="thumb-desc">{movie.description} </p>
                <ShowDetailsButton onClick={() => onSelectSlide(movie)} />
              </div>
              {isActive && <Mark />}
            </div>
          );
        }}
      </SliderContext.Consumer>
    );
  }
}

export default Item;

// const Item = ({ movie }) => (
//   <SliderContext.Consumer>
//     {({ onSelectSlide, currentSlide, elementRef }) => {
//       const isActive =
//         currentSlide && currentSlide.admin_video_id === movie.admin_video_id;

//       return (
//         <div
//           ref={elementRef}
//           className={cx("item sliderthumb-text", {
//             "item--open": isActive
//           })}
//           style={{ backgroundImage: "url(" + movie.default_image + ")" }}
//         >
//           <a onClick={() => onSelectSlide(movie)} className="close-overlay" />
//           <div className="width-100 slider-content-box">
//             <Link to="#" onClick={event => handlePlayVideo(event, movie)}>
//               <div className="thumb-playicon">
//                 <i className="fas fa-play" />
//               </div>
//             </Link>
//             <h4 className="thumb-title">{movie.title}</h4>
//             <h5 className="thumb-details">
//               <span className="green-clr">
//                 {new Date(movie.publish_time).toLocaleDateString(
//                   "en-US",
//                   DATE_OPTIONS
//                 )}
//               </span>
//               <span className="grey-box">
//                 {movie.age}
//                 <i className="fas fa-plus small" /> / 25{" "}
//                 <span className="small">Views</span>
//               </span>
//             </h5>
//             <p className="thumb-desc">{movie.description} </p>
//             <ShowDetailsButton onClick={() => onSelectSlide(movie)} />
//           </div>
//           {isActive && <Mark />}
//         </div>
//       );
//     }}
//   </SliderContext.Consumer>
// );

// export default Item;
