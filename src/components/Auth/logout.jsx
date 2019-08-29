import React, { Component } from "react";
import { withToastManager } from "react-toast-notifications";
import ToastDemo from "../Helper/toaster";

class Logout extends Component {
  componentDidMount() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userId");
    localStorage.removeItem("userLoginStatus");
    localStorage.removeItem("push_status");
    localStorage.removeItem("active_profile_id");
    this.props.history.push("/");
    ToastDemo(this.props.toastManager, "Logout Successfully..!!", "success");
  }
  render() {
    return null;
  }
}

export default withToastManager(Logout);
