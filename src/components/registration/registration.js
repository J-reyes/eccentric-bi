import React, { Component } from 'react';

// import Registration Form
import RegistrationForm from './register-form';
// import header from registration folder
import Header from './header';

// import from navbar folder
import NavBar from '../navbar/navbar';

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="container-fluid">
                <Header />
                <RegistrationForm />
            </div>
        )
    }
}

export default Registration;