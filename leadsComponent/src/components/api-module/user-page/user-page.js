import React, { Component } from 'react';
import CreateLead from './../create-lead/create-lead';
import LeadTable from './../lead-table/lead-table-container'
import axios from 'axios'

class UserPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userID: 0
        }
    }

    componentDidMount = () => {
        axios.get(`http://192.168.7.244:5000/api/users/find/${this.props.currentUser.username}`)
        .then(res => {
            this.setState({
                userID: res.data.id
            });
        })
    }

    render() {
        return (
            <div className="container">
                <LeadTable />
                <CreateLead id={this.state.userID}/>
            </div>
        )
    }

}

export default UserPage;