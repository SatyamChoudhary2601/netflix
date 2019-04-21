import React, { Component } from "react";

import { Link } from "react-router-dom";

import api from "../../Environment";
import Helper from "../Helper/helper";

class ForgotPasswordComponent extends Helper {
  state = {
    data: {
      email: ""
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    const { state } = this.props.location;

    api
      .postMethod("forgotpassword", this.state.data)
      .then(function(response) {
        if (response.data.success === true) {
          console.log("checking");
          window.location = state ? state.from.pathname : "/";
          console.log("Forgot Password Success");
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
                  <button className="btn btn-danger auth-btn">submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ForgotPasswordComponent;
