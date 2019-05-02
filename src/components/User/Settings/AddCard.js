import React, { Component } from "react";

import { Link } from "react-router-dom";
import Helper from "../../Helper/helper";
import { injectStripe, CardElement } from "react-stripe-elements";
import api from "../../../Environment";

class AddCardComponent extends Helper {
  state = {
    data: {
      card_number: "",
      month: "",
      year: "",
      cvv: ""
    }
  };

  addCard = ev => {
    ev.preventDefault();
    console.log("Card");
    console.log("Props", this.props);
    if (this.props.stripe) {
      this.props.stripe
        .createToken({ type: "card", name: "Jenny Rosen" })
        .then(payload => {
          console.log("[token]", payload.token.id);

          const inputData = {
            card_token: payload.token.id
          };
          api
            .postMethod("payment_card_add", inputData)
            .then(response => {
              if (response.data.success === true) {
                console.log("Card added success");
              } else {
                console.log("Error", response);
              }
            })
            .catch(function(error) {
              console.log(error);
            });
        });
    } else {
      console.log("Stripe.js hasn't loaded yet.");
    }
  };

  render() {
    const { data } = this.state;
    var billingImg = {
      backgroundImage: "url(../assets/img/card-image.png)"
    };
    return (
      <div>
        <div className="main">
          <div className="top-bottom-spacing">
            <div className="row">
              <div className="col-sm-10 col-md-11 col-lg-9 col-xl-8 auto-margin">
                <div className="row m-0">
                  <div className="col-sm-12 col-md-5 col-lg-5 col-xl-5 p-0">
                    <div className="billing-img relative" style={billingImg}>
                      <div className="view-cards d-none d-md-block do-lg-block d-xl-block">
                        <Link to="/card-details" className="capitalize">
                          <i className="fas fa-chevron-right mr-1" />
                          card details
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-7 col-lg-7 col-xl-7 p-0">
                    <div className="billing-content-sec">
                      <h4 className="billing-head">
                        <i className="far fa-credit-card" />
                        add card
                      </h4>
                      <p className="grey-line" />
                      <form className="auth-form" onSubmit={this.addCard}>
                        <CardElement />
                        <div className="mt-4">
                          <button className="btn btn-danger auth-btn btn-block">
                            save card
                          </button>
                        </div>
                      </form>
                      {/* <form className="auth-form" onSubmit={this.addCard}>
                        <div className="form-group">
                          <label htmlFor="card-number">card number</label>
                          <input
                            type="text"
                            className="form-control"
                            onChange={this.handleChange}
                            id="card-number"
                            placeholder="card number"
                            name="card_number"
                            value={data.card_number}
                          />
                        </div>
                        <div className="form-group">
                          <label>valid upto</label>
                          <div className="row">
                            <div className="col-6">
                              <input
                                type="text"
                                className="form-control"
                                onChange={this.handleChange}
                                placeholder="MM"
                                name="month"
                                value={data.month}
                              />
                            </div>
                            <div className="col-6">
                              <input
                                type="text"
                                className="form-control"
                                onChange={this.handleChange}
                                placeholder="YY"
                                name="year"
                                value={data.year}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="cvv">CVV number</label>
                          <input
                            type="text"
                            className="form-control"
                            onChange={this.handleChange}
                            id="cvv"
                            placeholder="CVV number"
                            name="cvv"
                            value={data.cvv}
                          />
                        </div>
                        <div className="mt-4">
                          <button className="btn btn-danger auth-btn btn-block">
                            save card
                          </button>
                        </div>
                      </form> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default injectStripe(AddCardComponent);
