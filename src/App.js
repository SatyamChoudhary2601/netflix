import React, { Component } from 'react';
import ReactTimeout from 'react-timeout';
import Emitter from './components/Services/EventEmitter';

import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import createHistory from 'history/createBrowserHistory';

//Layouts

import AuthLayout from '../src/components/Layouts/AuthLayout';
import StaticLayout from '../src/components/Layouts/StaticLayout';
import UserLayout from '../src/components/Layouts/UserLayout';
import EmptyLayout from '../src/components/Layouts/EmptyLayout';
import KidsLayout from '../src/components/Layouts/KidsLayout';

// Auth Layout
import LandingPage from '../src/components/Auth/LandingPage';
import RegisterComponent from '../src/components/Auth/Register';
import LoginCommponent from '../src/components/Auth/Login';
import ForgotPasswordComponent from '../src/components/Auth/ForgotPassword';

//Empty layout
import Sample from '../src/components/Static/Sample';
import ErrorComponent from '../src/components/Static/Error';
import ViewProfilesComponent from '../src/components/User/Account/ViewProfiles';
import ManageProfilesComponent  from '../src/components/User/Account/ManageProfiles';
import EditProfilesComponent from '../src/components/User/Account/Editprofile';
import LoaderComponent from './components/Static/Loader';
import VideoComponent from './components/User/Video/Video';

// User Layout
import Home from '../src/components/User/Home';
import AccountComponent from '../src/components/User/Account/Account';
import EditAccountComponent from '../src/components/User/Account/EditAccount';
import ChangePasswordComponent from '../src/components/User/Account/ChangePassword';
import DeleteAccountComponent from '../src/components/User/Account/DeleteAccount';
import SearchComponent from './components/User/Search';

import SubscriptionComponent from '../src/components/User/Settings/Subscription';
import BillingDetailsComponent from '../src/components/User/Settings/BillingDetails';
import BillingDetailsView from '../src/components/User/Settings/billing-view-details';
import AddCardComponent from '../src/components/User/Settings/AddCard';
import CardDetailsComponent from '../src/components/User/Settings/CardDetails';
import InvoiceComponent from '../src/components/User/Settings/Invoice';
import PayPerView from '../src/components/User/Settings/PayPerView';
import PaymentHistory from '../src/components/User/Settings/PaymentHistory';
import PaymentViewDetails from '../src/components/User/Settings/payment-view-details';
import PaymentOptions from '../src/components/User/Settings/PaymentOptions';
import PaymentSuccess from '../src/components/User/Settings/PaymentSuccess';
import PaymentFailure from '../src/components/User/Settings/PaymentFailure';
import Category from '../src/components/User/Video/Category';
import SubCategory from '../src/components/User/Video/SubCategory';

import HomeBanner from '../src/components/HomeBanner';

// Kids layout
import Kids from '../src/components/User/Kids/Kids';
import KidsOriginals from '../src/components/User/Kids/Originals';
import KidsCharacters from '../src/components/User/Kids/Characters';
import KidsCategory from '../src/components/User/Kids/Category';

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
              <AppRoute path={"/register"} component={RegisterComponent} layout={AuthLayout} screenProps={this.eventEmitter} />
              <AppRoute path={"/login"} component={LoginCommponent} layout={AuthLayout} screenProps={this.eventEmitter} />
              <AppRoute path={'/forgot-password'} component={ForgotPasswordComponent} layout={AuthLayout} screenProps={this.eventEmitter} />

              { /***Empty layout ****/}
              <AppRoute path={'/sample'} component={Sample} layout={EmptyLayout} screenProps={this.screenProps} />
              <AppRoute path={'/error'} component={ErrorComponent} layout={EmptyLayout} screenProps={this.eventEmitter} />
              <AppRoute path={"/view-profiles"} component={ViewProfilesComponent} layout={EmptyLayout} screenProps={this.EmptyLayout} />
              <AppRoute path={'/manage-profiles'} component={ManageProfilesComponent} layout={EmptyLayout} screenProps={this.eventEmitter} />
              <AppRoute path={'/edit-profile'} component={EditProfilesComponent} layout={EmptyLayout} screenProps={this.eventEmitter} />
              <AppRoute path={'/loader'} component={LoaderComponent} layout={EmptyLayout} screenProps={this.eventEmitter} />
              <AppRoute path={'/video'} component={VideoComponent} layout={EmptyLayout} screenProps={this.eventEmitter} />

              { /***user layout - Having differnt header and footer ****/}
              {/* <AppRoute authentication={this.state.authentication} path={"/home"} component={Home} layout={UserLayout} screenProps={this.eventEmitter}/> */}

              <AppRoute path={"/home"} component={Home} layout={UserLayout} screenProps={this.eventEmitter}/>
              <AppRoute path={'/account'} component={AccountComponent} layout={UserLayout} screenProps={this.eventEmitter} />
              <AppRoute path={'/edit-account'} component={EditAccountComponent} layout={UserLayout} screenProps={this.eventEmitter} />
              <AppRoute path={'/change-password'} component={ChangePasswordComponent} layout={UserLayout} screenProps={this.eventEmitter} />
              <AppRoute path={'/delete-account'} component={DeleteAccountComponent} layout={UserLayout} screenProps={this.eventEmitter} />
              <AppRoute path={'/search'} component={SearchComponent} layout={UserLayout} screenProps={this.eventEmitter} />
              <AppRoute path={'/subscription'} component={SubscriptionComponent} layout={UserLayout} screenProps={this.eventEmitter} />
              <AppRoute path={'/billing-details'} component={BillingDetailsComponent} layout={UserLayout} screenProps={this.eventEmitter} />
              <AppRoute path={'/billing-detail/view'} component={BillingDetailsView} layout={UserLayout} screenProps={this.eventEmitter} />
              <AppRoute path={'/add-card'} component={AddCardComponent} layout={UserLayout} screenProps={this.eventEmitter} />
              <AppRoute path={'/card-details'} component={CardDetailsComponent} layout={UserLayout} screenProps={this.eventEmitter} />
              <AppRoute path={'/invoice'} component={InvoiceComponent} layout={UserLayout} screenProps={this.eventEmitter} />
              <AppRoute path={'/pay-per-view'} component={PayPerView} layout={UserLayout} screenProps={this.eventEmitter} />
              <AppRoute path={'/payment-history'} component={PaymentHistory} layout={UserLayout} screenProps={this.eventEmitter} />
              <AppRoute path={'/payment/view-details'} component={PaymentViewDetails} layout={UserLayout} screenProps={this.eventEmitter} />
              <AppRoute path={'/payment-options'} component={PaymentOptions} layout={UserLayout} screenProps={this.eventEmitter} />
              <AppRoute path={'/payment-success'} component={PaymentSuccess} layout={UserLayout} screenProps={this.eventEmitter} />
              <AppRoute path={'/payment-failure'} component={PaymentFailure} layout={UserLayout} screenProps={this.eventEmitter} />
              <AppRoute path={'/category'} component={Category} layout={UserLayout} screenProps={this.eventEmitter} />
              <AppRoute path={'/sub-category'} component={SubCategory} layout={UserLayout} screenProps={this.eventEmitter} />
              <AppRoute path={'/home-banner'} component={HomeBanner} layout={UserLayout} screenProps={this.eventEmitter} />

              { /***kids layout - Having white header and footer ****/}

              <AppRoute path="/kids" exact component={Kids} layout={KidsLayout} screenProps={this.eventEmitter} />
              <AppRoute path="/kids/originals" component={ KidsOriginals } layout={KidsLayout} screenProps={this.eventEmitter} />
              <AppRoute path="/kids/characters" component={KidsCharacters} layout={KidsLayout} screenProps={this.eventEmitter} />
              <AppRoute path="/kids/category" component={KidsCategory} layout={KidsLayout} screenProps={this.eventEmitter} />

              { /***static layout - Having differnt header and footer ****/}

              <AppRoute path="/page" component={Page} layout={StaticLayout} screenProps={this.eventEmitter} />
   
          </Switch>
        </Router>
      );
    }
}

export default ReactTimeout(App);
