import React, { Component } from "react";
import Helper from "../../Helper/helper";

class ChangePasswordComponent extends Helper {
  state = {
    data: {}
  };

  handleSubmit = event => {
    event.preventDefault();
    this.changePassword();
  };
  render() {
    var bgImg = {
      backgroundImage: "url(../assets/img/bg.jpg)"
    };
    let { data } = this.state;
    return (
      <div>
        <div className="common-bg-img" style={bgImg}>
          <div className="main">
            <div className="row">
              <div className="col-sm-9 col-md-7 col-lg-5 col-xl-4 auto-margin">
                <div className="register-box">
                  <h3 className="register-box-head">change password</h3>
                  <form className="auth-form" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="old">old password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="old"
                        name="old_password"
                        value={data.old_password}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="new">new password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="new"
                        name="password"
                        value={data.password}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="confirm">confirm password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="confirm"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        onChange={this.handleChange}
                      />
                    </div>
                    <button className="btn btn-danger auth-btn mt-4">
                      change password
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChangePasswordComponent;
