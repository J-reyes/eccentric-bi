import React, { Component } from 'react';
import axios from 'axios';

class CreateLead extends Component {

    // Holds Form Data to be sent in JSON format

    constructor(props) {
        super(props);
        this.state = { 
            lead: {
                name: '',
                email: '',
                phone: '',
                description: '',
                timeOfContact: '',
                isComplete: false,
                userId: 0
            }
         };
    }

    // click handler for sending form data to web API; creates a new lead in DB
    saveLead = event => {
        event.preventDefault();
        let newLead = {
            ...this.state.lead,
            userId: this.props.id       // This guarantees that userId will be updated with props.id
        };

        axios.post(`http://192.168.7.244:5000/api/leads`, newLead)
        .then(res => {
            console.log("Successful Post: CreateLead Component", res.data);
        })
    }

    render() { 
        return ( 
            <div className="container">
                <form onSubmit={e => this.saveLead(e)} className="col-sm-10 card">
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" value={this.state.lead.name} onChange={e => this.setState({ lead: { ...this.state.lead, name: e.target.value }})} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" value={this.state.lead.email} onChange={e => this.setState({ lead: { ...this.state.lead, email: e.target.value }})} />
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input type="number" className="form-control" value={this.state.lead.phone} onChange={e => this.setState({ lead: { ...this.state.lead, phone: e.target.value }})} />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <input type="text" className="form-control" value={this.state.lead.description} onChange={e => this.setState({ lead: { ...this.state.lead, description: e.target.value }})} />
                    </div>
                    <div className="form-group">
                        <label>Date of Meeting</label>
                        <input type="date" className="form-control" value={this.state.lead.timeOfContact} onChange={e => this.setState({ lead: { ...this.state.lead, timeOfContact: e.target.value }})} />
                    </div>
                    <div className="form-group">
                        <label>Complete?</label>
                        <input 
                            type="checkbox" 
                            className="form-check-input"  
                            onClick={e => this.setState({ lead: { ...this.state.lead, isComplete: e.target.checked }})} />
                    </div>
                    <button type="submit" className="btn btn-info">Submit Lead</button>
                </form>
            </div>
         )
    }
}
 
export default CreateLead;