import React, { Component } from "react";
import { Link } from "react-router-dom";

import api from "../../Environment";

import Slider from "../SliderView/MainSlider";
import HomePageBanner from "./homePageBanner";

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
              <Slider.Item movie={movie} key={movie.admin_video_id}>
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
        <HomePageBanner />
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
