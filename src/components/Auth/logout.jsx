import React, { Component } from "react";

class Logout extends Component {
  componentDidMount() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userId");
    localStorage.removeItem("userLoginStatus");
    window.location = "/";
  }
  render() {
    return null;
  }
}

export default Logout;
