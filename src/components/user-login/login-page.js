import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import UserLogin from './user-login';
import Title from './../title';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="container-fluid">
                <Title/>
                <UserLogin/>
            </div>


        )
    }
}

export default LoginPage;