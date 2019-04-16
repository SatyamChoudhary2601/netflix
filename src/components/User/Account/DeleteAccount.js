import React, { Component } from "react";

import api from "../../../Environment";

class DeleteAccountComponent extends Component {
  state = {
    data: {}
  };

  handleDelete = event => {
    event.preventDefault();
    api.postMethod("delete_account", this.state.data).then(function(response) {
      console.log("response", response);
      if (response.data.success === true) {
        console.log("Account Deleted");
      }
    });
  };
  render() {
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
                  <h3 className="register-box-head">delete account</h3>
                  <form
                    onSubmit={this.handleDelete}
                    className="auth-form"
                    action=""
                  >
                    <p className="note">
                      <b>Note:</b> Once your account is deleted, you would be
                      losing your history and Wish-List details.
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
                      change password
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

export default DeleteAccountComponent;
