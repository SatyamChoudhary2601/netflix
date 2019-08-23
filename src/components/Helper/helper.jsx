import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import api from "../../Environment";
import { apiConstants } from "../Constant/constants";
import ToastDemo from "./toaster";

class Helper extends Component {
  state = {
    categories: {
      data: []
    },
    recentUpload: [
      {
        data: []
      },
      {
        data: []
      }
    ],
    userDetails: {},
    data: {},
    errors: {},
    activeProfile: null,
    loading: true,
    videoDetailsFirst: null,
    loadingFirst: true,
    videoDetailsSecond: null,
    suggestion: null,
    loadingSuggestion: true,
    maindata: null,
    banner: null,
    wishlistApiCall: false,
    wishlistResponse: null,
    redirect: false,
    redirectPPV: false,
    redirectPaymentOption: false,
    loadingHomeSecondSection: false,
    homeSecondData: null
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };

  getUserDetails() {
    const inputData = {
      sub_profile_id: localStorage.getItem("active_profile_id")
    };
    api.postMethod("profile", inputData).then(response => {
      console.log("Response", response);
      if (response.data.success === true) {
        let data = response.data.data;
        this.setState({ loading: false, data: data });
      }
    });
  }

  viewProfiles() {
    api.postMethod("active-profiles").then(response => {
      console.log("response active profile", response);
      if (response.data.success === true) {
        let activeProfile = response.data.data;
        this.setState({ loading: false, activeProfile: activeProfile });
      }
    });

    console.log("State object", this.state.activeProfile);
  }

  singleVideoFirst(inputData) {
    api
      .postMethod("videos/view", inputData)
      .then(response => {
        if (response.data.success === true) {
          let videoDetailsFirst = response.data.data;
          console.log("response first maindata", videoDetailsFirst);
          this.setState({
            loadingFirst: false,
            videoDetailsFirst: videoDetailsFirst
          });
          this.singleVideoSecond(inputData);
        } else {
          console.log("Error", response);
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  async onlySingleVideoFirst(inputData) {
    await api
      .postMethod("videos/view", inputData)
      .then(response => {
        if (response.data.success === true) {
          let videoDetailsFirst = response.data.data;
          console.log("response first maindata", videoDetailsFirst);
          this.setState({
            loadingFirst: false,
            videoDetailsFirst: videoDetailsFirst
          });
        } else {
          console.log("Error", response.data);
          this.setState({ videoDetailsFirst: response.data });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  singleVideoSecond(inputData) {
    api
      .postMethod("videos/view/second", inputData)
      .then(response => {
        if (response.data.success === true) {
          let videoDetailsSecond = response.data.data;
          console.log("response maindata", videoDetailsSecond);
          this.setState({
            loadingSecond: false,
            videoDetailsSecond: videoDetailsSecond
          });
        } else {
          console.log("Error", response);
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  suggestion(inputData) {
    api
      .postMethod("suggestions", inputData)
      .then(response => {
        if (response.data.success === true) {
          let suggestion = response.data.data;
          console.log("response suggestion", suggestion);
          this.setState({
            loadingSuggestion: false,
            suggestion: suggestion
          });
        } else {
          console.log("Error", response);
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  homeFirstSection(inputData) {
    api
      .postMethod("home_first_section", inputData)
      .then(response => {
        if (response.data.success === true) {
          let maindata = response.data.data;
          let banner = response.data.banner;

          this.setState({ loading: false, maindata: maindata, banner: banner });
        } else {
          let errorHandle = 1;
          this.setState({ errorHandle });
        }
        this.homeSecondSection(inputData);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  homeSecondSection(inputData) {
    api
      .postMethod("home_second_section", inputData)
      .then(response => {
        if (response.data.success === true) {
          this.setState({
            loadingHomeSecondSection: false,
            homeSecondData: response.data.data
          });
        } else {
          let errorHandle = 1;
          this.setState({ errorHandle });
        }
        console.log("Home page second section", response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  wishlistUpdate(inputData) {
    api.postMethod("wishlists/operations", inputData).then(response => {
      console.log("response", response);
      if (response.data.success === true) {
        ToastDemo(this.props.toastManager, response.data.message, "success");
        this.setState({
          wishlistResponse: response.data,
          wishlistApiCall: true
        });
        console.log("Wishlist data ", this.state.wishlistResponse.wishlist_id);
      } else {
        ToastDemo(
          this.props.toastManager,
          response.data.error_messages,
          "error"
        );
      }
    });
  }

  redirectStatus(StatusData) {
    if (StatusData.should_display_ppv != 0) {
      if (StatusData.ppv_page_type == 2) {
        this.setState({ redirectPaymentOption: true });
      } else {
        this.setState({ redirectPPV: true });
      }
    } else {
      console.log("Redirect");
      this.setState({ redirect: true });
    }
  }

  renderRedirectPage(videoDetailsFirst) {
    console.log("REdirect check");
    if (this.state.redirect) {
      console.log("REdirect check");
      return (
        <Redirect
          to={{
            pathname: `/video/${videoDetailsFirst.admin_video_id}`,
            state: { videoDetailsFirst: videoDetailsFirst }
          }}
        />
      );
    } else if (this.state.redirectPPV) {
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
    } else if (this.state.redirectPaymentOption) {
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
    } else {
      return null;
    }
  }
}

export default Helper;
