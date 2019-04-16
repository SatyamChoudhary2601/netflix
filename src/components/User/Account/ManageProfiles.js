import React, { Component } from "react";

import { Link } from "react-router-dom";

import api from "../../../Environment";

class ManageProfilesComponent extends Component {
  state = {
    data: [],
    renderDetails: ""
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
  handleClick = (detail, event) => {
    event.preventDefault();
    console.log("Onclick trigged", detail);
    this.setState({ renderDetails: 1 });
    console.log("Render", this.state.renderDetails);
    this.render();
  };
  render() {
    var bgImg = {
      backgroundImage: "url(../assets/img/bg.jpg)"
    };
    let renderData;
    if (this.state.renderDetails === 1) {
      renderData = (
        <div className="main">
          <div className="view-profile">
            <div className="edit-profile-content">
              <div className="head-section">
                <h1 className="view-profiles-head">edit profiles</h1>
              </div>
              <form action="view-profiles.html">
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
                          placeholder="ronan"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="button-topspace">
                  <button className="white-btn">save</button>
                  <button className="grey-outline-btn">cancel</button>
                  <button className="grey-outline-btn">delete profile</button>
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
                {this.state.data.map(detail => (
                  <li className="profile" key={detail.id}>
                    <Link
                      onClick={event => this.handleClick(detail, event)}
                      to="#"
                    >
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

export default ManageProfilesComponent;
