import React, { Component } from "react";

import { Link } from "react-router-dom";

import api from "../../../Environment";

class BillingDetailsComponent extends Component {
  state = {
    subscriptionList: []
  };
  async componentDidMount() {
    // api call
    const data = {
      sub_profile_id: ""
    };
    let subscriptionList = { ...this.state.subscriptionList };
    await api.postMethod("subscribedPlans", data).then(function(response) {
      console.log("response", response);
      if (response.data.success === true) {
        subscriptionList = response.data.data;
      }
    });
    this.setState({ subscriptionList });
  }
  render() {
    return (
      <div>
        <div className="main">
          <div className="top-bottom-spacing">
            <h3 className="text-center mt-0 mb-3">Billing details</h3>
            <div className="row">
              <div className="col-sm-10 col-md-10 col-lg-11 col-xl-10 auto-margin">
                <div className="subsciprion-details-se">
                  <h4>Cancel subsciption</h4>
                  <p>
                    Your subscription autorenewal is paused. Please activate
                    autorenewal and enjoy your videos
                  </p>
                  <div className="text-right mt-3">
                    <button
                      className="btn btn-danger mb-4"
                      data-toggle="modal"
                      data-target="#cancel-subs"
                    >
                      cancel subsciption
                    </button>
                    {/* <Link to="/billing-details/view" btn btn-danger mb-4" data-toggle="modal" data-target="#cancel-subs">cancel subcription</Link> */}
                  </div>
                </div>

                <div className="row">
                  {this.state.subscriptionList.map(subscription => (
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
                      <div className="subcsription-card">
                        <div className="subcsription-head">
                          {subscription.title}
                        </div>
                        <div className="subcsription-price">
                          <h4>
                            {subscription.currency}
                            {subscription.amount} / {subscription.plan} month
                          </h4>
                          <p>
                            <i className="far fa-clock" />
                            &nbsp;
                            <span>{subscription.created_at}</span>&nbsp;-&nbsp;
                            <span>{subscription.expiry_date}</span>
                          </p>
                        </div>
                        <div className="subcsription-details">
                          <h4>maintain account</h4>
                          <h5>
                            <i className="fas fa-user-plus" />
                            {subscription.no_of_account}
                          </h5>
                          <h4>Original amount</h4>
                          <h5>
                            {subscription.currency}
                            {subscription.total_amount}
                          </h5>
                          <h4>payment mode</h4>
                          <h5>{subscription.payment_mode}</h5>
                          <div className="text-right mt-4">
                            <Link
                              to="/billing-details/view"
                              className="btn btn-black"
                            >
                              view details
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade confirmation-popup" id="cancel-subs">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <form className="auth-form cancel-form">
                <div className="modal-header">
                  <h4 className="modal-title">Pause autorenewal</h4>
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>

                <div className="modal-body">
                  <div className="form-group">
                    <label for="name">cancel reason</label>
                    <input type="text" className="form-control" id="name" />
                  </div>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-link"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="button" className="btn btn-danger">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BillingDetailsComponent;
