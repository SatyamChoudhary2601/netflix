import React, { Component } from "react";
import Helper from "../../Helper/helper";
import { withToastManager } from "react-toast-notifications";
import api from "../../../Environment";
import ToastDemo from "../../Helper/toaster";

class EditAccountComponent extends Helper {
  state = {
    data: null,
    loading: true,
    loadingContent: null,
    buttonDisable: false
  };
  componentDidMount() {
    this.getUserDetails();
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      loadingContent: "Loading... Please wait..",
      buttonDisable: true
    });
    let userDetails = { ...this.state.data };
    const data = {
      name: userDetails.name,
      email: userDetails.email,
      mobile: userDetails.mobile
    };

    api.postMethod("updateProfile", data).then(response => {
      if (response.data.success == true) {
        this.props.history.push("/account");
        ToastDemo(this.props.toastManager, response.data.message, "success");
        this.setState({ loadingContent: null, buttonDisable: false });
      } else {
        ToastDemo(
          this.props.toastManager,
          response.data.error_messages,
          "error"
        );
        this.setState({ loadingContent: null, buttonDisable: false });
      }
    });
  };
  render() {
    const { loading, data } = this.state;
    var bgImg = {
      backgroundImage: "url(../assets/img/bg.jpg)"
    };
    return (
      <div>
        <div className="common-bg-img" style={bgImg}>
          <div className="main">
            <div className="row">
              <div className="col-sm-9 col-md-7 col-lg-5 col-xl-4 auto-margin">
                <div className="register-box">
                  <h3 className="register-box-head">edit profile</h3>
                  <form onSubmit={this.handleSubmit} className="auth-form">
                    <div className="form-group">
                      <label htmlFor="name">name</label>
                      <input
                        type="text"
                        onChange={this.handleChange}
                        className="form-control"
                        id="name"
                        name="name"
                        value={loading ? "" : data.name}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email address</label>
                      <input
                        type="text"
                        onChange={this.handleChange}
                        className="form-control"
                        id="email"
                        name="email"
                        value={loading ? "" : data.email}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="mobile">mobile number</label>
                      <input
                        type="text"
                        onChange={this.handleChange}
                        className="form-control"
                        id="mobile"
                        name="mobile"
                        value={loading ? "" : data.mobile}
                      />
                    </div>
                    <button
                      className="btn btn-danger auth-btn mt-4"
                      disabled={this.state.buttonDisable}
                    >
                      {this.state.loadingContent != null
                        ? this.state.loadingContent
                        : "save"}
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

export default withToastManager(EditAccountComponent);
