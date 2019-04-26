import React, { Component } from "react";

import { Link } from "react-router-dom";
import Helper from "../../Helper/helper";
import ContentLoader from "../../Static/contentLoader";

class ViewProfilesComponent extends Helper {
  state = {
    loading: true,
    activeProfile: null
  };
  componentDidMount() {
    // view all sub profile

    this.viewProfiles();
  }

  handleClick = (profile_id, event) => {
    event.preventDefault();

    localStorage.setItem("active_profile_id", profile_id);
  };

  renderProfile = activeProfile => {
    // let renderActiveProfile;
    // console.log("activeProfile ", activeProfile);
    return (
      <div>
        {activeProfile.map(detail => (
          <li
            className="profile"
            key={detail.id}
            onClick={event => this.handleClick(detail.id, event)}
          >
            <Link to="/home">
              <img
                src="../assets/img/icon1.png"
                className="profile-img"
                alt="profile_img"
              />
              <p className="profile-name">{detail.name}</p>
            </Link>
          </li>
        ))}
      </div>
    );
  };

  render() {
    var bgImg = {
      backgroundImage: "url(../assets/img/bg.jpg)"
    };
    const { loading, activeProfile } = this.state;

    return (
      <div>
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

          <div className="main">
            <div className="view-profile">
              <div className="view-profile-content">
                <div className="head-section">
                  <h1 className="view-profiles-head">who's watching?</h1>
                </div>
                <ul className="choose-profile">
                  {loading ? (
                    <ContentLoader />
                  ) : (
                    this.renderProfile(activeProfile)
                  )}
                </ul>
                <div>
                  <Link to="/manage-profiles" className="grey-outline-btn">
                    manage profiles
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewProfilesComponent;
