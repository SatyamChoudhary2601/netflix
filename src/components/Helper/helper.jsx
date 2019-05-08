import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import api from "../../Environment";
import { apiConstants } from "../Constant/constants";

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
    banner: null
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
    console.log("Onchange called");
    console.log("data", this.state.data);
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

  changePassword() {
    api.postMethod("changePassword", this.state.data).then(function(response) {
      console.log("response", response);
      if (response.data.success === true) {
        console.log("password updated");
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
          console.log("response maindata", banner);
          this.setState({ loading: false, maindata: maindata, banner: banner });
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
}

export default Helper;
