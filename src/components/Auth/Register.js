import React, { Component } from "react";
import { Link } from "react-router-dom";
import Helper from "../Helper/helper";
import api from "../../Environment";
import { withToastManager } from "react-toast-notifications";
import ToastDemo from "../Helper/toaster";

import {
    setTranslations,
    setDefaultLanguage,
    translate
} from "react-multi-lang";
import en from "../translation/en.json";
import pt from "../translation/pt.json";

class RegisterComponent extends Helper {
    state = {
        data: {
            email: "",
            password: "",
            name: ""
        },
        loadingContent: null,
        buttonDisable: false
    };

    handleSubmit = event => {
        event.preventDefault();
        const { state } = this.props.location;
        this.setState({
            loadingContent: this.props.t("button_loading"),
            buttonDisable: true
        });
        api.postMethod("v4/register", this.state.data)
            .then(response => {
                if (response.data.success) {
                    ToastDemo(
                        this.props.toastManager,
                        response.data.message,
                        "success"
                    );
                    this.setState({
                        loadingContent: null,
                        buttonDisable: false
                    });
                    console.log("Yes");
                    window.location = state ? state.from.pathname : "/";
                } else {
                    ToastDemo(
                        this.props.toastManager,
                        response.data.error_messages,
                        "error"
                    );
                    this.setState({
                        loadingContent: null,
                        buttonDisable: false
                    });

                    if (response.data.error_code == 3001) {
                        setTimeout(function() {
                            window.location = "/login";
                        }, 3000);
                    }
                }
            })
            .catch(error => {
                this.setState({ loadingContent: null, buttonDisable: false });
                ToastDemo(this.props.toastManager, error, "error");
            });
    };

    render() {
        const { t } = this.props;
        var bgImg = {
            backgroundImage: "url(../assets/img/bg.jpg)"
        };
        const { data } = this.state;
        return (
            <div>
                <div className="common-bg-img" style={bgImg}>
                    <div className="auth-page-header">
                        <Link to={"/"}>
                            <img
                                src="../assets/img/streamview1.png"
                                className="site-logo"
                                alt="logo_img"
                            />
                        </Link>
                    </div>

                    <div className="row">
                        <div className="col-sm-9 col-md-7 col-lg-5 col-xl-4 auto-margin">
                            <div className="register-box">
                                <h3 className="register-box-head">
                                    {t("signup")}
                                </h3>
                                <form
                                    className="auth-form"
                                    onSubmit={this.handleSubmit}
                                >
                                    <div className="form-group">
                                        <label htmlFor="name">
                                            {t("full_name")}
                                        </label>
                                        <input
                                            onChange={this.handleChange}
                                            className="form-control"
                                            id="name"
                                            name="name"
                                            value={data.name}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">
                                            {t("email_address")}
                                        </label>
                                        <input
                                            type="email"
                                            onChange={this.handleChange}
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            value={data.email}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="pwd">
                                            {t("password")}
                                        </label>
                                        <input
                                            type="password"
                                            onChange={this.handleChange}
                                            className="form-control"
                                            id="pwd"
                                            name="password"
                                            value={data.password}
                                        />
                                    </div>
                                    <button
                                        className="btn btn-danger auth-btn mt-4"
                                        disabled={this.state.buttonDisable}
                                    >
                                        {this.state.loadingContent != null
                                            ? this.state.loadingContent
                                            : "sign up"}
                                    </button>
                                </form>

                                <div>
                                    <Link to="../account/view-profiles.html">
                                        <p className="social">
                                            <span>
                                                <i className="fab fa-facebook fb social-icons" />
                                            </span>
                                            {t("login_with")} {t("facebook")}
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <Link to="../account/view-profiles.html">
                                        <p className="social">
                                            <span>
                                                <i className="fab fa-google-plus-square google social-icons" />
                                            </span>
                                            {t("login_with")} {t("google")}
                                        </p>
                                    </Link>
                                </div>

                                <p className="auth-link">
                                    {t("already_have_account")}{" "}
                                    <Link to={"/login"} className="btn-link">
                                        {t("sign_in_now")}
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withToastManager(translate(RegisterComponent));
