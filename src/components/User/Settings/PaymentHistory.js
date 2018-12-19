import React, {Component} from 'react';

import {Link} from 'react-router-dom';

class PaymentHistory extends Component{
    render(){
        var invoiceImg = {
            backgroundImage: 'url(../assets/img/invoice.gif)'
        };
        return(
            <div>
                <div className="main">
			        <div className="top-bottom-spacing">

                        <div className="row">
                            <div className="col-sm-10 col-md-10 col-lg-7 col-xl-6 auto-margin">
                                <div style={invoiceImg} className="payment-his-img">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h4>payment history</h4>
                                        </div>
                                        <div className="col-md-6 text-right">
                                            <h4 className="grey-clr">Total</h4>
                                            <h4 className="bold grey-clr">$4052.00</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="payment-history">
                                    <div className="paid-videos">
                                        <div className="left">
                                            <img src="../assets/img/thumb9.jpg" alt="video-img" />
                                        </div>
                                        <div className="center">
                                            <h4 className="billing-head">basic</h4>
                                            <h5 className="billing-head mt-2 grey-clr">$50.00&nbsp;/&nbsp;card</h5>
                                        </div>
                                        <div className="right text-right">
                                            <Link to="/payment/view-details" className="btn btn-danger mt-3 btn-sm">View details</Link>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="paid-videos">
                                        <div className="left">
                                            <img src="../assets/img/thumb9.jpg" alt="video-img" />
                                        </div>
                                        <div className="center">
                                            <h4 className="billing-head">basic</h4>
                                            <h5 className="billing-head mt-2 grey-clr">$50.00&nbsp;/&nbsp;card</h5>
                                        </div>
                                        <div className="right text-right">
                                            <Link to="/payment/view-details" className="btn btn-danger mt-3 btn-sm">View details</Link>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                              </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default PaymentHistory;
