import React, { Component } from "react";
import { Link } from "react-router-dom";

import api from "../../Environment";

import Slider from "../SliderView/MainSlider";
import HomePageBanner from "./homePageBanner";
import ContentLoader from "../Static/contentLoader";
import { apiConstants } from "../Constant/constants";
import Helper from "../Helper/helper";

let inputData = {
  sub_profile_id: localStorage.getItem("active_profile_id")
};

class Category extends Helper {
  state = {
    maindata: null,
    errorHandle: 0,
    loading: true,
    banner: null
  };

  componentDidMount() {
    inputData = {
      ...inputData,
      page_type: "CATEGORY",
      category_id: this.props.match.params.id
    };
    console.log("InputData ", inputData);

    this.homeFirstSection(inputData);
  }

  componentWillReceiveProps(props) {
    this.setState({ loading: true });

    inputData = {
      ...inputData,
      page_type: "CATEGORY",
      category_id: props.match.params.id
    };

    console.log("InputData will ", inputData);

    this.homeFirstSection(inputData);
  }

  renderVideoList = (maindata, index) => {
    return (
      <React.Fragment key={index}>
        {console.log("index", maindata, index)}
        <div className="main-slidersec">
          <Link
            to={{
              pathname: "/genre",
              state: { detail: maindata }
            }}
          >
            <h3 className="">
              {maindata.title}
              <i className="fas fa-angle-right ml-2" />
            </h3>
          </Link>

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
    const { loading, maindata, banner } = this.state;

    return (
      <div>
        {loading ? <ContentLoader /> : <HomePageBanner banner={banner} />}
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

export default Category;
