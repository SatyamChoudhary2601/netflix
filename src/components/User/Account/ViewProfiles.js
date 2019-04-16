import React, { Component } from "react";

import { Link } from "react-router-dom";

import api from "../../../Environment";

class ViewProfilesComponent extends Component {
  state = {
    data: []
  };
  async componentDidMount() {
    // view all sub profile
    let data = { ...this.state.data };
    await api.postMethod("active-profiles").then(function(response) {
      console.log("response", response);
      if (response.data.success === true) {
        data = response.data.data;
      }
    });
    this.setState({ data });
  }
  render() {
    var bgImg = {
      backgroundImage: "url(../assets/img/bg.jpg)"
    };

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
                  {this.state.data.map(detail => (
                    <li className="profile" key={detail.id}>
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
