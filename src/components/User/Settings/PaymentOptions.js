import React, { Component } from "react";

import { Link } from "react-router-dom";

import ContentLoader from "../../Static/contentLoader";

import {
    setTranslations,
    setDefaultLanguage,
    translate
} from "react-multi-lang";
import en from "../../translation/en.json";
import pt from "../../translation/pt.json";

class PaymentOptions extends Component {
    state = {
        loadingFirst: true
    };
    componentDidMount() {
        if (this.props.location.state) {
            this.setState({ loadingFirst: false });
        } else {
            window.location = "/home";
        }
    }
    render() {
        const { t } = this.props;

        if (this.state.loadingFirst) {
            return <ContentLoader />;
        } else {
            const { videoDetailsFirst } = this.props.location.state;
            return (
                <div>
                    <div className="main">
                        <div className="top-bottom-spacing">
                            <div className="row">
                                <div className="col-sm-10 col-md-9 col-lg-7 col-xl-6 auto-margin">
                                    <div className="payment-option">
                                        <h4 className="billing-head">
                                            <i className="far fa-credit-card" />
                                            select option
                                        </h4>
                                        <div className="payment-note">
                                            <p className="mb-0">
                                                <span className="bold">
                                                    Note:
                                                </span>{" "}
                                                You are a Normal User. If you
                                                are Paid User, you need not make
                                                any payment to watch the video.
                                                If you want to become a paid
                                                user, please choose a plan so as
                                                to become a paid user.
                                            </p>
                                        </div>

                                        <div className="payment-method">
                                            <div className="left">
                                                <h4>plans</h4>
                                            </div>
                                            <div className="right">
                                                <h4>subscription plan</h4>
                                                <Link
                                                    to="/subscription"
                                                    className="btn-link"
                                                >
                                                    click here to subscribe
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="payment-method">
                                            <div className="left">
                                                <h4>
                                                    {videoDetailsFirst.currency}
                                                    {
                                                        videoDetailsFirst.ppv_amount
                                                    }
                                                </h4>
                                            </div>
                                            <div className="right">
                                                <h4>
                                                    pay per video (
                                                    {videoDetailsFirst.ppv_page_type ==
                                                    1 ? (
                                                        <span>
                                                            {t(
                                                                "one_time_payment"
                                                            )}
                                                        </span>
                                                    ) : (
                                                        <span>
                                                            {t(
                                                                "recurring_payment"
                                                            )}
                                                        </span>
                                                    )}
                                                    )
                                                </h4>
                                                <Link
                                                    to={{
                                                        pathname:
                                                            "/pay-per-view",
                                                        state: {
                                                            videoDetailsFirst: videoDetailsFirst
                                                        }
                                                    }}
                                                    className="btn-link"
                                                >
                                                    click here to pay per video
                                                </Link>
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
}
export default translate(PaymentOptions);
