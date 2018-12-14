import React, {Component} from 'react';

import {Link} from 'react-router-dom';

class ForgotPasswordComponent extends Component{
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
                                <h3 className="register-box-head">forgot password</h3>
                                <form className="auth-form" action="login.html">
                                    <div className="form-group">
                                        <label for="email">Email address</label>
                                        <input type="email" className="form-control" id="email" placeholder="name@gmail.com" />
                                    </div>
                                    <p className="mt-4 black-clr">
                                        We will send you an email with instructions on how to reset your password.
                                    </p>
                                    <button className="btn btn-danger auth-btn">submit</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ForgotPasswordComponent;