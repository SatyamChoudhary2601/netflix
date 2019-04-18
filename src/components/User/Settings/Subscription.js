import React, { Component } from "react";

import { Link } from "react-router-dom";

import api from "../../../Environment";

class SubscriptionComponent extends Component {
  state = {
    subscriptionList: []
  };
  async componentDidMount() {
    // api call
    const data = {
      sub_profile_id: ""
    };
    let subscriptionList = { ...this.state.subscriptionList };
    await api.postMethod("subscription_plans", data).then(function(response) {
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
            <div className="row">
              <div className="col-sm-10 col-md-10 col-lg-11 col-xl-10 auto-margin">
                <div className="row">
                  {this.state.subscriptionList.map(subscription => (
                    <div
                      className="col-sm-12 col-md-6 col-lg-4 col-xl-4"
                      key={subscription.subscription_id}
                    >
                      <div className="subcsription-card">
                        <div className="subcsription-head">
                          {subscription.title}
                        </div>
                        <div
                          className={
                            "subcsription-price" +
                            (subscription.popular_status ? "premium" : "")
                          }
                        >
                          <p>plan</p>
                          <h4>
                            {subscription.currency}
                            {subscription.amount} / {subscription.plan} month
                          </h4>
                        </div>
                        <div className="subcsription-details">
                          <h4>maintain account</h4>
                          <h5>
                            <i className="fas fa-user-plus" />
                            {subscription.no_of_account}
                          </h5>
                          <p>{subscription.description}</p>
                          <div className="text-right mt-4">
                            <Link to="/invoice" className="btn btn-danger">
                              pay now
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
      </div>
    );
  }
}

export default SubscriptionComponent;
