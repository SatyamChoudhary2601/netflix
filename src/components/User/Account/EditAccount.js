import React, {Component} from 'react';

import {Link} from 'react-router-dom';

class EditAccountComponent extends Component{
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
                                    <h3 className="register-box-head">edit profile</h3>
                                    <form className="auth-form" action="../account/index.html">
                                        <div className="form-group">
                                            <label for="name">name</label>
                                            <input type="text" className="form-control" id="name" />
                                        </div>
                                        <div className="form-group">
                                            <label for="email">Email address</label>
                                            <input type="email" className="form-control" id="email" />
                                        </div>
                                        <div className="form-group">
                                            <label for="number">mobile number</label>
                                            <input type="text" className="form-control" id="number" />
                                        </div>
                                        <button className="btn btn-danger auth-btn mt-4">save</button>
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

export default EditAccountComponent;