import React, { Component } from "react";

import { Link } from "react-router-dom";

class LandingPage extends Component {
  // constructor(props) {

  //     super(props);

  // }

  componentDidMount() {
    // Call api function
  }

  render() {
    return (
      <div>
        <div className="landing-page-header">
          <Link to="/">
            <img
              src="assets/img/streamview1.png"
              className="site-logo"
              alt="site_logo"
            />
          </Link>
          <Link to="/login" className="btn btn-danger">
            sign in
          </Link>
        </div>
        <div className="landing-banner-sec">
          <img
            className="landing-banner-img"
            src="assets/img/banner_small.jpg"
            srcSet="assets/img/banner_small.jpg 1000w, 
                                assets/img/banner_medium.jpg 1500w, 
                                assets/img/banner_large.jpg 1800w"
            alt="banner_image"
          />
          <div className="banner-black-overlay">
            <div className="text-center">
              <h1 className="benner-text-head">see what’s next.</h1>
              <h4 className="banner-text-para">
                WATCH anywhere. CANCEL at any time.
              </h4>
              <Link to="/register" className="btn btn-danger banner-large-btn">
                join free for a month
                <i className="fas fa-chevron-right ml-3" />
              </Link>
            </div>
          </div>
        </div>

        <div className="main">
          <div className="landing-nav">
            <div className="landing-nav-list">
              <ul className="nav nav-pills" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="pill"
                    href="#home"
                  >
                    <p className="m-0">
                      <i className="fas fa-copy" />
                    </p>
                    <p className="hide-xs landing-nav-list-text">
                      No commitments
                      <br />
                      Cancel online at any time
                    </p>
                    <p className="show-xs landing-nav-list-text-xs">cancel</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="pill" href="#menu1">
                    <p className="m-0">
                      <i className="fas fa-mobile-alt" />
                    </p>
                    <p className="hide-xs landing-nav-list-text">
                      Watch anywhere
                    </p>
                    <p className="show-xs landing-nav-list-text-xs">devices</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="pill" href="#menu2">
                    <i className="fas fa-tags" />
                    <p className="hide-xs landing-nav-list-text">
                      Pick your price
                    </p>
                    <p className="show-xs landing-nav-list-text-xs">devices</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="black-bg">
            <div className="tab-module-wrapper">
              <div className="tab-content">
                <div id="home" className="tab-pane active">
                  <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 center-align">
                      <h2 className="cancel-text">
                        if you decide Netflix isn't for you – no problem. No
                        commitment. Cancel online at any time.
                      </h2>
                      <Link
                        to={"/register"}
                        className="btn btn-danger join-btn"
                      >
                        join free for a month
                      </Link>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                      <div className="cancel-online-img">
                        <img src="assets/img/cancel.png" alt="Canel" />
                      </div>
                    </div>
                  </div>
                </div>
                <div id="menu1" className="tab-pane fade">
                  <div className="row center-align">
                    <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8">
                      <h3 className="devices-text">
                        watch TV programmes and films at any time, anywhere –
                        personalised for you.
                      </h3>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                      <Link
                        to={"/register"}
                        className="btn btn-danger join-btn"
                      >
                        join free for a month
                      </Link>
                    </div>
                  </div>
                  <div className="row text-center">
                    <div className="col-md-12 col-lg-4 col-xl-4">
                      <div className="devices-img">
                        <img src="assets/img/tv.png" alt="Tv" />
                      </div>
                      <h4 className="device-img-txt">watch on your TV</h4>
                      <p className="device-img-para">
                        smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                        Blu-ray players and more.
                      </p>
                    </div>
                    <div className="col-md-12 col-lg-4 col-xl-4">
                      <div className="devices-img">
                        <img src="assets/img/tab.png" alt="Tab" />
                      </div>
                      <h4 className="device-img-txt">
                        watch instantly or download for later
                      </h4>
                      <p className="device-img-para">
                        Available on phone and tablet, wherever you go.
                      </p>
                    </div>
                    <div className="col-md-12 col-lg-4 col-xl-4">
                      <div className="devices-img">
                        <img src="assets/img/lap.png" alt="Lap" />
                      </div>
                      <h4 className="device-img-txt">use any computer</h4>
                      <p className="device-img-para">
                        Watch instantly in your browser.
                      </p>
                    </div>
                  </div>
                </div>
                <div id="menu2" className="tab-pane fade">
                  <div className="text-center">
                    <h3 className="devices-text">
                      Streamview is programmed to start subscription based
                      on-demand video streaming sites like Netflix and Amazon
                      Prime. Any business idea with this core concept can be
                      easily developed using Streamview. From admin uploading a
                      video to users making payment to users watching the
                      videos, it’s all automated by a dynamic and responsive
                      admin panel with multiple monetization channels.
                    </h3>
                    <Link to={"/register"} className="btn btn-danger join-btn">
                      join free for a month
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
