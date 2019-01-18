import React, {Component} from 'react';

import {Link} from 'react-router-dom';

class InvoiceComponent extends Component{
    render(){
        var invoiceImg = {
            backgroundImage: 'url(../assets/img/invoice.gif)'
        };
        return(
            <div>
                <div className="main">
			        <div className="top-bottom-spacing">

                        <div className="row">
                            <div className="col-sm-10 col-md-8 col-lg-7 col-xl-6 auto-margin">
                                <div style={invoiceImg} className="invoice-img">
                                    <h1>invoice</h1>
                                </div>
                                <div className="payment-option">
                                    <h4 className="billing-head"><i className="far fa-file"></i>basic</h4>
                                    <p className="grey-line"></p>
                                    <div className="">
                                        <p className="grey-clr pay-perview-text mb-1">HD Available- Yes </p>
                                        <p className="grey-clr pay-perview-text mb-1">Ultra HD Available- Yes</p> 
                                        <p className="grey-clr pay-perview-text">You can watch at multiple screens at a time. Watch Unlimited Movies and TV series on your laptop, TV, phone and tablet</p>
                                        <h5 className="">No of accounts - 3</h5>
                                    </div>
                                    {/* <!-- table1 --> */}
                                    <div className="table-responsive">
                                        <table className="table white-bg m-0 mt-3">
                                            <tbody>
                                                <tr className="table-secondary">
                                                    <td>amount</td>
                                                    <td>$99.00</td>
                                                </tr>
                                                <tr>
                                                    <td>tax</td>
                                                    <td>$5.00</td>
                                                </tr>
                                                <tr className="table-secondary">
                                                    <td>total</td>
                                                    <td>$104.00</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>	
                                    {/* <!-- table --> */}

                                    {/* <!-- coupon --> */}
                                    <div className="mt-4">
                                        <h5 className="capitalize">have a coupon?</h5>
                                        <form className="auth-form">
                                            <div className="form-group mt-3">
                                                <div className="input-group mb-3 mt-1">
                                                    <input type="text" className="form-control m-0 mb-0" placeholder="promo code" />
                                                    <div className="input-group-append">
                                                        <button className="btn btn-danger">send</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    {/* <!-- coupon --> */}

                                    {/* <!-- payment option --> */}
                                    <div className="mt-4">
                                        <h5 className="capitalize">choose payment option</h5>
                                        <form className="mt-3" action="payment-success.html">
                                            <div className="form-check-inline">
                                                <input type="radio" id="test1" name="radio-group" />
                                                <label for="test1">paypal</label>
                                            </div>
                                            <div className="form-check-inline">
                                                <input type="radio" id="test2" name="radio-group" checked />
                                                <label for="test2">card payment</label>
                                            </div>
                                            <Link to="/add-card" className="float-right btn-link">add card</Link>
                                            <div className="text-right mb-3 mt-3">
                                                <button className="btn btn-danger">pay now</button>
                                            </div>
                                        </form>
                                    </div>
                                    {/* <!-- payment option --> */}
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default InvoiceComponent;