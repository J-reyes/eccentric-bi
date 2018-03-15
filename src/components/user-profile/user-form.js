import React, { Component } from 'react';
import SvgIcon from 'react-icons-kit';
import { facebook2 } from 'react-icons-kit/icomoon/facebook2';
import { twitter } from 'react-icons-kit/icomoon/twitter';
import { googlePlus2 } from 'react-icons-kit/icomoon/googlePlus2'; 

import EccentricNavBar from '../navbar/navbar'


class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="container">
                
                 

                    <div className="row">
                        <div className="main-content">


                            <div className="row">
                                <div className="col-md-8" id="card-container">
                                    <div className="card">
                                        <div className="header">
                                            <h4 className="title">Edit Profile</h4>
                                            <p className="catergory"></p>
                                        </div>

                                        <div className="content-card">
                                            <form action="">
                                                <div className="row">
                                                    <div className="col-md-5">
                                                        <div className="form-group">
                                                            <label htmlFor="" style={{fontSize: 12}} > COMPANY </label>
                                                            <input type="text" placeholder="Company" className="form-control" style={{height: 44, fontSize: 14}} />
                                                        </div>
                                                    </div>

                                                    <div className="col-md-3">
                                                        <div className="form-group">
                                                            <label htmlFor="" style={{fontSize: 12}} > USERNAME </label>
                                                            <input type="text" placeholder="User Name" className="form-control" style={{height: 44, fontSize: 14}} />
                                                        </div>
                                                    </div>

                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label htmlFor="" style={{fontSize: 12}} > EMAIL ADDRESS </label>
                                                            <input type="email" placeholder="Email Address" className="form-control" style={{height: 44, fontSize: 14}} />
                                                        </div>

                                                    </div>

                                                </div>

                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor="" style={{fontSize: 12}} > FIRST NAME </label>
                                                            <input type="text" placeholder="First Name" className="form-control"  style={{height: 44, fontSize: 14}}/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor="" style={{fontSize: 12}} > LAST NAME </label>
                                                            <input type="text" placeholder="Last Name" className="form-control" style={{height: 44, fontSize: 14}} />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label htmlFor="" className="control-label" style={{fontSize: 12}} > ADDRESS </label>
                                                            <input type="text" placeholder="Email Address" className="form-control" style={{height: 44, fontSize: 14}} />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label htmlFor="" className="control-label" style={{fontSize: 12}} > CITY </label>
                                                            <input type="text" placeholder="City" className="form-control" style={{height: 44, fontSize: 14}} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label className="control-label" style={{fontSize: 12}} > COUNTRY </label>
                                                            <input type="text" className="form-control" placeholder="County" style={{height: 44, fontSize: 14}} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label className="control-label" style={{fontSize: 12}} > POSTAL CODE </label>
                                                            <input type="text" className="form-control" placeholder="Postal Code" style={{height: 44, fontSize: 14}} />
                                                        </div>
                                                    </div>


                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label htmlFor="" className="control-label" style={{fontSize: 12}}> ABOUT ME </label>
                                                            <textarea id="textArea" cols="20" rows="5" placeholder="Here can be your description" className="form-control" style={{fontSize: 14}} ></textarea>
                                                        </div>
                                                    </div>



                                                </div>
                                                <button type="submit" className="btn-fill pull-right btn btn-info" id="update-profile">Update Profile</button>
                                                <div className="clearfix"></div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4" >
                                    <div className="card card-user">
                                        <div className="image" >
                                            <img className="img-responsive" id="image-header" src="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400" alt="" />
                                        </div>
                                        <div className="content">
                                            <div className="user" style={{ textAlign: 'center' }}>
                                                <a href="#"></a>
                                                <img src="https://www.bsn.eu/wp-content/uploads/2016/12/user-icon-image-placeholder.jpg" alt="" className="img-circle" id="user-profile-image" style={{ height: 95, width: 95, align: 'center' }} />
                                                <h4 className="bio-title"> Any Name </h4>
                                            </div>
                                            <p className="description text-center">
                                                <span>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Ex, dicta. Consectetur, deleniti. Blanditiis minima eum eligendi <br />  fuga quasi consequatur aliquam in. Ipsum rerum odit <br />  voluptatum et quibusdam numquam libero eius?
                                                 </span>
                                            </p>
                                        </div>
                                        <hr />
                                        <div className="text-center">
                                            <button type="button" className="btn btn-default" > <SvgIcon size={30} icon={facebook2} /></button>
                                            <button type="button" className="btn btn-default" > <SvgIcon size={30} icon={twitter} /></button>
                                            <button type="button" className="btn btn-default" > <SvgIcon size={30} icon={googlePlus2} /></button>
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