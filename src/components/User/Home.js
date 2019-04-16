import React, { Component } from "react";

import { Link } from "react-router-dom";

import api from "../../Environment";

import Slider from "../SliderView/MainSlider";

const movies = [
  {
    id: 1,
    image: "/assets/img/thumb2.jpg",
    imageBg: "/assets/img/thumb7.jpg",
    title: "1983",
    admin_video_id: "436",
    category_id: "78",
    sub_category_id: "57",
    genre_id: "40",
    description: "Sunset Time Lapse can be viewed in the video.",
    default_image:
      "http://adminview.streamhash.com/uploads/images/video_436_001.png",
    mobile_image:
      "http://adminview.streamhash.com/uploads/images/video_mobile_436_001.png",
    duration: "00: 0: 0",
    age: "16",
    publish_time: "12 Apr 19"
  }
];

class Home extends Component {
  state = {
    maindata: [
      {
        title: "",
        data: [{}]
      },
      {
        title: "",
        data: [{}]
      },
      {
        title: "",
        data: [{}]
      },
      {
        title: "",
        data: [{}]
      },
      {
        title: "",
        data: [{}]
      }
    ],
    bannerData: {
      data: [{}]
    },
    originalsData: {
      data: [{}]
    }
  };

  async componentDidMount() {
    const inputData = {
      sub_profile_id: 2391,
      page_type: "HOME"
    };
    let maindata = { ...this.state.maindata };
    await api
      .postMethod("home_first_section", inputData)
      .then(function(response) {
        if (response.data.success === true) {
          maindata = response.data.data;
          console.log("response maindata", maindata);
        } else {
          console.log("Error", response);
        }
      })
      .catch(function(error) {
        console.log(error);
      });
    this.setState({ maindata });
    console.log("State data", this.state.maindata);
  }

  render() {
    console.log("mylist data", this.state.maindata[0].data);

    let renderRecommended = "";
    if (this.state.maindata[4].data.length) {
      renderRecommended = (
        <div className="main-slidersec">
          <h3 className="">
            {this.state.maindata[4].title}
            <i className="fas fa-angle-right ml-2" />
          </h3>
          <Slider>
            {this.state.maindata[4].data.map(movie => (
              <Slider.Item movie={movie} key={Math.random()}>
                item1
              </Slider.Item>
            ))}
          </Slider>
        </div>
      );
    } else {
      renderRecommended = "";
    }

    let renderMyList = "";
    if (this.state.maindata[0].data.length) {
      renderMyList = (
        <div className="main-slidersec">
          <h3 className="">
            {this.state.maindata[0].title}
            <i className="fas fa-angle-right ml-2" />
          </h3>
          <Slider>
            {this.state.maindata[0].data.map(movie => (
              <Slider.Item movie={movie} key={Math.random()}>
                item1
              </Slider.Item>
            ))}
          </Slider>
        </div>
      );
    } else {
      renderMyList = "";
    }

    let renderNewRelease = "";
    if (this.state.maindata[1].data.length) {
      renderNewRelease = (
        <div className="main-slidersec">
          <h3 className="">
            {this.state.maindata[1].title}
            <i className="fas fa-angle-right ml-2" />
          </h3>
          <Slider>
            {this.state.maindata[1].data.map(movie => (
              <Slider.Item movie={movie} key={Math.random()}>
                item1
              </Slider.Item>
            ))}
          </Slider>
        </div>
      );
    } else {
      renderNewRelease = "";
    }

    let renderContinueWatching = "";
    if (this.state.maindata[2].data.length) {
      renderContinueWatching = (
        <div className="main-slidersec">
          <h3 className="">
            {this.state.maindata[2].title}
            <i className="fas fa-angle-right ml-2" />
          </h3>
          <Slider>
            {this.state.maindata[2].data.map(movie => (
              <Slider.Item movie={movie} key={Math.random()}>
                item1
              </Slider.Item>
            ))}
          </Slider>
        </div>
      );
    } else {
      renderContinueWatching = "";
    }

    let renderTrendingNow = "";
    if (this.state.maindata[3].data.length) {
      renderTrendingNow = (
        <div className="main-slidersec">
          <h3 className="">
            {this.state.maindata[3].title}
            <i className="fas fa-angle-right ml-2" />
          </h3>
          <Slider>
            {this.state.maindata[3].data.map(movie => (
              <Slider.Item movie={movie} key={Math.random()}>
                item1
              </Slider.Item>
            ))}
          </Slider>
        </div>
      );
    } else {
      renderTrendingNow = "";
    }

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
          {renderMyList}

          {renderNewRelease}

          {renderContinueWatching}

          {renderTrendingNow}

          {renderRecommended}

          <div className="height-100" />
        </div>
      </div>
    );
  }
}

export default Home;
