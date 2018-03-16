import React, { Component } from 'react';
import EccentricNavBar from '../navbar/navbar'

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
            <div className="container-fluid registration-form-container">
            <div className="row">
                    <div className="col-md-12" style={{ padding: 0, borderRadius: 0 }} >
                        <EccentricNavBar />
                    </div>

                </div>
                <Header />
                <RegistrationForm />
            </div>
        )
    }
}

export default Registration;