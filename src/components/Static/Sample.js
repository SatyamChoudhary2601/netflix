import React, {Component} from 'react';

import {Link} from 'react-router-dom';

class Sample extends Component{
    render(){
        return(
            <div className="top-bottom-spacing">
                <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#myModal">
                confirmation modal
                </button>

                <div className="modal fade confirmation-popup" id="myModal">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                        
                            <div className="modal-header">
                                <h4 className="modal-title">Delete Account</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            
                            <div className="modal-body">
                                <h5>are you sure you want to delete Account?</h5>
                            </div>
                            
                            <div className="modal-footer">
                                <button type="button" className="btn btn-link" data-dismiss="modal">No</button>
                                <button type="button" className="btn btn-danger">Yes</button>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Sample;