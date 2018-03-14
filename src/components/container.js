import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import Title from './title';
import SideBar from './sidebar/sidebar'
import LoginPage from './user-login/login-page'
import DashBoardPage from './dashboard/dasboard-page';
import NavBar from './navbar/navbar';
import UserProfile from './user-profile/user-profile';





class Container extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container-fluid">


                <div>
                    <SideBar />

                </div>
                <div className="contaner-fluid pull-right">
                    <NavBar />
                </div>
                <div >
                    <Title />



                </div>
                <DashBoardPage />


                <Switch>
                    <Route exact path="/" render={() => <LoginPage />} />
                    <Route path="/dashboard" render={() => <Dashboard />} />
                    <Route path="/userprofile" render={() => <UserProfile />} />
                </Switch>
            </div>

        )
    }
}

export default Container;