import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import Title from './title';
import SideBar from './sidebar/sidebar'
import LoginPage from './user-login/login-page'
import Dashboard from './dashboard/dashboard';
import NavBar from './navbar/navbar';
import UserProfile from './user-profile/user-profile';
import Registration from './registration/registration'





class Container extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Registration} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/userprofile" component={UserProfile} />
                    <Route path="/login" component={LoginPage} />
                </Switch>
            </div>

        )
    }
}

export default Container;