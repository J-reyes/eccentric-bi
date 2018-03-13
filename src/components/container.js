import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import LoginPage from './user-login/login-page'

// import components 
import SideBar from './sidebar/sidebar.js';




class Container extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
<<<<<<< HEAD
            <div className="container-fluid">
                
                    <SideBar />
              
                

=======
            <div className="page-container">
                <LoginPage />
>>>>>>> e72d51b124a7e654389560a58ce7ce0086a2a0d4
            </div>
        )
    }
}

export default Container;