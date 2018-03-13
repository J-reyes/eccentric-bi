import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Container from './components/container';
import LoginPage from './components/user-login/login-page';
import TileContainer from './components/dashboard/tile-container';
import NavBar from './components/navbar/navbar';

import store from './components/redux/store/index'
import { Provider } from 'react-redux'

import { BrowserRouter } from 'react-router-dom';
import Registration from './components/registration/registration';



console.log(store.getState())

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
    <TileContainer />
    </BrowserRouter></Provider>
            , document.getElementById('app')
);