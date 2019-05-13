import React, { Component } from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";

import { Link } from "react-router-dom";

class InvoiceComponent extends Component {
  state = {
    videoList: null,
    loading: true
  };

  componentDidMount() {
    if (this.props.location.state) {
      //
    } else {
      console.log("Tesin push");
      window.location = "/subscription";
    }
    console.log("Subscription", this.props.location.state.subscription);
  }

  render() {
    var invoiceImg = {
      backgroundImage: "url(../assets/img/invoice.gif)"
    };
    const { subscription } = this.props.location.state;

    const onSuccess = payment => {
      // Congratulation, it came here means everything's fine!
      console.log("The payment was succeeded!", payment);
      // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
    };

    const onCancel = data => {
      // User pressed "cancel" or close Paypal's popup!
      console.log("The payment was cancelled!", data);
      // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
    };

    const onError = err => {
      // The main Paypal's script cannot be loaded or somethings block the loading of that script!
      console.log("Error!", err);
      // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
      // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
    };

    let env = "sandbox"; // you can set here to 'production' for production
    let currency = "USD"; // or you can set this value from your props or state
    let total = 1; // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
    // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/

    // In order to get production's app-ID, you will have to send your app to Paypal for approval first
    // For sandbox app-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App"):
    //   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
    // For production app-ID:
    //   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/

    // NB. You can also have many Paypal express checkout buttons on page, just pass in the correct amount and they will work!

    const client = {
      sandbox:
        "AX5Ut9TBRNu6dgVBTNo0pOzRo7APIhfoVg34QzfycTZaQOT6vKN1B2Kpej4isx8VNDf26tsdbQAN4QjD",
      production:
        "AUr5bpSyosn6V5uIdnUdqvCWLR6DXgz0bjBBOLKUUjHQFWVfjudQCCzAjpVaBNHeQ_gn575mJCVoYFBo"
    };
    return (
      <div>
        <div className="main">
          <div className="top-bottom-spacing">
            <div className="row">
              <div className="col-sm-10 col-md-8 col-lg-7 col-xl-6 auto-margin">
                <div style={invoiceImg} className="invoice-img">
                  <h1>invoice</h1>
                </div>
                <div className="payment-option">
                  <h4 className="billing-head">
                    <i className="far fa-file" />
                    {subscription.title}
                  </h4>
                  <p className="grey-line" />
                  <div className="">
                    <p className="grey-clr pay-perview-text">
                      {subscription.description}
                    </p>
                    <h5 className="">
                      No of accounts - {subscription.no_of_account}
                    </h5>
                  </div>
                  {/* <!-- table1 --> */}
                  <div className="table-responsive">
                    <table className="table white-bg m-0 mt-3">
                      <tbody>
                        <tr className="table-secondary">
                          <td>amount</td>
                          <td>
                            {subscription.currency}
                            {subscription.amount}
                          </td>
                        </tr>
                        <tr>
                          <td>tax</td>
                          <td>$5.00</td>
                        </tr>
                        <tr className="table-secondary">
                          <td>total</td>
                          <td>
                            {subscription.currency}
                            {subscription.amount}
                          </td>
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
                          <input
                            type="text"
                            className="form-control m-0 mb-0"
                            placeholder="promo code"
                          />
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
                        <input
                          type="radio"
                          id="test2"
                          name="radio-group"
                          checked
                        />
                        <label for="test2">card payment</label>
                      </div>
                      <Link to="/add-card" className="float-right btn-link">
                        add card
                      </Link>
                      <div className="text-right mb-3 mt-3">
                        <button className="btn btn-danger">pay now</button>
                        <PaypalExpressBtn
                          env={env}
                          client={client}
                          currency={currency}
                          total={total}
                          onError={onError}
                          onSuccess={onSuccess}
                          onCancel={onCancel}
                        />
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
    );
  }
}

export default InvoiceComponent;
