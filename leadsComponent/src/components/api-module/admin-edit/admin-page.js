import React, { Component } from 'react';
import LeadTableContainer from '../lead-table/lead-table-container';
import UserContainer from '../user-table/user-container';

class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="container">
                {/* Displays All Users in DB */}
                <UserContainer />

                {/* Displays All Leads in DB */}
                <LeadTableContainer />
            </div>
        )
    }
}

export default AdminPage;