import React, { Component } from "react";

import { Link } from "react-router-dom";
import Helper from "../../Helper/helper";
import { apiConstants } from "../../Constant/constants";

import api from "../../../Environment";

const $ = window.$;

class UserHeader extends Helper {
  constructor(props) {
    super(props);
  }
  state = {
    loading: true,
    activeProfile: null,
    loadingCategory: true,
    categories: null
  };

  componentDidMount() {
    var headerHeight = $("#header").outerHeight();

    $(".header-height").height(headerHeight);
    this.viewProfiles();
    let inputData = {
      sub_profile_id: localStorage.getItem("active_profile_id")
    };
    api
      .postMethod("v4/categories/list", inputData)
      .then(response => {
        if (response.data.success === true) {
          let categories = response.data.data;
          console.log("response category", categories);
          this.setState({ loadingCategory: false, categories: categories });
        } else {
          console.log("Error", response);
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  changeProfile = (profile, event) => {
    event.preventDefault();
    console.log("OnClicked", profile.id);
    localStorage.removeItem("active_profile_id");
    localStorage.setItem("active_profile_id", profile.id);
    window.location = "/home";
  };

  renderList = activeProfile => {
    return (
      <div>
        {activeProfile.map(profile =>
          profile.id == localStorage.getItem("active_profile_id") ? (
            ""
          ) : (
            <Link
              className="dropdown-item"
              key={profile.id}
              to="/view-profiles"
              onClick={event => this.changeProfile(profile, event)}
            >
              <div className="display-inline">
                <div className="left-sec">
                  <img src={profile.picture} alt="profile_img" />
                </div>
                <div className="right-name">{profile.name}</div>
              </div>
            </Link>
          )
        )}
      </div>
    );
  };

  render() {
    const { loading, activeProfile, loadingCategory, categories } = this.state;
    return (
      <div>
        <nav
          className="navbar navbar-expand navbar-dark main-nav fixed-top"
          id="header"
        >
          <span className="menu-icon" id="menu_icon">
            <img src="assets/img/menu.png" alt="menu_img" />
          </span>
          <Link className="navbar-brand abs" to="/home">
            <img
              src="assets/img/streamview.png"
              className="logo-img desktop-logo"
              alt="Streamview"
            />
            <img
              src="assets/img/streamview-icon.png"
              className="logo-img mobile-logo"
              alt="Streamview"
            />
          </Link>
          <ul className="navbar-nav mobile-nav">
            <li className="nav-item active dropdown">
              <Link
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                to="#"
              >
                browse
              </Link>
              <div className="dropdown-menu browse">
                {loadingCategory
                  ? ""
                  : categories.map(category => (
                      <Link className="dropdown-item" to="#">
                        {category.name}
                      </Link>
                    ))}
              </div>
            </li>
          </ul>
          <ul className="navbar-nav desktop-nav ">
            <li className="nav-item active">
              <Link className="nav-link" to={"/home"}>
                home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/genre/${apiConstants.SERIES}`}>
                Series
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/genre/${apiConstants.MOVIES}`}>
                Movies
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                to="#"
              >
                Browse
              </Link>
              <div className="dropdown-menu browse">
                {loadingCategory
                  ? ""
                  : categories.map(category => (
                      <Link
                        key={category.category_id}
                        className="dropdown-item"
                        to={`/category/${category.category_id}`}
                      >
                        {category.name}
                      </Link>
                    ))}
              </div>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <form>
                <input
                  type="text"
                  name="search"
                  placeholder="title.."
                  className="form-control search-form"
                />
              </form>
            </li>
            <li className="nav-item dropdown mobile-view">
              <Link
                className="nav-link notification dropdown-toggle"
                to="#"
                data-toggle="dropdown"
              >
                <div className="notification-count">9</div>
                <i className="fas fa-bell" />
              </Link>
              <div className="dropdown-menu notification-drop">
                <div className="notification-onoff">
                  notification
                  <div className="float-right">
                    <label className="switch">
                      <input type="checkbox" defaultChecked />
                      <span className="switch-slider round" />
                    </label>
                  </div>
                  <div className="clearfix" />
                </div>
                <div className="notification-drop-height">
                  <Link className="dropdown-item" to="#">
                    <div className="display-inline">
                      <div className="video-left">
                        <img
                          src="assets/img/notification1.jpg"
                          alt="Notification"
                        />
                      </div>
                      <div className="video-right-details">
                        <h5>duck duck goose new arraival</h5>
                        <p>6 days ago</p>
                      </div>
                    </div>
                  </Link>
                  <Link className="dropdown-item" to="#">
                    <div className="display-inline">
                      <div className="video-left">
                        <img
                          src="assets/img/notification2.jpg"
                          alt="Notification"
                        />
                      </div>
                      <div className="video-right-details">
                        <h5>captain americLink new arraival</h5>
                        <p>6 days ago</p>
                      </div>
                    </div>
                  </Link>
                  <Link className="dropdown-item" to="#">
                    <div className="display-inline">
                      <div className="video-left">
                        <img
                          src="assets/img/notification1.jpg"
                          alt="Notification"
                        />
                      </div>
                      <div className="video-right-details">
                        <h5>duck duck goose new arraival</h5>
                        <p>6 days ago</p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="notification-seeall">
                  <Link to="#">
                    seLink all
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown mobile-view">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                data-toggle="dropdown"
              >
                <img
                  src="assets/img/icon1.png"
                  className="nav-profile-img"
                  alt="profile_img"
                />
              </Link>
              <div className="dropdown-menu profile-drop">
                <div className="pro-sec-height">
                  {loading ? "Loading" : this.renderList(activeProfile)}

                  <Link className="dropdown-item" to="/manage-profiles">
                    manage profiles
                  </Link>
                </div>
                <p className="profile-drop-line" />
                <Link className="dropdown-item" to="/account">
                  your account
                </Link>
                <Link className="dropdown-item" to="/payment-history">
                  payment history
                </Link>
                <Link className="dropdown-item" to={"/logout"}>
                  signout
                </Link>
              </div>
            </li>
          </ul>
        </nav>
        <div className="header-height" />

        <div className="mobile-sidebar" id="menu_content">
          <div className="sidebar-content">
            <div className="p-3">
              <Link to="/view-profiles">
                <div className="display-inline">
                  <div className="left-sec">
                    <img src="assets/img/icon1.png" alt="User " />
                  </div>
                  <div className="right-name">
                    <h5>ronan</h5>
                    <h6>switch profiles</h6>
                  </div>
                </div>
              </Link>
            </div>
            <ul className="sidebar-menu">
              <li className="active">
                <Link to="/account">account</Link>
              </li>
              <li>
                <Link to="/">logout</Link>
              </li>
              <li className="line" />
              <li>
                <Link to="/home">home</Link>
              </li>
              <li>
                <Link to="/sub-category">my list</Link>
              </li>
              <li>
                <Link to="/sub-category">series</Link>
              </li>
              <li>
                <Link to="/sub-category">comedies</Link>
              </li>
              <li>
                <Link to="/sub-category">crime flims</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default UserHeader;
