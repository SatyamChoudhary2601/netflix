import React, { Component } from "react";
import { Link } from "react-router-dom";

import api from "../../Environment";

import Slider from "../SliderView/MainSlider";
import HomePageBanner from "./homePageBanner";

const movies = [
  {
    id: 1,
    image: "/assets/img/thumb2.jpg",
    imageBg: "/assets/img/thumb7.jpg",
    title: "Russian doll",
    admin_video_id: "436",
    default_image: "/assets/img/thumb2.jpg"
  },
  {
    id: 2,
    image: "/assets/img/thumb2.jpg",
    imageBg: "/assets/img/thumb7.jpg",
    title: "Russian doll",
    admin_video_id: "434",
    default_image: "/assets/img/thumb2.jpg"
  }
];

class Home extends Component {
  state = {
    maindata: null,
    bannerData: {
      data: [{}]
    },
    originalsData: {
      data: [{}]
    },
    errorHandle: 0,
    loading: true
  };

  componentDidMount() {
    const inputData = {
      sub_profile_id: localStorage.getItem("active_profile_id"),
      page_type: "HOME"
    };
    // let maindata = { ...this.state.maindata };
    // let errorHandle = 0;
    api
      .postMethod("home_first_section", inputData)
      .then(response => {
        if (response.data.success === true) {
          let maindata = response.data.data;
          console.log("response maindata", maindata);
          this.setState({ loading: false, maindata: maindata });
        } else {
          console.log("Error", response);
          let errorHandle = 1;
          this.setState({ errorHandle });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  renderVideoList = (maindata, index) => {
    return (
      <React.Fragment key={index}>
        {console.log("index", index)}
        <div className="main-slidersec">
          <h3 className="">
            {maindata.title}
            <i className="fas fa-angle-right ml-2" />
          </h3>

          <Slider>
            {maindata.data.map(movie => (
              <Slider.Item movie={movie} key={Math.random()}>
                item1
              </Slider.Item>
            ))}
          </Slider>
        </div>
      </React.Fragment>
    );
  };

  render() {
    const { loading, maindata } = this.state;

    return (
      <div>
        <div className="banner-sec">
          <div className="row m-0">
            <div className="col-3 col-md-3 col-lg-3 col-xl-3 p-0">
              <div className="banner-home home-left" />
            </div>
            <div className="col-9 col-md-9 col-lg-9 col-xl-9 p-0">
              <div className="banner-home relative">
                <img
                  className="banner_right_img"
                  src="assets/img/slider-img1.jpg"
                  srcSet="assets/img/slider-img1.jpg 1x,
                                      assets/img/slider-img1.jpg 1.5x,
                                      assets/img/slider-img1.jpg 2x"
                  alt="banner img"
                />
                <div className="banner_right_overlay" />
              </div>
            </div>
          </div>
          <div className="banner-content">
            <div className="banner-text-centeralign">
              <div>
                <h1 className="banner_video_title">troll hunters</h1>
                <h4 className="banner_video_text">
                  an ordinary teen. An ancient relic pulled from the rubble. And
                  an underground civilization that needs a hero.An ordinary
                  teen. An ancient relic pulled from the rubble. And an
                  underground civilization that needs a hero.
                </h4>
                <div className="banner-btn-sec">
                  <Link to="#" className="btn btn-grey">
                    <i className="fas fa-play mr-2" />
                    play
                  </Link>
                  <Link to="#" className="btn btn-grey">
                    <i className="fas fa-plus mr-2" />
                    my list
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main p-40">
          {/* {renderMyList} */}

          {loading
            ? ""
            : maindata.map((mainDa, index) =>
                mainDa.data.length === 0
                  ? ""
                  : loading
                  ? "loading"
                  : this.renderVideoList(mainDa, index)
              )}

          <div className="height-100" />
        </div>
      </div>
    );
  }
}

export default Home;
