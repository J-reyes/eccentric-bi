import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Container from './components/container';


import store from './components/redux/store/index'
import { Provider } from 'react-redux'

import { BrowserRouter } from 'react-router-dom';


// import Registration from './components/registration/registration';
import UserProfile from './components/user-profile/user-profile';

// testing charts
import Chart from './components/tiles/Chart'
import DashboardTile from './components/dashboard/dashboard-tile';
import dashboard from './components/dashboard/dashboard';
import DashBoardPage from './components/dashboard/dasboard-page';



ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
    <Container />
    </BrowserRouter></Provider>
            , document.getElementById('app')
);