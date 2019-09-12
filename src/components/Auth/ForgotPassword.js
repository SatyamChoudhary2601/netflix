import React, { Component } from "react";

import { Link } from "react-router-dom";

import api from "../../Environment";
import Helper from "../Helper/helper";
import { withToastManager } from "react-toast-notifications";
import ToastDemo from "../Helper/toaster";

class ForgotPasswordComponent extends Helper {
  state = {
    data: {
      email: ""
    },
    loadingContent: null,
    buttonDisable: false
  };

  handleSubmit = event => {
    event.preventDefault();
    const { state } = this.props.location;
    this.setState({
      loadingContent: "Loading... Please wait..",
      buttonDisable: true
    });
    api
      .postMethod("forgotpassword", this.state.data)
      .then(response => {
        if (response.data.success) {
          ToastDemo(this.props.toastManager, response.data.message, "success");
          this.props.history.push("/login");

          this.setState({ loadingContent: null, buttonDisable: false });
        } else {
          ToastDemo(
            this.props.toastManager,
            response.data.error_messages,
            "error"
          );
          this.setState({ loadingContent: null, buttonDisable: false });
        }
      })
      .catch(error => {
        this.setState({ loadingContent: null, buttonDisable: false });
        ToastDemo(this.props.toastManager, error, "error");
      });
  };
  render() {
    var bgImg = {
      backgroundImage: "url(../assets/img/bg.jpg)"
    };

    return (
      <div>
        <div className="common-bg-img" style={bgImg}>
          <div className="auth-page-header">
            <Link to={"/"}>
              <img
                src="../assets/img/streamview1.png"
                className="site-logo"
                alt="logo_img"
              />
            </Link>
          </div>

          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 col-xl-4 auto-margin">
              <div className="register-box">
                <h3 className="register-box-head">forgot password</h3>
                <form className="auth-form" onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      onChange={this.handleChange}
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="name@example.com"
                      value={this.state.data.email}
                    />
                  </div>
                  <p className="mt-4 black-clr">
                    We will send you an email with instructions on how to reset
                    your password.
                  </p>
                  <button
                    className="btn btn-danger auth-btn"
                    disabled={this.state.buttonDisable}
                  >
                    {this.state.loadingContent != null
                      ? this.state.loadingContent
                      : "Submit"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withToastManager(ForgotPasswordComponent);
