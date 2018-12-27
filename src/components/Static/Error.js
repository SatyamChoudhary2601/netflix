import React, {Component} from 'react';

import {Link} from 'react-router-dom';

class ErrorComponent extends Component{
    render(){
        return(
            <div className="error-bg">
                <div class="row width-100">
                    <div class="col-12 col-sm-10 col-md-8 col-lg-6 error-sec text-center">
                        <div>
                            <img src="assets/img/error.png" class="error-img" alt="error_img" />
                            <h4 class="error-text">An error Occurred in the Application And Your Page could not be Served</h4>
                            <Link to="/" class="btn btn-danger mb-5">go back</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ErrorComponent;