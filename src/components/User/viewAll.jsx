import React, { Component } from "react";

import Slider from "../SliderView/MainSlider";

import api from "../../Environment";
import ContentLoader from "../Static/contentLoader";

class ViewAll extends Component {
  state = {
    videoList: null,
    loading: true
  };
  componentDidMount() {
    if (this.props.location.state) {
      //
    } else {
      window.location = "/home";
    }
    const inputData = {
      sub_profile_id: localStorage.getItem("active_profile_id"),
      skip: 0,
      url_type: this.props.location.state.url_type,
      page_type: this.props.location.state.page_type,
      category_id: this.props.location.state.category_id
    };

    api
      .postMethod("see_all", inputData)
      .then(response => {
        if (response.data.success === true) {
          let videoList = response.data.data;
          this.setState({ loading: false, videoList: videoList });
        } else {
        }
      })
      .catch(function(error) {});
  }

  chunkArray(myArray, chunk_size) {
    let results = [];

    while (myArray.length) {
      results.push(myArray.splice(0, chunk_size));
    }

    return results;
  }

  render() {
    // Usage

    let result = null;

    // Split in group of 3 items
    if (this.state.loading) {
      return <ContentLoader />;
    } else {
      result = this.chunkArray(this.state.videoList, 5);
    }

    // Outputs : [ [1,2,3] , [4,5,6] ,[7,8] ]

    return (
      <div className="main p-40">
        <div className="main-slidersec">
          <h3 className="">
            {this.props.location.state.title}
            <i className="fas fa-angle-right ml-2" />
          </h3>
          {result.map(res => (
            <Slider key={res.index}>
              {res.map(movie => (
                <Slider.Item movie={movie} key={movie.admin_video_id}>
                  item1
                </Slider.Item>
              ))}
            </Slider>
          ))}
        </div>
        <div className="height-100" />
      </div>
    );
  }
}

export default ViewAll;
