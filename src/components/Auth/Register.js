import React, { Component } from "react";
import { Link } from "react-router-dom";
import Helper from "../Helper/helper";
import api from "../../Environment";
import { withToastManager } from "react-toast-notifications";
import ToastDemo from "../Helper/toaster";

class RegisterComponent extends Helper {
  state = {
    data: {
      email: "",
      password: "",
      name: ""
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
      .postMethod("v4/register", this.state.data)
      .then(response => {
        if (response.data.success) {
          console.log("checking");
          ToastDemo(this.props.toastManager, response.data.message, "success");
          window.location = state ? state.from.pathname : "/";
          console.log("Register Success");
          this.setState({ loadingContent: null, buttonDisable: false });
        } else {
          ToastDemo(
            this.props.toastManager,
            response.data.error_messages,
            "error"
          );
          this.setState({ loadingContent: null, buttonDisable: false });
        }
        console.log(response);
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
                <h3 className="register-box-head">Sign up</h3>
                <form className="auth-form" onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">full name</label>
                    <input
                      onChange={this.handleChange}
                      className="form-control"
                      id="name"
                      name="name"
                      value={data.name}
                    />
                  </div>
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
                  <button
                    className="btn btn-danger auth-btn mt-4"
                    disabled={this.state.buttonDisable}
                  >
                    {this.state.loadingContent != null
                      ? this.state.loadingContent
                      : "sign up"}
                  </button>
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
                  Already have an account?{" "}
                  <Link to={"/login"} className="btn-link">
                    sign in now
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

export default withToastManager(RegisterComponent);
