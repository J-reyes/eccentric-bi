import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Container from './components/container';
import LoginPage from './components/user-login/login-page';
import TileContainer from './components/dashboard/tile-container';
import NavBar from './components/navbar/navbar';

import store from './components/redux/store/index'
import { Provider } from 'react-redux'

import { BrowserRouter } from 'react-router-dom';


// import Registration from './components/registration/registration';
import UserProfile from './components/user-profile/user-profile';

// testing charts
import Chart from './components/tiles/Chart'



ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
    <UserProfile />
    </BrowserRouter></Provider>
            , document.getElementById('app')
);