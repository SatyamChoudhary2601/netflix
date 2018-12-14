import React, {Component} from 'react';

import {Link} from 'react-router-dom';

class ViewProfilesComponent extends Component{
    render(){
        var bgImg = {
            backgroundImage: 'url(../assets/img/bg.jpg)'
        };

        return(
            <div>
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
                                    <h1 className="view-profiles-head">who's watching?</h1>
                                </div>
                                <ul className="choose-profile">
                                    <li className="profile">
                                        <Link to="../home.html">
                                            <img src="../assets/img/icon1.png" className="profile-img" alt="profile_img" />
                                            <p className="profile-name">Ronan</p>
                                        </Link>
                                    </li>
                                    <li className="profile">
                                        <Link to="../home.html">
                                            <img src="../assets/img/icon2.png" className="profile-img" alt="profile_img" />
                                            <p className="profile-name">Brayden</p>
                                        </Link>
                                    </li>
                                    <li className="profile">
                                        <Link to="../home.html">
                                            <img src="../assets/img/icon3.png" className="profile-img" alt="profile_img" />
                                            <p className="profile-name">Hugo</p>
                                        </Link>
                                    </li>
                                    <li className="profile">
                                        <Link to="../home.html">
                                            <img src="../assets/img/icon4.png" className="profile-img" alt="profile_img" />
                                            <p className="profile-name">Diego</p>
                                        </Link>
                                    </li>
                                    <li className="profile">
                                        <Link to="../home.html">
                                            <img src="../assets/img/icon5.png" className="profile-img" alt="profile_img" />
                                            <p className="profile-name">Antonio</p>
                                        </Link>
                                    </li>
                                </ul>
                                <div>
                                    <Link to="manage-profiles.html" className="grey-outline-btn">manage profiles</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewProfilesComponent;