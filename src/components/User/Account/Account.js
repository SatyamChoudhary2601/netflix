import React, {Component} from 'react';

import {Link} from 'react-router-dom';

class AccountComponent extends Component{
    render(){
        return(
            <div>
                <div className="main">
                    <div className="top-bottom-spacing">

                        <div className="row">
                            <div className="col-sm-12 col-md-11 col-lg-10 col-xl-9 auto-margin">
                                <div className="account-title-sec">
                                    <h1 className="">account</h1>
                                </div>

								<div className="account-sec">
									<div className="row">
										<div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
											<h4 className="account-sec-head">profile</h4>
										</div>
										<div className="col-12 col-sm-5 col-md-5 col-lg-5 col-xl-5">
											<h5 className="email">ronan@gmail.com</h5>
											<h5 className="password">password:
												<span className="asterisk">
													<i className="fas fa-asterisk"></i>
													<i className="fas fa-asterisk"></i>
													<i className="fas fa-asterisk"></i>
													<i className="fas fa-asterisk"></i>
													<i className="fas fa-asterisk"></i>
													<i className="fas fa-asterisk"></i>
												</span>
											</h5>
										</div>
										<div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
											<ul className="account-nav-link">
												<li><Link to="edit-account.html">edit profile</Link></li>
												<li><Link to="change-password.html">change password</Link></li>
												<li><Link to="delete-account.html">delete account</Link></li>
											</ul>
										</div>
									</div>
								</div>

								<div className="account-sec">
									<div className="row">
										<div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
											<h4 className="account-sec-head">plan details</h4>
										</div>
										<div className="col-12 col-sm-5 col-md-5 col-lg-5 col-xl-5">
											<h5 className="email capitalize">basic</h5>
										</div>
										<div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
											<ul className="account-nav-link">
												<li><Link to="../payment/subscription.html">change plan</Link></li>
												<li><Link to="../payment/billing-details.html">billing details</Link></li>
											</ul>
										</div>
									</div>
								</div>

								<div className="account-sec">
									<div className="row">
										<div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
											<h4 className="account-sec-head">manage profile</h4>
										</div>
										<div className="col-12 col-sm-5 col-md-5 col-lg-5 col-xl-5">
											<div>
												<img src="../assets/img/icon1.png" className="account-profile-img" alt="profile_img" />
												<span className="capitalize size-16">ronan</span>
											</div>
										</div>
										<div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
											<ul className="account-nav-link">
												<li><Link to="manage-profiles.html">manange profile</Link></li>
											</ul>
										</div>
									</div>
								</div>
								
								<div className="account-sec">
									<div className="row">
										<div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
											<h4 className="account-sec-head">card details</h4>
										</div>
										<div className="col-12 col-sm-5 col-md-5 col-lg-5 col-xl-5">
											<h5 className="email">-</h5>
										</div>
										<div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
											<ul className="account-nav-link">
												<li><Link to="../payment/add-card.html">add card</Link></li>
												<li><Link to="../payment/card-details.html">card details</Link></li>
											</ul>
										</div>
									</div>
								</div>

							</div>
                        </div>

                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        )
    }
}

export default AccountComponent;