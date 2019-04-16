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
    errors: {}
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
    console.log("Onchange called");
    console.log("data", this.state.data);
  };

  categoryApiCall = async () => {
    let categories = { ...this.state.categories };
    let recentUpload = { ...this.state.recentUpload };
    await api.postMethod("home_first_section").then(function(response) {
      categories = response.data.categories;
      recentUpload = response.data.data;
    });
    this.setState({ categories });
    this.setState({ recentUpload });
  };

  async getUserDetails() {
    let data = { ...this.state.data };
    await api.getMethod("userDetails").then(function(response) {
      console.log("Response", response);
      if (response.data.success === true) {
        data = response.data.data;
      }
    });
    this.setState({ data });
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
}

export default Helper;
