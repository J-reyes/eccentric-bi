import React, { Component } from 'react';


class LeadForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addLeadName: '',
            addEmail: '',
            addPhone: '',
            addDescription: '',
            addTimeOfContact: '',
            addOwner: '',
            addComplete: false,
        }
    }


    postNewLead = (e) => {
        e.preventDefault();
        this.props.post(this.state);
        this.setState({
            addLeadName: '',
            addEmail: '',
            addPhone: '',
            addDescription: '',
            addTimeOfContact: '',
            addOwner: '',
            addComplete: false,
        })

    }

    render() {
        return (
            <div className="container-fluid "   >
                <hr></hr>

                <form action="" className="form-horizontal" id="leadForm">

                    <div className="form-group" id="formInput">
                        <h3 className="control-label col-sm-2 ">Name:</h3>
                        <div className="col-xs-6 col-md-offset">
                            <input type="text" className="form-control" id="name" autoComplete="given-name" placeholder="Full Name" onChange={(e) => { this.setState({ addLeadName: e.target.value }) }} value={this.state.addLeadName} />
                        </div>
                    </div>
                    <div className="form-group " id="formInput">
                        <h3 className="control-label col-sm-2 ">Email:</h3>
                        <div className="col-xs-6 col-md-offset">
                            <input type="emial" className="form-control" id="email" autoComplete="given-email" placeholder="Enter Email" onChange={(e) => { this.setState({ addEmail: e.target.value }) }} value={this.state.addEmail} />
                        </div>
                    </div>
                    <div className="form-group " id="formInput" >
                        <h3 className="control-label col-sm-2 ">Phone:</h3>
                        <div className="col-xs-6 col-md-offset">
                            <input type="text" className="form-control" id="phone" autoComplete="given-phone" placeholder="Phone Number" onChange={(e) => { this.setState({ addPhone: e.target.value }) }} value={this.state.addPhone} />
                        </div>
                    </div>
                    <div className="form-group " id="formInput">
                        <h3 className="control-label col-sm-2 ">Descrption:</h3>
                        <div className="col-xs-6 col-md-offset">
                            <textarea type="text" className="form-control" id="description" autoComplete="given-description" placeholder="Enter Description" onChange={(e) => { this.setState({ addDescription: e.target.value }) }} value={this.state.addDescription} />
                        </div>
                    </div>
                    <div className="form-group " id="formInput">
                        <h3 className="control-label col-sm-2 ">Time of First Contact:</h3>
                        <div className="col-xs-6 col-md-offset">
                            <input type="date" className="form-control" id="timeOfContact" autoComplete="given-timeOfContact" placeholder="Enter Time of Contact" onChange={(e) => { this.setState({ addTimeOfContact: e.target.value }) }} value={this.state.addTimeOfContact} />
                        </div>
                    </div>
                    <div className="form-group " id="formInput">
                        <h3 className="control-label col-sm-2 ">Owner:</h3>
                        <div className="col-xs-6 col-md-offset">
                            <input type="text" className="form-control" id="owner" autoComplete="given-owner" placeholder="Owner's Name" onChange={(e) => { this.setState({ addOwner: e.target.value }) }} value={this.state.addOwner} />
                        </div>
                    </div>
                    <div className="form-group ">
                        <h3 className="control-label col-sm-2 ">Complete:</h3>
                        <div className="col-xs-3 col-md-offset">
                            <input type="checkbox" id="completeBox" onChange={(e) => { this.setState({ addComplete: !this.state.addComplete }) }} defaultChecked={this.state.checked} value={this.state.addComplete} />
                        </div>
                    </div>
                    <div className="form-group ">

                        <div className="col-xs-3 col-md-offset-3 text-center">
                            <button type="submit" className="btn btn-success btn-block" onClick={this.postNewLead} >Submit New Lead</button>

                        </div>
                    </div>
                </form>

                <hr></hr>
            </div>

        )
    }
}

export default LeadForm;