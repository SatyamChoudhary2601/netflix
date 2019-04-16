import React, { Component } from "react";
import IconCross from "./../Icons/IconCross";
import { Link, NavLink } from "react-router-dom";
import "./Content.scss";

class Content extends Component {
  state = {};
  componentDidMount() {
    // Single video API call.
  }
  render() {
    const movie = { ...this.props.movie };
    return (
      <div className="content">
        <div className="content__background">
          <div className="content__background__shadow" />
          <div
            className="content__background__image"
            style={{ backgroundImage: `url(${movie.default_image})` }}
          />
        </div>
        <div className="content__area">
          <div className="content__area__container">
            {/* <div className="content__title">{movie.title}</div>
        <div className="content__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          et euismod ligula. Morbi mattis pretium eros, ut mollis leo tempus
          eget. Sed in dui ac ipsum feugiat ultricies. Phasellus vestibulum enim
          quis quam congue, non fringilla orci placerat. Praesent sollicitudin
        </div> */}
          </div>
          <div className="slider-content-tabsec">
            <ul className="nav nav-pills" role="tablist">
              <li className="nav-item">
                <NavLink
                  activeClassName="nav-link active"
                  data-toggle="pill"
                  to={"#overview"}
                >
                  overview
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="pill" href="#episode">
                  episodes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="pill" href="#trailers">
                  trailers & more
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="pill" href="#more_link">
                  more like this
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="pill" href="#details">
                  details
                </a>
              </li>
            </ul>
          </div>

          <div className="slider-content-tabcontent">
            <div className="tab-content">
              <div id="overview" className="tab-pane active">
                <div className="slider-topbottom-spacing">
                  <div className="overview-content">
                    <div>
                      <h1 className="banner_video_title">{movie.title}</h1>
                      <h4 className="banner_video_details">
                        <span className="green-clr">Aug 2018</span>
                        <span className="grey-box">
                          7<i className="fas fa-plus small" /> / 25{" "}
                          <span className="small">Views</span>
                        </span>
                        <span>1h 26m</span>
                        <span className="small yellow-clr ml-1">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="far fa-star" />
                          <i className="far fa-star" />
                        </span>
                      </h4>
                      <h4 className="banner_video_details">
                        <span>
                          <i className="far fa-thumbs-up" />
                        </span>
                        <span className="mr-2">50</span>
                        <span>
                          <i className="far fa-thumbs-down" />
                        </span>
                        <span className="mr-2">40</span>
                      </h4>
                      <h4 className="slider_video_text">
                        an ordinary teen. An ancient relic pulled from the
                        rubble. And an underground civilization that needs a
                        hero.An ordinary teen. An ancient relic pulled from the
                        rubble. And an underground civilization that needs a
                        hero.
                      </h4>
                      <div className="banner-btn-sec">
                        <Link
                          to="#"
                          className="btn btn-danger btn-right-space br-0"
                        >
                          <i className="fas fa-play mr-2" />
                          play
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-outline-secondary btn-right-space"
                        >
                          <i className="fas fa-plus mr-2" />
                          my list
                        </Link>
                        <Link to="#" className="btn express-btn mr-2">
                          <i className="far fa-thumbs-up" />
                        </Link>
                        <Link
                          to="#"
                          className="btn express-btn btn-right-space"
                        >
                          <i className="far fa-thumbs-down" />
                        </Link>
                        <Link
                          to="#"
                          data-toggle="modal"
                          data-target="#spam-popup"
                          className="btn express-btn btn-right-space"
                        >
                          <i className="fas fa-info" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="episode" className="tab-pane fade">
                <div className="slider-topbottom-spacing pl-0 pr-0 slider-overlay">
                  <div className="pr-4per pl-4per">
                    <h1 className="banner_video_title">frozen</h1>
                    <form>
                      <div className="custom-select width-200">
                        <select>
                          <option value="0">season 1</option>
                          <option value="1">season 2</option>
                          <option value="2">season 3</option>
                          <option value="3">season 4</option>
                        </select>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div id="trailers" className="tab-pane fade">
                <div className="slider-topbottom-spacing pl-0 pr-0 slider-overlay">
                  <div className="pr-4per pl-4per">
                    <h1 className="banner_video_title">frozen</h1>
                  </div>
                </div>
              </div>
              <div id="more_link" className="tab-pane fade">
                <div className="slider-topbottom-spacing pl-0 pr-0 slider-overlay">
                  <div className="pr-4per pl-4per">
                    <h1 className="banner_video_title">frozen</h1>
                  </div>
                </div>
              </div>
              <div id="details" className="tab-pane fade">
                <div className="slider-topbottom-spacing slider-overlay">
                  <h1 className="banner_video_title">frozen</h1>
                  <div className="row">
                    <div className="col-lg-2 col-xl-2">
                      <h4 className="detail-head">cast</h4>
                      <ul className="detail-list">
                        <li>
                          <Link to="#">jason</Link>
                        </li>
                        <li>
                          <Link to="#">jhon krasinski</Link>
                        </li>
                        <li>
                          <Link to="#">david cross</Link>
                        </li>
                        <li>
                          <Link to="#">joe ksandar</Link>
                        </li>
                        <li>
                          <Link to="#">kevin r</Link>
                        </li>
                        <li>
                          <Link to="#">constance wu</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-2 col-xl-2">
                      <h4 className="detail-head">genres</h4>
                      <ul className="detail-list">
                        <li>
                          <Link to="#">Action Comedies</Link>
                        </li>
                        <li>
                          <Link to="#">Children & Family Films</Link>
                        </li>
                        <li>
                          <Link to="#">Films for ages 8 to 10</Link>
                        </li>
                        <li>
                          <Link to="#">family features</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-8 col-xl-8">
                      <h4 className="detail-head">description</h4>
                      <p className="details-text">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button className="content__close" onClick={this.props.onClose}>
            <IconCross />
          </button>
        </div>
      </div>
    );
  }
}

export default Content;
