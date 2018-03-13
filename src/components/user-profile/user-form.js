import React, { Component } from 'react';

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="main-content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="card">
                                        <div className="header">
                                            <h4 className="title">Edit Profile</h4>
                                            <p className="catergory"></p>
                                        </div>

                                        <div className="content">
                                            <form action="">
                                                <div className="row">
                                                    <div className="col-md-5">
                                                        <div className="form-group">
                                                            <label htmlFor=""> COMPANY </label>
                                                            <input type="text" placeholder="Company" className="form-control" />
                                                        </div>
                                                    </div>

                                                    <div className="col-md-3">
                                                        <div className="form-group">
                                                            <label htmlFor=""> USERNAME </label>
                                                            <input type="text" placeholder="User Name" className="form-control" />
                                                        </div>
                                                    </div>

                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label htmlFor=""> EMAIL ADDRESS </label>
                                                            <input type="email" placeholder="Email Address" className="form-control" />
                                                        </div>

                                                    </div>

                                                </div>

                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor=""> FIRST NAME </label>
                                                            <input type="text" placeholder="First Name" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor=""> LAST NAME </label>
                                                            <input type="text" placeholder="Last Name" className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label htmlFor="" className="control-label"> ADDRESS </label>
                                                            <input type="text" placeholder="Email Address" className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label htmlFor="" className="control-label"  > CITY </label>
                                                            <input type="text" placeholder="City" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label className="control-label"> COUNTRY </label>
                                                            <input type="text" className="form-control" placeholder="County" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <labe className="control-label"> POSTAL CODE </labe>
                                                            <input type="text" className="form-control" placeholder="Postal Code" />
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <label htmlFor="" className="control-label"> ABOUT ME </label>
                                                                <textarea id="textArea" cols="20" rows="5" placeholder="Here can be your description" className="form-control" ></textarea>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <button type="submit" className="btn-fill pull-right btn btn-info" >Update Profile</button>
                                                </div>
                                                <div className="clearfix"></div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="card card-user">
                                        <div className="image">
                                            <img src="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400" alt="" />
                                        </div>
                                        <div className="content">
                                            <div className="user">
                                                <a href="#pablo"></a>
                                                <img src="" alt="" className="avatar border-gray"/>

                                            </div>
                                        </div>
                                        <div className="text-center"></div>

                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserForm;