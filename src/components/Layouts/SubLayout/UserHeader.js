import React, {Component} from 'react';

import {Link} from 'react-router-dom';

class UserHeader extends Component {

    constructor(props) {

        super(props);

        this.state = {
            
            isAuthenticated : this.props.data,
            
        };

    }

    componentDidMount() {

        // Call api function

    }

    render() {

        return (
            <div>
                <nav className="navbar navbar-expand navbar-dark trans-bg main-nav fixed-top" id="header">
                    <span className="menu-icon" id="menu_icon">
                        <img src="assets/img/menu.png" alt="menu_img" />
                    </span>
                    <Link className="navbar-brand abs" to="/home">
                        <img src="assets/img/streamview.png" className="logo-img desktop-logo" alt="Streamview" />
                        <img src="assets/img/streamview-icon.png" className="logo-img mobile-logo" alt="Streamview" />
                    </Link>
                    <ul className="navbar-nav mobile-nav">
                        <li className="nav-item active dropdown">
                            <Link className="nav-link dropdown-toggle" data-toggle="dropdown" to="#">browse</Link>
                            <div className="dropdown-menu browse">
                                <Link className="dropdown-item" to="#">home</Link>
                                <Link className="dropdown-item" to="#">tV programmes</Link>
                                <Link className="dropdown-item" to="#">flims</Link>
                                <Link className="dropdown-item" to="#">recently added</Link>
                                <Link className="dropdown-item" to="#">my list</Link>
                            </div>
                        </li>
                    </ul>
                    <ul className="navbar-nav desktop-nav ">
                        <li className="nav-item active">
                            <Link className="nav-link" to="#">home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">tV programmes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">flims</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">recently added</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">my list</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <form>
                                <input type="text" name="search" placeholder="title.." className="form-control search-form" />
                            </form>
                        </li>
                        <li className="nav-item dropdown mobile-view">
                            <Link className="nav-link notification dropdown-toggle" to="#" data-toggle="dropdown">
                                <div className="notification-count">9</div>
                                <i className="fas fa-bell"></i>
                            </Link>
                            <div className="dropdown-menu notification-drop">
                                <div className="notification-onoff">
                                    notification
                                    <div className="float-right">
                                        <label className="switch">
                                            <input type="checkbox" defaultChecked />
                                            <span className="switch-slider round"></span>
                                        </label>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="notification-drop-height">
                                    <Link className="dropdown-item" to="#">
                                        <div className="display-inline">
                                            <div className="video-left">
                                                <img src="assets/img/notification1.jpg" alt="Notification"/>
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
                                                <img src="assets/img/notification2.jpg" alt="Notification"/>
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
                                                <img src="assets/img/notification1.jpg" alt="Notification"/>
                                            </div>
                                            <div className="video-right-details">
                                                <h5>duck duck goose new arraival</h5>
                                                <p>6 days ago</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="notification-seeall">
                                    <Link to="#">seLink all<i className="fas fa-chevron-right"></i></Link>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item dropdown mobile-view">
                            <Link className="nav-link dropdown-toggle" to="#" data-toggle="dropdown">
                                <img src="assets/img/icon1.png" className="nav-profile-img" />
                            </Link>
                            <div className="dropdown-menu profile-drop">
                                <div className="pro-sec-height">
                                    <Link className="dropdown-item" to="/view-profiles">
                                        <div className="display-inline">
                                            <div className="left-sec"><img src="assets/img/icon2.png" /></div>
                                            <div className="right-name">ronan</div>
                                        </div>
                                    </Link>
                                    <Link className="dropdown-item" to="/view-profiles">
                                        <div className="display-inline">
                                            <div className="left-sec"><img src="assets/img/icon3.png" /></div>
                                            <div className="right-name">brayden</div>
                                        </div>
                                    </Link>
                                    <Link className="dropdown-item" to="/view-profiles">
                                        <div className="display-inline">
                                            <div className="left-sec"><img src="assets/img/icon4.png" /></div>
                                            <div className="right-name">hugo</div>
                                        </div>
                                    </Link>
                                    <Link className="dropdown-item" to="/view-profiles">
                                        <div className="display-inline">
                                            <div className="left-sec"><img src="assets/img/icon5.png" alt=""/></div>
                                            <div className="right-name">diego</div>
                                        </div>
                                    </Link>
                                    <Link className="dropdown-item" to="/manage-profiles">manage profiles</Link>
                                </div>
                                <p className="profile-drop-line"></p>
                                <Link className="dropdown-item" to="/account">your account</Link>
                                <Link className="dropdown-item" to="/payment-history">payment history</Link>
                                <Link className="dropdown-item" to="/">signout</Link>
                            </div>
                        </li>
                    </ul>
                </nav>
                <div className="header-height"></div>

                <div className="mobile-sidebar" id="menu_content">
                    <div className="sidebar-content">
                        <div className="p-3">
                            <Link to="/view-profiles">
                                <div className="display-inline">
                                    <div className="left-sec"><img src="assets/img/icon1.png" alt="User "/></div>
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
                            <li className="line"></li>
                            <li>
                                <Link to="/home">home</Link>
                            </li>
                            <li>
                                <Link to="#">my list</Link>
                            </li>
                            <li>
                                <Link to="#">series</Link>
                            </li>
                            <li>
                                <Link to="#">comedies</Link>
                            </li>
                            <li>
                                <Link to="#">crime flims</Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        );

    }

}


export default UserHeader;

