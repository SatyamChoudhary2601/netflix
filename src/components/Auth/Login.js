import React, { Component } from "react";

import { Link } from "react-router-dom";

import api from "../../Environment";

import Helper from "../Helper/helper";

import { withToastManager } from "react-toast-notifications";

import ToastDemo from "../Helper/toaster";

class LoginCommponent extends Helper {
  state = {
    data: {
      email: "",
      password: ""
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    // const { toastManager } = this.props;
    api
      .postMethod("v4/login", this.state.data)
      .then(response => {
        if (response.data.success) {
          localStorage.setItem("userId", response.data.data.user_id);
          localStorage.setItem("accessToken", response.data.data.token);
          console.log("checking", response);
          ToastDemo(this.props.toastManager, response.data.message, "success");
          this.props.history.push("/view-profiles");
          console.log("Login Success");
        } else {
          ToastDemo(
            this.props.toastManager,
            response.data.error_messages,
            "error"
          );
        }
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  render() {
    var bgImg = {
      backgroundImage: "url(../assets/img/bg.jpg)"
    };
    const { data } = this.state;

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
                <h3 className="register-box-head">Sign in</h3>
                <form onSubmit={this.handleSubmit} className="auth-form">
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      onChange={this.handleChange}
                      className="form-control"
                      id="email"
                      name="email"
                      value={data.email}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pwd">Password</label>
                    <input
                      type="password"
                      onChange={this.handleChange}
                      className="form-control"
                      id="pwd"
                      name="password"
                      value={data.password}
                    />
                  </div>
                  <p className="mt-4">
                    <Link to={"/forgot-password"} className="btn-link">
                      forgot password?
                    </Link>
                  </p>
                  <button className="btn btn-danger auth-btn">sign in</button>
                </form>
                <div>
                  <Link to="../account/view-profiles.html">
                    <p className="social">
                      <span>
                        <i className="fab fa-facebook fb social-icons" />
                      </span>
                      login with facebook
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="../account/view-profiles.html">
                    <p className="social">
                      <span>
                        <i className="fab fa-google-plus-square google social-icons" />
                      </span>
                      login with google
                    </p>
                  </Link>
                </div>

                <p className="auth-link">
                  new to Streamview?{" "}
                  <Link to={"/register"} className="btn-link">
                    sign up now
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withToastManager(LoginCommponent);
