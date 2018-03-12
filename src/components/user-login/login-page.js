import React, { Component } from 'react';
import UserLogin from './user-login';
import Title from './../title';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="page-container">
                <Title />
                <UserLogin />
            </div>


        )
    }
}

export default LoginPage;