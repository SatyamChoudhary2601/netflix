import React, { Component } from "react";

import { Link } from "react-router-dom";
import configuration from "react-global-configuration";

class StaticSidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            footer_pages1: [],
            footer_pages2: [],
            footer_pages3: [],
            footer_pages4: []
        };
    }
    componentDidMount() {
        if (configuration.get("configData.footer_pages1")) {
            this.setState({
                footer_pages1: configuration.get("configData.footer_pages1")
            });
        }
        if (configuration.get("configData.footer_pages2")) {
            this.setState({
                footer_pages2: configuration.get("configData.footer_pages2")
            });
        }

        if (configuration.get("configData.footer_pages3")) {
            this.setState({
                footer_pages3: configuration.get("configData.footer_pages3")
            });
        }

        if (configuration.get("configData.footer_pages4")) {
            this.setState({
                footer_pages4: configuration.get("configData.footer_pages4")
            });
        }
    }

    render() {
        return (
            <div>
                <div className="top-bottom-spacing">
                    <ul className="static-sidebar-list">
                        {this.state.footer_pages1.length > 0
                            ? this.state.footer_pages1.map(
                                  (static_page, index) => (
                                      <li className="" key={`page1${index}`}>
                                          <Link
                                              to={`/page/${static_page.unique_id}`}
                                          >
                                              {static_page.heading}
                                          </Link>
                                      </li>
                                  )
                              )
                            : ""}

                        {this.state.footer_pages2.length > 0
                            ? this.state.footer_pages2.map(
                                  (static_page2, index) => (
                                      <li
                                          className="active"
                                          key={`page2${index}`}
                                      >
                                          <Link
                                              to={`/page/${static_page2.unique_id}`}
                                          >
                                              {static_page2.heading}
                                          </Link>
                                      </li>
                                  )
                              )
                            : ""}
                    </ul>
                </div>
            </div>
        );
    }
}

export default StaticSidebar;
