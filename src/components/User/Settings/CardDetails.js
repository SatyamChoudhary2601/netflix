import React, {Component} from 'react';

import {Link} from 'react-router-dom';

class CardDetailsComponent extends Component{
    render(){
        var billingImg = {
            backgroundImage: 'url(../assets/img/card-image.png)'
        };
        return(
            <div>
                <div className="main">
			        <div className="top-bottom-spacing">
                
                        <div className="row">
                            <div className="col-sm-10 col-md-11 col-lg-9 col-xl-8 auto-margin">
                                <div className="row m-0">
                                    <div className="col-sm-12 col-md-5 col-lg-5 col-xl-5 p-0">
                                        <div className="billing-img relative" style={billingImg}>
                                            <div className="view-cards d-none d-md-block do-lg-block d-xl-block">
                                                <Link to="/add-card" className="capitalize"><i className="fas fa-chevron-right mr-1"></i>add card</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-7 col-lg-7 col-xl-7 p-0">
                                        <div className="billing-content-sec">
                                            <h4 className="billing-head"><i className="far fa-credit-card"></i>card details</h4>
                                            <p className="grey-line"></p>

                                            <div>
                                                <div className="display-inline">
                                                    <div className="card-left">
                                                        <img src="../assets/img/credit-card.png" alt='card_img' />
                                                    </div>
                                                    <div className="card-deatils">
                                                        <Link to="" className="float-right"><i className="far fa-trash-alt"></i></Link>
                                                        <h5>XXXX XXXX XXXX 4242</h5>
                                                        <p className="m-0"><Link to="" className="green-clr">default card</Link></p>
                                                    </div>
                                                </div>
                                            </div>

                                            <p className="grey-line"></p>
                                            <div>
                                                <div className="display-inline">
                                                    <div className="card-left">
                                                        <img src="../assets/img/credit-card.png" alt='card_img' />
                                                    </div>
                                                    <div className="card-deatils">
                                                        <Link to="" className="float-right"><i className="far fa-trash-alt"></i></Link>
                                                        <h5>XXXX XXXX XXXX 4242</h5>
                                                        <p className="m-0"><Link to="" className="red-clr">set as default</Link></p>
                                                    </div>
                                                </div>
                                            </div>

                                            <p className="grey-line"></p>
                                            <div>
                                                <div className="display-inline">
                                                    <div className="card-left">
                                                        <img src="../assets/img/card.png" alt="card_img" />
                                                    </div>
                                                    <div className="card-deatils">
                                                        <div className="add-card">
                                                            <Link to="" className="btn-link">add card</Link>
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
                </div>
            </div>
        )
    }
}

export default CardDetailsComponent;