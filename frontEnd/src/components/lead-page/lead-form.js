import React, { Component } from 'react';
import axios from 'axios'

class LeadForm extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="container-fluid "   >
                <hr></hr>

                <form action="" className="form-horizontal" id="leadForm">

                    <div className="form-group" id="formInput">
                        <h3 className="control-label col-sm-2 ">Name:</h3>
                        <div className="col-xs-6 col-md-offset">
                            <input type="text" className="form-control" id="name" autoComplete="given-name" placeholder="Full Name" />
                        </div>
                    </div>
                    <div className="form-group " id="formInput">
                        <h3 className="control-label col-sm-2 ">Email:</h3>
                        <div className="col-xs-6 col-md-offset">
                            <input type="emial" className="form-control" id="email" autoComplete="given-email" placeholder="Enter Email" />
                        </div>
                    </div>
                    <div className="form-group " id="formInput" >
                        <h3 className="control-label col-sm-2 ">Phone:</h3>
                        <div className="col-xs-6 col-md-offset">
                            <input type="text" className="form-control" id="phone" autoComplete="given-phone" placeholder="Phone Number" />
                        </div>
                    </div>
                    <div className="form-group " id="formInput">
                        <h3 className="control-label col-sm-2 ">Descrption:</h3>
                        <div className="col-xs-6 col-md-offset">
                            <textarea type="text" className="form-control" id="description" autoComplete="given-description" placeholder="Enter Description" />
                        </div>
                    </div>
                    <div className="form-group " id="formInput">
                        <h3 className="control-label col-sm-2 ">Time of First Contact:</h3>
                        <div className="col-xs-6 col-md-offset">
                            <input type="date" className="form-control" id="timeOfContact" autoComplete="given-timeOfContact" placeholder="Enter Time of Contact" />
                        </div>
                    </div>
                    <div className="form-group " id="formInput">
                        <h3 className="control-label col-sm-2 ">Owner:</h3>
                        <div className="col-xs-6 col-md-offset">
                            <input type="text" className="form-control" id="owner" autoComplete="given-owner" placeholder="Owner's Name" />
                        </div>
                    </div>
                    <div className="form-group ">
                        <h3 className="control-label col-sm-2 ">Complete:</h3>
                        <div className="col-xs-3 col-md-offset">
                            <input type="checkbox" id="completeBox" />
                        </div>
                    </div>
                    <div className="form-group ">

                        <div className="col-xs-3 col-md-offset-3 text-center">
                            <button type="submit" className="btn btn-success btn-block" >Submit New Lead</button>

                        </div>
                    </div>
                </form>

                <hr></hr>
            </div>
            
        )
    }
}

export default LeadForm;