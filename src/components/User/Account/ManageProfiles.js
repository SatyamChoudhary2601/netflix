import React, { Component } from "react";

import { Link, Redirect } from "react-router-dom";

import api from "../../../Environment";
import Helper from "../../Helper/helper";
import { withToastManager } from "react-toast-notifications";

import ToastDemo from "../../Helper/toaster";

class ManageProfilesComponent extends Helper {
  state = {
    renderManageProfile: "",
    data: {},
    renderAddProfile: "",
    loading: true,
    activeProfile: []
  };
  componentDidMount() {
    // view all sub profile
    this.viewProfiles();
  }
  handleClick = (data, event) => {
    event.preventDefault();
    console.log("Onclick trigged", data);
    this.setState({ renderManageProfile: 1 });
    this.setState({ data });
    console.log("Render", this.state.renderManageProfile);
    this.render();
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log("Submitted");
    const data = {
      sub_profile_id: this.state.data.id,
      name: this.state.data.name
    };
    console.log("formdata", data);
    api.postMethod("edit-sub-profile", data).then(response => {
      console.log("response", response);
      if (response.data.success === true) {
        // this.props.history.push("/manage-profiles");
        ToastDemo(this.props.toastManager, response.data.message, "success");
        window.location = "/manage-profiles";
      }
    });
  };

  handleDelete = event => {
    event.preventDefault();
    console.log("Submitted");
    const data = {
      sub_profile_id: this.state.data.id
    };
    console.log("formdata", data);
    api.postMethod("delete-sub-profile", data).then(response => {
      console.log("response", response);
      if (response.data.success === true) {
        window.location = "/manage-profiles";
        ToastDemo(this.props.toastManager, response.data.message, "success");
      }
    });
  };

  backToManageProfile = event => {
    event.preventDefault();
    this.setState({ renderManageProfile: 0 });
    this.setState({ renderAddProfile: 0 });
    console.log("Render", this.state.renderManageProfile);
    this.render();
  };

  addProfile = event => {
    event.preventDefault();
    this.setState({ renderAddProfile: 1 });
    this.setState({ renderManageProfile: 0 });
    this.setState({ data: {} });
    console.log("Render", this.state.renderManageProfile);
    this.render();
  };

  handleAddProfileSubmit = event => {
    event.preventDefault();
    console.log("Submitted");
    const data = {
      name: this.state.data.name
    };
    console.log("formdata", data);
    api.postMethod("add-profile", data).then(response => {
      console.log("response", response);
      if (response.data.success === true) {
        window.location = "/manage-profiles";
        ToastDemo(this.props.toastManager, response.data.message, "success");
      }
    });
  };

  renderProfile = activeProfile => {
    return (
      <React.Fragment>
        {activeProfile.map(detail => (
          <li className="profile" key={detail.id}>
            <Link onClick={event => this.handleClick(detail, event)} to="#">
              <div className="relative">
                <img
                  src="../assets/img/icon1.png"
                  className="profile-img"
                  alt="profile_img"
                />
                <div className="edit-overlay">
                  <div className="edit-icon-outline">
                    <i className="fas fa-pencil-alt" />
                  </div>
                </div>
              </div>
              <p className="profile-name">{detail.name}</p>
            </Link>
          </li>
        ))}
      </React.Fragment>
    );
  };

  render() {
    var bgImg = {
      backgroundImage: "url(../assets/img/bg.jpg)"
    };
    const { data, loading, activeProfile } = { ...this.state };
    let renderData;
    if (this.state.renderManageProfile === 1) {
      renderData = (
        <div className="main">
          <div className="view-profile">
            <div className="edit-profile-content">
              <div className="head-section">
                <h1 className="view-profiles-head">edit profiles</h1>
              </div>
              <form onSubmit={this.handleSubmit}>
                <div className="edit-profile-sec">
                  <div className="display-inline">
                    <div className="edit-left-sec">
                      <div className="edit-profile-imgsec">
                        <img src="../assets/img/icon1.png" alt="profile_img" />
                        <div className="edit-icon">
                          <div className="edit-icon-circle">
                            <i className="fas fa-pencil-alt" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="edit-right-sec">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          onChange={this.handleChange}
                          name="name"
                          value={data.name}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="button-topspace">
                  <button type="submit" className="white-btn">
                    save
                  </button>
                  <Link
                    to="#"
                    onClick={this.backToManageProfile}
                    className="grey-outline-btn"
                  >
                    cancel
                  </Link>
                  <Link
                    to="#"
                    onClick={this.handleDelete}
                    className="grey-outline-btn"
                  >
                    delete profile
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    } else if (this.state.renderAddProfile === 1) {
      renderData = (
        <div className="main">
          <div className="view-profile">
            <div className="edit-profile-content">
              <div className="head-section">
                <h1 className="view-profiles-head">Add profile</h1>
              </div>
              <form onSubmit={this.handleAddProfileSubmit}>
                <div className="edit-profile-sec">
                  <div className="display-inline">
                    <div className="edit-left-sec">
                      <div className="edit-profile-imgsec">
                        <img src="../assets/img/icon1.png" alt="profile_img" />
                        <div className="edit-icon">
                          <div className="edit-icon-circle">
                            <i className="fas fa-pencil-alt" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="edit-right-sec">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          onChange={this.handleChange}
                          name="name"
                          value={data.name}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="button-topspace">
                  <button type="submit" className="white-btn">
                    save
                  </button>
                  <Link
                    to="#"
                    onClick={this.backToManageProfile}
                    className="grey-outline-btn"
                  >
                    cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    } else {
      renderData = (
        <div className="main">
          <div className="view-profile">
            <div className="view-profile-content">
              <div className="head-section">
                <h1 className="view-profiles-head">manage profiles</h1>
              </div>
              <ul className="choose-profile">
                {loading ? "Loading" : this.renderProfile(activeProfile)}
                <li className="profile">
                  <Link to="#" onClick={this.addProfile}>
                    <div className="relative">
                      <div className="">
                        <i className="fa fa-plus-circle fa-5x" />
                      </div>
                    </div>
                    <p className="profile-name">Add Profile</p>
                  </Link>
                </li>
              </ul>
              <div>
                <Link to="/view-profiles" className="white-btn">
                  Done
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="common-bg-img" style={bgImg}>
        <div className="account-page-header">
          <Link to="/home">
            <img
              src="../assets/img/streamview1.png"
              className="logo-img"
              alt="logo_img"
            />
          </Link>
        </div>
        {renderData}
      </div>
    );
  }
}

export default withToastManager(ManageProfilesComponent);
