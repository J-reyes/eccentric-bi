import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Container from './components/container';
import Dashboard from './components/dashboard/dashboard';

import store from './components/redux/store/index'
import { Provider } from 'react-redux'

import { BrowserRouter } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.css';



ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
    <Container />
    </BrowserRouter></Provider>
            , document.getElementById('app')
);