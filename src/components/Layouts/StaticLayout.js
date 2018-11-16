import React, {Component} from 'react';

import StaticHeader from './SubLayout/StaticHeader';

import Footer from '../Layouts/SubLayout/Footer';

class StaticLayout extends Component {

    constructor(props) {

        super(props);

        this.eventEmitter = this.props.screenProps;

        let userId = (localStorage.getItem('userId') !== '' && localStorage.getItem('userId') !== null && localStorage.getItem('userId') !== undefined) ? localStorage.getItem('userId') : '';

        let accessToken = (localStorage.getItem('accessToken') !== '' && localStorage.getItem('accessToken') !== null && localStorage.getItem('accessToken') !== undefined) ? localStorage.getItem('accessToken') : '';

        this.state = {
            
            isAuthenticated : userId && accessToken ? true : false

        }

    }


    render() {

        const {isAuthenticated} = this.state;

        return (
            <div className="wrapper">
               <StaticHeader />
               <div className="main">
                    {React.cloneElement(this.props.children, {eventEmitter : this.eventEmitter, data : isAuthenticated})}
               </div>
               <Footer />
            </div>
        )
    }
}
export default StaticLayout;

