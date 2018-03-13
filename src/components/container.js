import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import Title from './title';
import SideBar from './sidebar/sidebar'
import LoginPage from './user-login/login-page'
import Dashboard from './dashboard/dashboard';
import NavBar from './navbar/navbar';
// import components 
// import SideBar from './sidebar/sidebar.js';




class Container extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container-fluid">
                <SideBar className="pull-left" />
                <div className="row top-row">
                    <Title />
                    <NavBar />
                </div>
                <Switch>
                    <Route exact path="/" render={() => <LoginPage />} />
                    <Route path="/dashboard" render={() => <Dashboard />} />
                </Switch>

            </div>
        )
    }
}

export default Container;