import React, {Component} from 'react';

// import {Link} from 'react-router-dom';

class PayPerView extends Component{
    render(){
        var billingImg = {
            backgroundImage: 'url(assets/img/billing.jpg)'
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
                                                        <h5 className="billing-head"><i className="fas fa-th-large"></i></h5>
                                                    </div>
                                                    <div className="content-right">
                                                        <h5 className="billing-head mb-3">category</h5>
                                                        <p className="m-0">TV series</p>
                                                    </div>
                                                </div>
                                                <div className="clearfix"></div>
                                                <p className="grey-line"></p>
                                                <div className="display-inline">
                                                    <div className="icon-left">
                                                        <h5 className="billing-head"><i className="fas fa-th-large"></i></h5>
                                                    </div>
                                                    <div className="content-right">
                                                        <h5 className="billing-head mb-3">sub category</h5>
                                                        <p className="m-0">english series</p>
                                                    </div>
                                                </div>
                                                <div className="clearfix"></div>
                                                <p className="grey-line"></p>
                                                <div className="display-inline">
                                                    <div className="icon-left">
                                                        <h5 className="billing-head"><i className="far fa-file-alt"></i></h5>
                                                    </div>
                                                    <div className="content-right">
                                                        <h5 className="billing-head mb-3">title</h5>
                                                        <p className="m-0">duck duck goose</p>
                                                    </div>
                                                </div>
                                                <div className="clearfix"></div>
                                                <p className="grey-line"></p>
                                                <div className="display-inline">
                                                    <div className="icon-left">
                                                        <h5 className="billing-head"><i className="fas fa-user"></i></h5>
                                                    </div>
                                                    <div className="content-right">
                                                        <h5 className="billing-head mb-3">user type</h5>
                                                        <p className="m-0">both users</p>
                                                    </div>
                                                </div>
                                                <div className="clearfix"></div>
                                                <p className="grey-line"></p>
                                                <div className="display-inline">
                                                    <div className="icon-left">
                                                        <h5 className="billing-head"><i className="far fa-hand-point-up"></i></h5>
                                                    </div>
                                                    <div className="content-right">
                                                        <h5 className="billing-head mb-3">subscription type</h5>
                                                        <p className="m-0">one type payment</p>
                                                    </div>
                                                </div>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-7 col-lg-7 col-xl-7 p-0">
                                        <div className="billing-content-sec">
                                            <h4 className="billing-head"><i className="far fa-credit-card"></i>pay per view</h4>
                                            <p className="grey-line"></p>
                                            <div className="">
                                                <h5 className="">Amount</h5>
                                                <p className="grey-clr pay-perview-text">You need to pay for the selected video, even if you are a subscribed User.</p>
                                            </div>
                                            {/* <!-- table1 --> */}
                                            <div className="table-responsive">
                                                <table className="table white-bg m-0">
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
                                                <form className="mt-3" action="invoice.html">
                                                    <div className="form-check-inline">
                                                        <input type="radio" id="test1" name="radio-group" checked />
                                                        <label for="test1">paypal</label>
                                                    </div>
                                                    <div className="form-check-inline">
                                                        <input type="radio" id="test2" name="radio-group"/>
                                                        <label for="test2">card payment</label>
                                                    </div>
                                                    <div className="text-right mb-3">
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
                </div>
            </div>
        )
    }
}

export default PayPerView;      