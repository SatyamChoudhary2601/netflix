import React, {Component} from 'react';

import {Link} from 'react-router-dom';

class ChangePasswordComponent extends Component{
    render(){
        var bgImg = {
            backgroundImage: 'url(../assets/img/bg.jpg)'
        };
        return(
            <div>
                <div  className="common-bg-img" style={bgImg}>
                    <div className="main">
                        <div className="row">
                            <div className="col-sm-9 col-md-7 col-lg-5 col-xl-4 auto-margin">
                                <div className="register-box">
                                    <h3 className="register-box-head">change password</h3>
                                    <form className="auth-form" action="../index.html">
                                        <div className="form-group">
                                            <label for="old">old password</label>
                                            <input type="password" className="form-control" id="old" />
                                        </div>
                                        <div className="form-group">
                                            <label for="new">new password</label>
                                            <input type="password" className="form-control" id="new" />
                                        </div>
                                        <div className="form-group">
                                            <label for="confirm">confirm password</label>
                                            <input type="password" className="form-control" id="confirm" />
                                        </div>
                                        <button className="btn btn-danger auth-btn mt-4">change password</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} 

export default ChangePasswordComponent;