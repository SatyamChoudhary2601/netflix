import React, { Component } from "react";

import Slider from "../../SliderView/MainSlider";

import api from "../../../Environment";
import ContentLoader from "../../Static/contentLoader";

class NotificationsViewAll extends Component {
  state = {
    loadingNotification: true,
    notifications: null
  };
  componentDidMount() {
    let notificationInputData = {
      skip: 0,
      take: 12
    };
    api
      .postMethod("notifications", notificationInputData)
      .then(response => {
        if (response.data.success === true) {
          let notifications = response.data.data;
          this.setState({
            loadingNotification: false,
            notifications: notifications
          });
        } else {
          console.log("Error", response);
        }
      })
      .catch(function(error) {
        console.log(error);
      });
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
    if (this.state.loadingNotification) {
      return <ContentLoader />;
    } else {
      result = this.chunkArray(this.state.notifications, 5);
    }

    // Outputs : [ [1,2,3] , [4,5,6] ,[7,8] ]

    return (
      <div className="main p-40">
        <div className="main-slidersec">
          <h3 className="">
            View All Notification
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

export default NotificationsViewAll;
