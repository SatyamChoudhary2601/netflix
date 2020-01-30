import React, { Component } from "react";
import api from "../../../Environment";
import Helper from "../../Helper/helper";
import { withToastManager } from "react-toast-notifications";
import ToastDemo from "../../Helper/toaster";
import { translate } from "react-multi-lang";
import configuration from "react-global-configuration";

class DeleteAccountComponent extends Helper {
    // constructor(props) {
    //     super(props);
    // }

    state = {
        data: {
            password: ""
        },
        loadingContent: null,
        buttonDisable: false
    };

    handleDelete = event => {
        event.preventDefault();
        // const { state } = this.props.location;
        this.setState({
            loadingContent: "Loading... Please wait..",
            buttonDisable: true
        });
        api.postMethod("deleteAccount", this.state.data)
            .then(function(response) {
                console.log("RESPONSE", response);
                if (response.data.success) {
                    ToastDemo(
                        this.props.toastManager,
                        response.data.message,
                        "success"
                    );
                    this.props.history.push("/logout");

                    this.setState({
                        loadingContent: null,
                        buttonDisable: false
                    });
                } else {
                    alert(response.data.error_messages);
                    // ToastDemo(
                    //     this.props.toastManager,
                    //     response.data.error_messages,
                    //     "error"
                    // );
                    this.setState({
                        loadingContent: null,
                        buttonDisable: false
                    });
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
            backgroundImage: `url(${configuration.get(
                "configData.common_bg_image"
            )})`
        };
        return (
            <div>
                <div className="common-bg-img" style={bgImg}>
                    <div className="main">
                        <div className="row">
                            <div className="col-sm-9 col-md-7 col-lg-5 col-xl-4 auto-margin">
                                <div className="register-box">
                                    <h3 className="register-box-head">
                                        {t("delete_account")}
                                    </h3>
                                    <form
                                        onSubmit={this.handleDelete}
                                        className="auth-form"
                                    >
                                        <p className="note">
                                            <b>{t("note")}:</b>{" "}
                                            {t("delete_account_note")}
                                        </p>
                                        <div className="form-group">
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="enter password"
                                                name="password"
                                                value={this.state.data.password}
                                                onChange={this.handleChange}
                                            />
                                        </div>

                                        <button
                                            className="btn btn-danger auth-btn mt-4"
                                            disabled={this.state.buttonDisable}
                                        >
                                            {this.state.loadingContent != null
                                                ? this.state.loadingContent
                                                : this.props.t("delete")}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default withToastManager(translate(DeleteAccountComponent));
