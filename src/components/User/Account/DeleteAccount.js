import React, { Component } from "react";

import api from "../../../Environment";

import {
  setTranslations,
  setDefaultLanguage,
  translate
} from "react-multi-lang";
import en from "../../translation/en.json";
import pt from "../../translation/pt.json";

setTranslations({ pt, en });
setDefaultLanguage("pt");

class DeleteAccountComponent extends Component {
  state = {
    data: {}
  };

  handleDelete = event => {
    event.preventDefault();
    api.postMethod("delete_account", this.state.data).then(function(response) {
      if (response.data.success === true) {
      }
    });
  };
  render() {
    const { t } = this.props;

    var bgImg = {
      backgroundImage: "url(../assets/img/bg.jpg)"
    };
    return (
      <div>
        <div className="common-bg-img" style={bgImg}>
          <div className="main">
            <div className="row">
              <div className="col-sm-9 col-md-7 col-lg-5 col-xl-4 auto-margin">
                <div className="register-box">
                  <h3 className="register-box-head">{t("delete")} {t("profaccountile")}</h3>
                  <form
                    onSubmit={this.handleDelete}
                    className="auth-form"
                    action=""
                  >
                    <p className="note">
                      <b>{t("note")}:</b> {t("delete_account_note")}
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
                    <button className="btn btn-danger auth-btn mt-4">
                    {t("change_password")}
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

export default translate(DeleteAccountComponent);
