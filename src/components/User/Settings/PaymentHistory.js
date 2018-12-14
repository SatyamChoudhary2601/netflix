import React, {Component} from 'react';

import {Link} from 'react-router-dom';

class PaymentHistory extends Component{
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
                                            <div className="billing-img-overlay align-center">
                                                <div className="text-center">
                                                    <img src="../assets/img/icon1.png" className="payment-profile" alt="payment_icon" />	
                                                    <h4 className="capitalize m-0">ronan</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-7 col-lg-7 col-xl-7 p-0">
                                        <div className="billing-content-sec">
                                            <h4 className="billing-head"><i className="fas fa-history"></i>payment history</h4>
                                            <p className="grey-line"></p>
                                            {/* <!-- table1 --> */}
                                            <div className="mb-3">
                                                <div className="relative">
                                                    <img src="../assets/img/notification1.jpg" className="paid-video-img" alt="noti_img" />
                                                    <div className="paid-video-title">duck duck goose duck duck goose</div>
                                                    <div className="paid-video-amount">$10.00</div>
                                                </div>
                                                <div className="payment-card">
                                                    <table className="table m-0">
                                                        <tbody>
                                                            <tr>
                                                                <td>Payment ID</td>
                                                                <td>ch_1Cpm9yK3Y96PKCCvrWBEaSI2</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Payment date</td>
                                                                <td>20 Jul 18</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Subscription Type</td>
                                                                <td>One Time Payment</td>
                                                            </tr>
                                                            <tr>
                                                                <td>User Type</td>
                                                                <td>Both Users</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Payment Mode</td>
                                                                <td>card</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>	
                                            {/* <!-- table2--> */}
                                            <div className="mb-3">
                                                <div className="relative">
                                                    <img src="../assets/img/notification2.jpg" className="paid-video-img" alt="noti_img" />
                                                    <div className="paid-video-title">captain america</div>
                                                    <div className="paid-video-amount">$10.00</div>
                                                </div>
                                                <div className="payment-card">
                                                    <table className="table m-0">
                                                        <tbody>
                                                            <tr>
                                                                <td>Payment ID</td>
                                                                <td>ch_1Cpm9yK3Y96PKCCvrWBEaSI2</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Payment date</td>
                                                                <td>20 Jul 18</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Subscription Type</td>
                                                                <td>One Time Payment</td>
                                                            </tr>
                                                            <tr>
                                                                <td>User Type</td>
                                                                <td>Both Users</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Payment Mode</td>
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

export default PaymentHistory;
