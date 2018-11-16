import React, {Component} from 'react';

import {Link} from 'react-router-dom';

class Header extends Component {

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
                <nav className="navbar navbar-expand navbar-dark main-nav fixed-top" id="header">
                    <Link className="navbar-brand" to="../home.html">
                        <img src="../../../assets/img/streamview.png" className="logo-img desktop-logo" />
                        <img src="../../../assets/img/streamview-icon.png" className="logo-img mobile-logo" />
                    </Link>
                </nav>
                <div className="header-height"></div>
            </div>
        );

    }

}


export default Header;

