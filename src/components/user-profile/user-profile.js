import React, { Component } from 'react';

// import navBar from navbar folder
import NavBar from '../navbar/navbar'

// import UerForm
import UserForm from './user-form'

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="container-fluid">
                    <NavBar />
                </div>

                <div className="row">

                    <UserForm />


                </div>


            </div>
        )
    }
}

export default UserProfile;