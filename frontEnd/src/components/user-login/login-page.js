import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import UserLogin from './user-login';
import Title from './../title';
import EccentricNavBar from '../navbar/navbar'

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        console.log(this.props.location)
    }
    render() {
        return (

            <div className="container-fluid login-container">
               
            <div className="container-fluid ">
                
                <UserLogin location={this.props.location} />
            </div>
            </div>


        )
    }
}

export default LoginPage;