import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Container from './components/container';
import LoginPage from './components/user-login/login-page';

import store from './components/redux/store/index'
import { Provider } from 'react-redux'

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
    <LoginPage />
    </BrowserRouter></Provider>
            , document.getElementById('app')
);