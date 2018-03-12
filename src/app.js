import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Container from './components/container';
import LoginPage from './components/user-login/login-page';

import store from './components/redux/store/index'
import { Provider } from 'react-redux'

import { BrowserRouter } from 'react-router-dom';
import RegistrationPage from './components/registration/registration';





ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
    <Container />
    </BrowserRouter></Provider>
            , document.getElementById('app')
);