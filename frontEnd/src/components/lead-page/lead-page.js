import React, { Component } from 'react';
import EccentricNavBar from '../navbar/navbar'
import axios from 'axios'
// import Registration Form
import LeadForm from './lead-form';

import SideBar from '../sidebar/sidebar'


class LeadPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    post = payload => {
        var body = {
            Name: payload.addLeadName,
            Email: payload.addEmail,
            Phone: payload.addPhone,
            Description: payload.addDescription,
            TimeOfContact: payload.addTimeOfContact,
            Owner: payload.addOwner,
            IsComplete: payload.addComplete
        }
        axios.post('http://localhost:5000/api/leads', body)
            .then(response => {Console.log("Successful Post")})
    }

    render() {
        return (
            <div className="container-fluid ">

                <div className="row">

                    <div className="col-md-2" style={{ padding: 0 }} >
                        <SideBar />
                    </div>
                    <div className="col-md-10" style={{ padding: 0 }}>
                        <EccentricNavBar />
                        <LeadForm post={this.post}/>

                    </div>

                </div>



            </div>
        )
    }
}

export default LeadPage;