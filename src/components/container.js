import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import Title from './title';
import SideBar from './sidebar/sidebar'
import LoginPage from './user-login/login-page'
import Dashboard from './dashboard/dashboard';
import NavBar from './navbar/navbar';
import DashBoardPage from './dashboard/dasboard-page';





class Container extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (


            <div className="container-fluid">
                <NavBar />
                <div>
                <SideBar className="pull-left" />
                </div>
               
                <DashBoardPage />


                <Switch>
                    <Route exact path="/" render={() => <LoginPage />} />
                    <Route path="/dashboard" render={() => <Dashboard />} />
                </Switch>

            </div>


        )
    }
}

export default Container;