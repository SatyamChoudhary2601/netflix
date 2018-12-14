import React, {Component} from 'react';

import {Link} from 'react-router-dom';

class BillingDetailsComponent extends Component{
    render(){
        var billingImg = {
            backgroundImage: 'url(../assets/img/billing.jpg)'
        };
        return(
            <div>
                <div className="main">
			        <div className="top-bottom-spacing">

                        <div className="row">
                            <div className="col-sm-10 col-md-11 col-lg-9 col-xl-8 auto-margin">
                                <div className="row m-0">
                                    <div className="col-sm-12 col-md-5 col-lg-5 col-xl-5 p-0">
                                        <div className="billing-img" style={billingImg}>
                                            <div className="billing-img-overlay">
                                                <div className="display-inline">
                                                    <div className="icon-left">
                                                        <h4 className="billing-head"><i className="far fa-calendar-alt"></i></h4>
                                                    </div>
                                                    <div className="content-right">
                                                        <h4 className="billing-head">Billing Details</h4>
                                                    </div>
                                                </div>
                                                <div className="clearfix"></div>
                                                <p className="grey-line"></p>
                                                <div className="display-inline">
                                                    <div className="icon-left">
                                                        <h5 className="billing-head"><i className="far fa-hand-point-right"></i></h5>
                                                    </div>
                                                    <div className="content-right">
                                                        <h5 className="billing-head mb-3">next billing date</h5>
                                                        <p className="m-0">25-11-2018 12:42 AM</p>
                                                    </div>
                                                </div>
                                                <div className="clearfix"></div>
                                                <p className="grey-line"></p>
                                                <div className="display-inline">
                                                    <div className="icon-left">
                                                        <h5 className="billing-head"><i className="far fa-hand-point-right"></i></h5>
                                                    </div>
                                                    <div className="content-right">
                                                        <h5 className="billing-head mb-3">Premium</h5>
                                                        <p className="m-0">$5.00 / 1 Months</p>
                                                    </div>
                                                </div>
                                                <div className="clearfix"></div>
                                                <p className="grey-line"></p>
                                                <div className="text-right">
                                                    <a href="subscription.html" className="capitalize"><i className="fas fa-chevron-right mr-1"></i>view plan details</a>
                                                </div>
                                                <div className="text-center mt-3">
                                                    <a href="#" className="btn btn-danger">cancel subcription</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-7 col-lg-7 col-xl-7 p-0">
                                        <div className="billing-content-sec">
                                            <h4 className="billing-head"><i className="far fa-calendar-alt"></i>Billing Details</h4>
                                            <p className="grey-line"></p>
                                            
                                            <div className="card">
                                                <div className="card-header bg-dark text-white">premium</div>
                                                <div className="card-body">
                                                    <table className="table table-bordered m-0">
                                                        <tbody>
                                                            <tr>
                                                                <td>subscribed date</td>
                                                                <td>14-07-2018</td>
                                                            </tr>
                                                            <tr>
                                                                <td>expiry date</td>
                                                                <td>25-11-2018 12:42 AM</td>
                                                            </tr>
                                                            <tr>
                                                                <td>no of account</td>
                                                                <td>12</td>
                                                            </tr>
                                                            <tr>
                                                                <td>no of month</td>
                                                                <td>1</td>
                                                            </tr>
                                                            <tr>
                                                                <td>paid amount</td>
                                                                <td>$100.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td>payment mode</td>
                                                                <td>card</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                           
                                            <div className="card">
                                                <div className="card-header bg-dark text-white">basic</div>
                                                <div className="card-body">
                                                    <table className="table table-bordered m-0">
                                                        <tbody>
                                                            <tr>
                                                                <td>subscribed date</td>
                                                                <td>25-06-2018</td>
                                                            </tr>
                                                            <tr>
                                                                <td>expiry date</td>
                                                                <td>25-07-2018 12:42 AM</td>
                                                            </tr>
                                                            <tr>
                                                                <td>no of account</td>
                                                                <td>1</td>
                                                            </tr>
                                                            <tr>
                                                                <td>no of month</td>
                                                                <td>1</td>
                                                            </tr>
                                                            <tr>
                                                                <td>total amount</td>
                                                                <td>$55.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td>coupon amount</td>
                                                                <td>$5.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td>paid amount</td>
                                                                <td>$50.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td>payment mode</td>
                                                                <td>card</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
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

export default BillingDetailsComponent;