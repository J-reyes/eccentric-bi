import React, { Component } from 'react';

// import navBar from navbar folder
import EccentricNavBar from '../navbar/navbar'

// import UerForm
import UserForm from './user-form'

import SideBar from '../sidebar/sidebar'

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="container-fluid">
              

                <div className="row">
               
                    <div className="col-md-2" style={{ padding: 0 }} >
                        <SideBar />
                    </div>
                    <div className="col-md-10" style={{ padding: 0 }}>
                    <EccentricNavBar  />
                    <UserForm />
                    </div>
                   


                </div>


            </div>
        )
    }
}

export default UserProfile;