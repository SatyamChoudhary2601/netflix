import React, {Component} from 'react';

import {Link} from 'react-router-dom';

class ManageProfilesComponent extends Component{
    render(){
        var bgImg = {
            backgroundImage: 'url(../assets/img/bg.jpg)'
        };
        return(
            <div className="common-bg-img" style={bgImg}>

                <div className="account-page-header">
                    <Link to="../home.html">
                        <img src="../assets/img/streamview1.png" className="logo-img" alt="logo_img" />
                    </Link>
                </div>

                <div className="main">
                    <div className="view-profile">
                        <div className="view-profile-content">
                            <div className="head-section">
                                <h1 className="view-profiles-head">manage profiles</h1>
                            </div>
                            <ul className="choose-profile">
                                <li className="profile">
                                    <Link to="edit-profile.html">
                                        <div className="relative">
                                            <img src="../assets/img/icon1.png" className="profile-img" alt="profile_img" />
                                            <div className="edit-overlay">
                                                <div className="edit-icon-outline">
                                                    <i className="fas fa-pencil-alt"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="profile-name">Ronan</p>
                                    </Link>
                                </li>
                                <li className="profile">
                                    <Link to="edit-profile.html">
                                        <div className="relative">
                                            <img src="../assets/img/icon2.png" className="profile-img" alt="profile_img" />
                                            <div className="edit-overlay">
                                                <div className="edit-icon-outline">
                                                    <i className="fas fa-pencil-alt"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="profile-name">Brayden</p>
                                    </Link>
                                </li>
                                <li className="profile">
                                    <Link to="edit-profile.html">
                                        <div className="relative">
                                            <img src="../assets/img/icon3.png" className="profile-img" alt="profile_img" />
                                            <div className="edit-overlay">
                                                <div className="edit-icon-outline">
                                                    <i className="fas fa-pencil-alt"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="profile-name">Hugo</p>
                                    </Link>
                                </li>
                                <li className="profile">
                                    <Link to="edit-profile.html">
                                        <div className="relative">
                                            <img src="../assets/img/icon4.png" className="profile-img" alt="profile_img" />
                                            <div className="edit-overlay">
                                                <div className="edit-icon-outline">
                                                    <i className="fas fa-pencil-alt"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="profile-name">Diego</p>
                                    </Link>
                                </li>
                                <li className="profile">
                                    <Link to="edit-profile.html">
                                        <div className="relative">
                                            <img src="../assets/img/icon5.png" className="profile-img" alt="profile_img" />
                                            <div className="edit-overlay">
                                                <div className="edit-icon-outline">
                                                    <i className="fas fa-pencil-alt"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="profile-name">Antonio</p>
                                    </Link>
                                </li>
                            </ul>
                            <div>
                                <Link to="view-profiles.html" className="white-btn">Done</Link>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default ManageProfilesComponent;