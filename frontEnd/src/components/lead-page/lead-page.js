import React, { Component } from 'react';
import EccentricNavBar from '../navbar/navbar'

// import Registration Form
import LeadForm from './lead-form';

import SideBar from '../sidebar/sidebar'


class LeadPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
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
                        <LeadForm />
                        
                    </div>

                </div>



            </div>
        )
    }
}

export default LeadPage;