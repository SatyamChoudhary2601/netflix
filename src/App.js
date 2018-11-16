import React, { Component } from 'react';
import ReactTimeout from 'react-timeout';
import Emitter from './components/Services/EventEmitter';

import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import createHistory from 'history/createBrowserHistory';

//Layouts

import AuthLayout from '../src/components/Layouts/AuthLayout';
import StaticLayout from '../src/components/Layouts/StaticLayout';
import UserLayout from '../src/components/Layouts/UserLayout';

// Auth Layout
import LandingPage from '../src/components/Auth/LandingPage';

// User Layout
import Home from '../src/components/User/Home';

// Static layout
import Page from '../src/components/Static/Page';


const history = createHistory();

const AppRoute = ({ component: Component, layout: Layout, screenProps : ScreenProps, ...rest }) => (
  <Route {...rest} render={props => (
    <Layout screenProps={ScreenProps}>
      <Component {...props}/>
    </Layout>
  )} />
)


const PrivateRoute = ({component: Component, layout: Layout, screenProps : ScreenProps, authentication, ...rest}) => (
    <Route
      {...rest}
      render={(props) => authentication === true
        ? <Layout screenProps={ScreenProps}><Component {...props}/></Layout>
        : <Redirect to={{pathname: '/home', state: {from: props.location}}} />}
    />
)

class App extends Component {

  
    constructor(props) {

        super(props);

        let userId = localStorage.getItem('userId');

        let accessToken = localStorage.getItem('accessToken');

        this.state = { loading : true, authentication : userId && accessToken ? true : false};

        this.eventEmitter = new Emitter();

        history.listen((location, action) => {

            userId = localStorage.getItem('userId');

            accessToken = localStorage.getItem('accessToken');

           // this.setState({ loading : true, authentication : userId && accessToken ? true : false});

           this.setState({ loading : true, authentication : true});

            // this.loadingFn();

            document.body.scrollTop = 0;

        });

    }

    loadingFn() {

      this.props.setTimeout(() => { this.setState({ loading : false}) }, 3 * 1000);
  
    }
  
    componentDidMount() {
  
       //this.loadingFn();
  
    }

    render() {

      /*const isLoading = this.state.loading;
      
      if (isLoading) {
  
        return (
          <div className="wrapper">
            <div className="loader-warpper">
                <div id="loader">
                  <ul>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                  </ul>
                </div>
            </div>
          </div>
        );
  
      } */
      
      return (
        <Router history={history}>
          <Switch>
              { /***Auth layout - Having only footer ****/}

              <AppRoute exact path={"/"} component={LandingPage} layout={AuthLayout} screenProps={this.eventEmitter}/>
  
              { /***user layout - Having differnt header and footer ****/}

              <AppRoute authentication={this.state.authentication} path={"/home"} component={Home} layout={UserLayout} screenProps={this.eventEmitter}/>

              { /***static layout - Having differnt header and footer ****/}

              <AppRoute path="/page" component={Page} layout={StaticLayout} screenProps={this.eventEmitter} />
   
          </Switch>
        </Router>
      );
    }
}

export default ReactTimeout(App);
