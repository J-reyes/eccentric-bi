import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Container from './components/container';


import { BrowserRouter } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.css';



ReactDOM.render(

    <BrowserRouter>
        <Container />
    </BrowserRouter>
    , document.getElementById('app')
);