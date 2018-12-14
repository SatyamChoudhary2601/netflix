import React, {Component} from 'react';

import {Link} from 'react-router-dom';

class AddCardComponent extends Component{
    render(){
        var billingImg = {
            backgroundImage: 'url(../assets/img/card-image.png)'
        };
        return(
            <div>
            <div className="main">
                <div className="top-bottom-spacing">

                    <div className="row">
                        <div className="col-sm-10 col-md-11 col-lg-9 col-xl-8 auto-margin">
                            <div className="row m-0">
                                <div className="col-sm-12 col-md-5 col-lg-5 col-xl-5 p-0">
                                    <div className="billing-img relative" style={billingImg}>
                                        <div className="view-cards d-none d-md-block do-lg-block d-xl-block">
                                            <a href="card-details.html" className="capitalize"><i className="fas fa-chevron-right mr-1"></i>card details</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-7 col-lg-7 col-xl-7 p-0">
                                    <div className="billing-content-sec">
                                        <h4 className="billing-head"><i className="far fa-credit-card"></i>add card</h4>
                                        <p className="grey-line"></p>
                                        <form className="auth-form" action="card-details.html">
                                            <div className="form-group">
                                                <label for="card-number">card number</label>
                                                <input type="text" className="form-control" id="card-number" placeholder="card number" />
                                            </div>
                                            <div className="form-group">
                                                <label>valid upto</label>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <input type="text" className="form-control" placeholder="MM" />
                                                    </div>
                                                    <div className="col-6">
                                                        <input type="text" className="form-control" placeholder="YY" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label for="cvv">CVV number</label>
                                                <input type="text" className="form-control" id="cvv" placeholder="CVV number" />
                                            </div>
                                            <div className="mt-4">
                                                <button className="btn btn-danger auth-btn btn-block">save card</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        )
    }
}

export default AddCardComponent;