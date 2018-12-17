import React, {Component} from 'react';

import {Link} from 'react-router-dom';

class BillingDeatilsView extends Component{
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-sm-10 col-md-10 col-lg-11 col-xl-8 auto-margin">

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
                                    <a href="invoice.html" className="btn btn-black">view details</a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
} 

export default BillingDeatilsView;