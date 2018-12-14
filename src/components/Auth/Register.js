import React, { Component } from 'react';

import {Link} from 'react-router-dom';

class RegisterComponent extends Component{
    render(){
        var bgImg = {
            backgroundImage: 'url(../assets/img/bg.jpg)'
        };
        return(
            <div>
                <div className="common-bg-img" style={bgImg}>
                    <div className="auth-page-header">
                        <Link to="../index.html">
                            <img src="../assets/img/streamview1.png" className="site-logo" alt="logo_img" />
                        </Link>
                    </div>
		
                    <div className="row">
                        <div className="col-sm-9 col-md-7 col-lg-5 col-xl-4 auto-margin">
                            <div className="register-box">
                                <h3 className="register-box-head">Sign up</h3>
                                <form className="auth-form" action="../account/view-profiles.html">
                                    <div className="form-group">
                                        <label for="name">full name</label>
                                        <input type="text" className="form-control" id="name" />
                                    </div>
                                    <div className="form-group">
                                        <label for="email">Email address</label>
                                        <input type="email" className="form-control" id="email" />
                                    </div>
                                    <div className="form-group">
                                        <label for="pwd">Password</label>
                                        <input type="password" className="form-control" id="pwd" />
                                    </div>
                                    <button className="btn btn-danger auth-btn mt-4">sign up</button>
                                </form>
                                
                                <div>
                                    <Link to="../account/view-profiles.html">
                                        <p className="social">
                                            <span><i className="fab fa-facebook fb social-icons"></i></span>login with facebook
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <Link to="../account/view-profiles.html">
                                        <p className="social">
                                            <span><i className="fab fa-google-plus-square google social-icons"></i></span>login with google
                                        </p>
                                    </Link>
                                </div>
                                
                                <p className="auth-link">Already have an account? <Link to="login.html" className="btn-link">sign up now</Link></p>
                            </div>
                        </div>
                    </div>
			
		        </div>
            </div>
        )
    }
}

export default RegisterComponent;