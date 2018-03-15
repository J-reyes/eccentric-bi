import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import UserLogin from './user-login';
import Title from './../title';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        console.log(this.props.location)
    }
    render() {
        return (
            <div className="container-fluid">
                <Title/>
                <UserLogin location={this.props.location}/>
            </div>


        )
    }
}

export default LoginPage;