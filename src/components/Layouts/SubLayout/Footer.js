import React, {Component} from 'react';

import {Link} from 'react-router-dom';

class Footer extends Component {

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
                <div className="bottom-height"></div>
                <div className="footer" id="footer">
                    <div className="site-footer">
                        <p className="footer-top"><Link to="#">questions? contact us</Link></p>
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <ul className="footer-link">
                                    <li className="footer-link-list">
                                        <Link to="static-pages/about-us.html">about us</Link>
                                    </li>
                                    <li className="footer-link-list">
                                        <Link to="static-pages/terms-and-conditions.html">terms and conditions</Link>
                                    </li>
                                    <li className="footer-link-list">
                                        <Link to="static-pages/contact-us.html">contact us</Link>
                                    </li>
                                    <li className="footer-link-list">
                                        <Link to="static-pages/refund-policy.html">refund policy</Link>
                                    </li>
                                    <li className="footer-link-list">
                                        <Link to="static-pages/help.html">help</Link>
                                    </li>
                                    <li className="footer-link-list">
                                        <Link to="static-pages/privacy-policy.html">privacy policy</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <div className="row">
                                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                        <p className="footer-head">Get the latest App :</p>
                                        <Link to="https://itunes.apple.com/us/app/streamflix/id1373623182?ls=1&mt=8">
                                            <img src="assets/img/app-store.png" className="app-img" alt="Playstore"/>
                                        </Link>
                                        <Link to="https://play.google.com/store/apps/details?id=com.streamhash.streamview">
                                            <img src="assets/img/play-store.png" className="app-img" alt="Playstore"/>
                                        </Link>
                                    </div>
                                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                        <p className="footer-head">find us on :</p>
                                        <div className="social-share">
                                            <span className="fa-stack fa-lg">
                                                <i className="fas fa-circle fa-stack-2x facebook"></i>
                                                <i className="fab fa-facebook-f fa-stack-1x fa-inverse white-clr"></i>
                                            </span>
                                            <span className="fa-stack fa-lg">
                                                <i className="fas fa-circle fa-stack-2x twitter"></i>
                                                <i className="fab fa-twitter fa-stack-1x fa-inverse white-clr"></i>
                                            </span>
                                            <span className="fa-stack fa-lg">
                                                <i className="fas fa-circle fa-stack-2x linkedin"></i>
                                                <i className="fab fa-linkedin-in fa-stack-1x fa-inverse white-clr"></i>
                                            </span>
                                            <span className="fa-stack fa-lg">
                                                <i className="fas fa-circle fa-stack-2x pinterest"></i>
                                                <i className="fab fa-pinterest-p fa-stack-1x fa-inverse white-clr"></i>
                                            </span>
                                            <span className="fa-stack fa-lg">
                                                <i className="fas fa-circle fa-stack-2x google"></i>
                                                <i className="fab fa-google-plus-g fa-stack-1x fa-inverse white-clr"></i>
                                            </span>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="footer-bottom">netflix india</p>
                    </div>
                </div>
            </div>
        );

    }

}


export default Footer;