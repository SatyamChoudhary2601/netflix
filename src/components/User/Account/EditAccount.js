import React, { Component } from "react";
import Helper from "../../Helper/helper";

class EditAccountComponent extends Helper {
  state = {
    data: {}
  };
  async componentDidMount() {
    await this.getUserDetails();
  }

  handleSubmit = event => {
    event.preventDefault();

    this.updateProfile();
  };
  render() {
    const { data } = this.state;
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
                  <h3 className="register-box-head">edit profile</h3>
                  <form onSubmit={this.handleSubmit} className="auth-form">
                    <div className="form-group">
                      <label htmlFor="name">name</label>
                      <input
                        type="text"
                        onChange={this.handleChange}
                        className="form-control"
                        id="name"
                        name="name"
                        value={data.name}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email address</label>
                      <input
                        type="text"
                        onChange={this.handleChange}
                        className="form-control"
                        id="email"
                        name="email"
                        value={data.email}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="mobile">mobile number</label>
                      <input
                        type="text"
                        onChange={this.handleChange}
                        className="form-control"
                        id="mobile"
                        name="mobile"
                        value={data.mobile}
                      />
                    </div>
                    <button className="btn btn-danger auth-btn mt-4">
                      save
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

export default EditAccountComponent;
