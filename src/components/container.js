import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import LoginPage from './user-login/login-page'

class Container extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="page-container">
                <LoginPage />
            </div>
        )
    }
}

export default Container;