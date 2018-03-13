import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import Title from './title';
import SideBar from './sidebar/sidebar'
import LoginPage from './user-login/login-page'
import TileContainer from './dashboard/tile-container';
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
                <div className="row dashboard-row">
                    <TileContainer />
                </div>

            </div>
        )
    }
}

export default Container;