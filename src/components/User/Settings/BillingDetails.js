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

                        {/* <div className="row">
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
                                                    <Link to="/billing-details/view.html" className="capitalize"><i className="fas fa-chevron-right mr-1"></i>view plan details</Link>
                                                </div>
                                                <p className="mt-2">Pause your subscription autorenewal to take a break on the payment</p>
                                                <div className="text-center mt-3">
                                                    <Link to="/billing-details/view="btn btn-danger" data-toggle="modal" data-target="#cancel-subs">cancel subcription</Link>
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
                        </div> */}
                        
                        <h3 className="text-center mt-0 mb-3">Billing details</h3>
                        <div className="row">
                            <div className="col-sm-10 col-md-10 col-lg-11 col-xl-10 auto-margin">
                            
                                <div className="subsciprion-details-se">
                                    <h4>Cancel subsciption</h4>
                                    <p>Your subscription autorenewal is paused. Please activate autorenewal and enjoy your videos</p>
                                    <div className="text-right mt-3">
                                        <button className="btn btn-danger mb-4" data-toggle="modal" data-target="#cancel-subs">cancel subsciption</button>
                                        {/* <Link to="/billing-details/view" btn btn-danger mb-4" data-toggle="modal" data-target="#cancel-subs">cancel subcription</Link> */}
                                    </div>
                                </div>

                                <div className="row">
                                    
                                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
                                        <div className="subcsription-card">
                                            <div className="subcsription-head">Premium</div>
                                            <div className="subcsription-price">
                                                <h4>$450.00 / 1 month</h4>
                                                <p><i className="far fa-clock"></i>&nbsp;<span>13 Dec, 2018</span>&nbsp;-&nbsp;<span>12 Jan, 2019</span></p>
                                            </div>
                                            <div className="subcsription-details">
                                                <h4>maintain account</h4>
                                                <h5><i className="fas fa-user-plus"></i>1</h5>
                                                <h4>Original amount</h4>
                                                <h5>$500.00</h5>
                                                <h4>payment mode</h4>
                                                <h5>cash</h5>
                                                <div className="text-right mt-4">
                                                    <Link to="/billing-details/view" className="btn btn-black">view details</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
                                        <div className="subcsription-card">
                                            <div className="subcsription-head">Premium</div>
                                            <div className="subcsription-price">
                                                <h4>$450.00 / 1 month</h4>
                                                <p><i className="far fa-clock"></i>&nbsp;<span>13 Dec, 2018</span>&nbsp;-&nbsp;<span>12 Jan, 2019</span></p>
                                            </div>
                                            <div className="subcsription-details">
                                                <h4>maintain account</h4>
                                                <h5><i className="fas fa-user-plus"></i>1</h5>
                                                <h4>Original amount</h4>
                                                <h5>$500.00</h5>
                                                <h4>payment mode</h4>
                                                <h5>cash</h5>
                                                <div className="text-right mt-4">
                                                    <Link to="/billing-details/view" className="btn btn-black">view details</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
                                        <div className="subcsription-card">
                                            <div className="subcsription-head">Premium</div>
                                            <div className="subcsription-price">
                                                <h4>$450.00 / 1 month</h4>
                                                <p><i className="far fa-clock"></i>&nbsp;<span>13 Dec, 2018</span>&nbsp;-&nbsp;<span>12 Jan, 2019</span></p>
                                            </div>
                                            <div className="subcsription-details">
                                                <h4>maintain account</h4>
                                                <h5><i className="fas fa-user-plus"></i>1</h5>
                                                <h4>Original amount</h4>
                                                <h5>$500.00</h5>
                                                <h4>payment mode</h4>
                                                <h5>cash</h5>
                                                <div className="text-right mt-4">
                                                    <Link to="/billing-details/view" className="btn btn-black">view details</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                <div className="modal fade confirmation-popup" id="cancel-subs">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">

                            <form className="auth-form cancel-form">
                                <div className="modal-header">
                                    <h4 className="modal-title">Pause autorenewal</h4>
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>
                            
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label for="name">cancel reason</label>
                                        <input type="text" className="form-control" id="name" />
                                    </div>
                                </div>
                            
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-link" data-dismiss="modal">Cancel</button>
                                    <button type="button" className="btn btn-danger">Submit</button>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default BillingDetailsComponent;