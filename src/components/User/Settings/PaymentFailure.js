import React, {Component} from 'react';

import {Link} from 'react-router-dom';

class PaymentFailure extends Component{
    render(){
        return(
            <div>
                <div className="main">
			        <div className="top-bottom-spacing">

                        <div className="row">
                            <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5 auto-margin">
                                <div className="payment-option text-center pt-0">
                                    <img src="../assets/img/failure.gif" className="success-img" alt="failure_gif" />
                                    <h3 className="billing-head mb-3">payment failure..!!</h3>
                                    <h4 className="mb-3">your payment was not received! Please try again.</h4>
                                    <Link to="../index.html" className="btn btn-danger mt-1">go home</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default PaymentFailure;
