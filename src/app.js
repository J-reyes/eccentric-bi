import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Container from './components/container';


import store from './components/redux/store/index'
import { Provider } from 'react-redux'

import { BrowserRouter } from 'react-router-dom';
// import Registration from './components/registration/registration';

// testing charts
import DoughnutTile from './components/tiles/doughnut-tile'



ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
    <DoughnutTile />
    </BrowserRouter></Provider>
            , document.getElementById('app')
);