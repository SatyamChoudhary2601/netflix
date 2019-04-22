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
    videoDetailsSecond: null
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
    console.log("Onchange called");
    console.log("data", this.state.data);
  };

  getUserDetails() {
    api.getMethod("userDetails").then(response => {
      console.log("Response", response);
      if (response.data.success === true) {
        let data = response.data.data;
        this.setState({ data });
      }
    });
  }

  updateProfile() {
    let userDetails = { ...this.state.data };
    const data = {
      name: userDetails.name,
      email: userDetails.email,
      mobile: userDetails.mobile
    };
    console.log("Data", data);
    api.postMethod("updateProfile", data).then(function(response) {
      console.log("response", response);
      if (response.data.success === true) {
        console.log("profile updated");
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
}

export default Helper;
