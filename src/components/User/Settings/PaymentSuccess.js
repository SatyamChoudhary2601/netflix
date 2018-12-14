import React, {Component} from 'react';

import {Link} from 'react-router-dom';

class PaymentSuccess extends Component{
    render(){
        return(
            <div>
                <div className="main">
			        <div className="top-bottom-spacing">

                        <div className="row">
                            <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5 auto-margin">
                                <div className="payment-option text-center pt-0">
                                    <img src="../assets/img/success1.gif" className="success-img" alt="success_gif" />
                                    <h3 className="billing-head mb-3">thank you ..!!</h3>
                                    <h4 className="mb-3">your payment has been received successfully !!</h4>
                                    <Link to="../home.html" className="btn btn-danger mt-1">watch video</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default PaymentSuccess;
