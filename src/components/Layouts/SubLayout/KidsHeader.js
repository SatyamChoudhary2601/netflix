import React, {Component} from 'react';

import {Link} from 'react-router-dom';

const $ = window.$;

class KidsHeader extends Component {

    constructor(props) {

        super(props);

        this.state = {
            
            isAuthenticated : this.props.data,
            
        };

    }

    componentDidMount() {
        var headerHeight = $('#header').outerHeight();

        $('.header-height').height(headerHeight);

        // Call api function

    }

    render() {

        return (
            <div>
                <nav className="navbar navbar-expand navbar-dark kids-nav fixed-top" id="header">
                    <span className="menu-icon" id="menu_icon">
                        <img src="assets/img/menu-black.png" alt="menu_img" />
                    </span>
                    <Link className="navbar-brand abs" to="/home">
                        <img src="assets/img/streamview.png" className="logo-img desktop-logo" alt="Streamview" />
                        <img src="assets/img/streamview-icon.png" className="logo-img mobile-logo" alt="Streamview" />
                    </Link>
                    <ul className="navbar-nav hidden-kids-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="#">Children</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" data-toggle="dropdown">categories</Link>
                            <div class="dropdown-menu kids-dropmenu">
                                <div className="row m-0">
                                    <div className="col-md-3 p-0">
                                        <ul className="kids-category-list">
                                            <li>characters</li>
                                            <li>originals</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-9 p-0">
                                        <ul className="kids-category-list2">
                                            <li className="section">
                                                <ul className="kids-category-list3">
                                                    <li>christmas</li>
                                                    <li>action</li>
                                                    <li>adventures</li>
                                                    <li>animals</li>
                                                    <li>sports</li>
                                                </ul>
                                            </li>
                                            <li className="section">
                                                <ul className="kids-category-list3">
                                                    <li>christmas</li>
                                                    <li>action</li>
                                                    <li>adventures</li>
                                                    <li>animals</li>
                                                    <li>sports</li>
                                                </ul>
                                            </li>
                                            <li className="section">
                                                <ul className="kids-category-list3">
                                                    <li>christmas</li>
                                                    <li>action</li>
                                                    <li>adventures</li>
                                                    <li>animals</li>
                                                    <li>sports</li>
                                                </ul>
                                            </li>
                                            <li className="section">
                                                <ul className="kids-category-list3">
                                                    <li>christmas</li>
                                                    <li>action</li>
                                                    <li>adventures</li>
                                                    <li>animals</li>
                                                    <li>sports</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <form>
                                <input type="text" name="search" placeholder="title.." className="form-control white-search-form" />
                            </form>
                        </li>
                        <li className="nav-item mobile-view">
                            <Link className="nav-link" to="#">
                                <img src="assets/img/icon1.png" className="nav-profile-img" />
                            </Link>
                        </li>
                        <li className="nav-item mobile-view">
                            <Link className="nav-link" to="#">
                                <button class="btn btn-danger exit-btn">exit Children</button>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="header-height"></div>

                <div className="mobile-sidebar white-sidebar" id="menu_content">
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
                            <li>
                                <Link to="/">categories</Link>
                            </li>
                            <li>
                                <Link to="/">originals</Link>
                            </li>
                            <li>
                                <Link to="/">exit chidren</Link>
                            </li>
                            <li className="line"></li>
                            <li>
                                <Link to="/home">holidays</Link>
                            </li>
                            <li>
                                <Link to="#">actions</Link>
                            </li>
                            <li>
                                <Link to="#">adventures</Link>
                            </li>
                            <li>
                                <Link to="#">animals</Link>
                            </li>
                            <li>
                                <Link to="#">sports</Link>
                            </li>
                            <li>
                                <Link to="#">sports</Link>
                            </li>
                            <li>
                                <Link to="#">cute</Link>
                            </li>
                            <li>
                                <Link to="#">funny</Link>
                            </li>
                            <li>
                                <Link to="#">animated</Link>
                            </li>
                            <li>
                                <Link to="#">early learning</Link>
                            </li>
                            <li>
                                <Link to="#">fantasy</Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        );

    }

}


export default KidsHeader;

