import React, {Component} from 'react';

import {Link} from 'react-router-dom';

class StaticSidebar extends Component {

    render(){
        return(
            <div>
                <div className="top-bottom-spacing">
                    <ul className="static-sidebar-list">
                        <li className="active">
                            <Link to="/page">about us</Link>
                        </li>
                        <li>
                            <Link to="/page">privacy policy</Link>
                        </li>
                        <li>
                            <Link to="/page">terms and conditions</Link>
                        </li>
                        <li>
                            <Link to="/page">contact us</Link>
                        </li>
                        <li>
                            <Link to="/page">help</Link>
                        </li>
                        <li>
                            <Link to="/page">refund policy</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

}

export default StaticSidebar;