import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "./LatestLandingPageResponsive.css";
import "./LatestLandingPage.css";
import BannerImageBg from "./banner-new-bg.jpg";
import configuration from "react-global-configuration";
import { apiConstants } from "../../components/Constant/constants";
import { translate, getLanguage, t } from "react-multi-lang";
import LatestFooter from "./LatestFooter";
import Footer from "../Layouts/SubLayout/Footer";

class LatestLandingPage extends Component {
  state = {
    HomeSettings: [],
    loading: true,
  };
  componentDidMount() {
    this.fetchConfig();
  }

  async fetchConfig() {
    const response = await fetch(apiConstants.homeSettingsUrl);
    const homeResonse = await response.json();

    this.setState({
      loading: false,
      HomeSettings: homeResonse.data,
    });
  }
  render() {
    const { loading, HomeSettings } = this.state;
    if (
      localStorage.getItem("userId") &&
      localStorage.getItem("active_profile_id") &&
      localStorage.getItem("accessToken")
    )
      return <Redirect to="/home" />;
    return (
      <>
        <div
          className="latest-landing-sec"
          style={{
            backgroundImage: `url(${HomeSettings.home_page_bg_image})`,
          }}
        >
          <div className="latest-landing-header">
            <img
              src={configuration.get("configData.site_logo")}
              className="new-logo"
              alt={configuration.get("configData.site_name")}
            />
            <Link to="/login" className="signin-btn">
              {t("signin")}
            </Link>
          </div>
          <div className="latest-banner-content">
            <div className="latest-banner-content-info">
              <h1 className="banner-title">
                {HomeSettings.home_banner_heading}
              </h1>
              <h2 className="banner-subtitle">
                Watch anywhere. Cancel anytime.
              </h2>
              <p className="banner-desc">
                {HomeSettings.home_banner_description}
              </p>
            </div>
            <div className="latest-banner-content-info-form">
              <ul className="list-unstyled banner-theme-form">
                {/* <li>
                  <form className="theme-form-sec">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email address"
                      />
                    </div>
                  </form>
                </li> */}
                <li>
                  <button className="btn btn-search">
                    <Link to="/register">
                      {t("getting_started")}{" "}
                      <i className="fas fa-chevron-right ml-2"></i>
                    </Link>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="latest-landing-about-sec">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="about-details">
                  <h2 className="about-title">Enjoy on your TV.</h2>
                  <h4 className="about-desc">
                    Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                    Blu-ray players and more.
                  </h4>
                </div>
              </div>
              <div className="col-md-6">
                <div className="tv-img-sec">
                  <img src="assets/img/tv-1.png" className="tv-img" />
                </div>
                <div className="about-video-sec">
                  <video
                    className="our-about-card-video"
                    autoplay="true"
                    playsinline=""
                    muted=""
                    loop="true"
                    id="vid"
                  >
                    <source
                      src="assets/img/video-tv-in-0819.m4v"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="latest-download-sec">
          <div className="container">
            <div className="row">
              <div className="col-md-6 d-block d-sm-none">
                <div className="download-details">
                  <h2 className="download-title">
                    Download your shows to watch offline.
                  </h2>
                  <h4 className="download-desc">
                    Save your favourites easily and always have something to
                    watch.
                  </h4>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mobile-img-sec">
                  <img src="assets/img/mobile.jpg" className="mobile-img" />
                </div>
                <div className="our-download-card">
                  <div className="our-download-info">
                    <div className="our-download-card-image">
                      <img
                        alt=""
                        src="assets/img/boxshot.png"
                        className="book-img"
                      />
                    </div>
                    <div className="our-download-card-text">
                      <h4 className="download-sub-title">Stranger Things</h4>
                      <p className="download-sub-desc">Downloading...</p>
                    </div>
                  </div>
                  <div className="download-gif-img-sec">
                    <img
                      src="assets/img/download-icon.gif"
                      className="download-gif-img"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-none d-sm-block">
                <div className="download-details">
                  <h2 className="download-title">
                    Download your shows to watch offline.
                  </h2>
                  <h4 className="download-desc">
                    Save your favourites easily and always have something to
                    watch.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="latest-watch-everywhere-sec">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="watch-everywhere-details">
                  <h2 className="watch-everywhere-title">Watch everywhere.</h2>
                  <h4 className="watch-everywhere-desc">
                    Stream unlimited movies and TV shows on your phone, tablet,
                    laptop, and TV.
                  </h4>
                </div>
              </div>
              <div className="col-md-6">
                <div className="all-device-img-sec">
                  <img
                    src="assets/img/all-device.png"
                    className="all-device-img"
                  />
                </div>
                <div className="watch-everywhere-video-sec">
                  <video
                    className="our-watch-everywhere-card-video"
                    autoplay="true"
                    playsinline=""
                    muted=""
                    loop="true"
                    id="vid"
                  >
                    <source
                      src="assets/img/video-devices-in.m4v"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="latest-faq-section">
          <div className="container">
            <div className="faq-lists-sec">
              <h1 className="section-title">Frequently Asked Questions</h1>
              <div className="accordion" id="accordionExample">
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h2 className="mb-0">
                      <button
                        className="btn btn-link btn-block text-left heading-title collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        What is {configuration.get("configData.site_name")}
                      </button>
                    </h2>
                  </div>

                  <div
                    id="collapseOne"
                    className="collapse"
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <p>
                        {configuration.get("configData.site_name")} is a
                        streaming service that offers a wide variety of
                        award-winning TV shows, movies, anime, documentaries and
                        more – on thousands of internet-connected devices.
                      </p>
                      <p>
                        You can watch as much as you want, whenever you want,
                        without a single ad – all for one low monthly price.
                        There's always something new to discover, and new TV
                        shows and movies are added every week!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingTwo">
                    <h2 className="mb-0">
                      <button
                        className="btn btn-link btn-block text-left heading-title collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        How much does{" "}
                        {configuration.get("configData.site_name")} cost?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <p>
                        Watch {configuration.get("configData.site_name")} on
                        your smartphone, tablet, Smart TV, laptop, or streaming
                        device, all for one fixed monthly fee. Plans range from
                        ₹ 199 to ₹ 799 a month. No extra costs, no contracts.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <h2 className="mb-0">
                      <button
                        className="btn btn-link btn-block text-left heading-title collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Where can I watch?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <p>
                        Watch anywhere, anytime, on an unlimited number of
                        devices. Sign in with your{" "}
                        {configuration.get("configData.site_name")} account to
                        watch instantly on the web at{" "}
                        {configuration.get("configData.site_name")}.com from
                        your personal computer or on any internet-connected
                        device that offers the{" "}
                        {configuration.get("configData.site_name")} app,
                        including smart TVs, smartphones, tablets, streaming
                        media players and game consoles.
                      </p>
                      <p>
                        You can also download your favourite shows with the iOS,
                        Android, or Windows 10 app. Use downloads to watch while
                        you're on the go and without an internet connection.
                        Take {configuration.get("configData.site_name")} with
                        you anywhere.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingFour">
                    <h2 className="mb-0">
                      <button
                        className="btn btn-link btn-block text-left heading-title collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        How do I cancel?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseFour"
                    className="collapse"
                    aria-labelledby="headingFour"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <p>
                        {configuration.get("configData.site_name")} is flexible.
                        There are no annoying contracts and no commitments. You
                        can easily cancel your account online in two clicks.
                        There are no cancellation fees – start or stop your
                        account anytime.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingFive">
                    <h2 className="mb-0">
                      <button
                        className="btn btn-link btn-block text-left heading-title collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        What can I watch on{" "}
                        {configuration.get("configData.site_name")}?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseFive"
                    className="collapse"
                    aria-labelledby="headingFive"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <p>
                        {configuration.get("configData.site_name")} has an
                        extensive library of feature films, documentaries, TV
                        shows, anime, award-winning{" "}
                        {configuration.get("configData.site_name")}
                        originals, and more. Watch as much as you want, anytime
                        you want.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="latest-banner-content-info-form">
                <p className="faq-desc">
                  Ready to watch? Enter your email to create or restart your
                  membership.
                </p>
                <ul className="list-unstyled banner-theme-form form-align-center">
                  {/* <li>
                    <form className="theme-form-sec">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email address"
                        />
                      </div>
                    </form>
                  </li> */}
                  <li>
                    <button className="btn btn-search">
                      <Link to="/register">
                        {t("getting_started")}{" "}
                        <i className="fas fa-chevron-right ml-2"></i>
                      </Link>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <LatestFooter></LatestFooter> */}

        {/* <Footer></Footer> */}
      </>
    );
  }
}

export default LatestLandingPage;
