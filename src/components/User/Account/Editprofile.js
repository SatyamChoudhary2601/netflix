import React, { Component } from "react";

import { Link } from "react-router-dom";
import configuration from "react-global-configuration";

class EditProfilesComponent extends Component {
    render() {
        var bgImg = {
            backgroundImage: "url(../assets/img/bg.jpg)"
        };

        return (
            <div className="common-bg-img" style={bgImg}>
                <div className="account-page-header">
                    <Link to="/home">
                        <img
                            src={configuration.get("configData.site_logo")}
                            className="logo-img"
                            alt="logo_img"
                        />
                    </Link>
                </div>

                <div className="main">
                    <div className="view-profile">
                        <div className="edit-profile-content">
                            <div className="head-section">
                                <h1 className="view-profiles-head">
                                    edit profiles
                                </h1>
                            </div>
                            <form action="view-profiles.html">
                                <div className="edit-profile-sec">
                                    <div className="display-inline">
                                        <div className="edit-left-sec">
                                            <div className="edit-profile-imgsec">
                                                <img
                                                    src="../assets/img/icon1.png"
                                                    alt="profile_img"
                                                />
                                                <div className="edit-icon">
                                                    <input
                                                        type="file"
                                                        className="form-control"
                                                    />
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
                                    <button className="grey-outline-btn">
                                        cancel
                                    </button>
                                    <button className="grey-outline-btn">
                                        delete profile
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditProfilesComponent;
