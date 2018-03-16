import React, { Component } from 'react';
import SvgIcon from 'react-icons-kit';

import { user } from 'react-icons-kit/icomoon/user';
import { statsDots } from 'react-icons-kit/icomoon/statsDots';
import { headphones } from 'react-icons-kit/icomoon/headphones';

import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { createAccount } from './../redux/actions/index';

class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            confirm: '',
            success: false
        }
    }

    handleSubmit = event => {
        let { success, ...userData } = this.state;
        event.preventDefault();
        this.setState({
            success: !this.state.success
        })
        this.props.register(userData);
    }

    render() {
        if (this.state.success) {
            return (
                <Redirect to={{
                    pathname: '/',
                    state: { newUser: true }
                }} />
            );
        }
        // add conditional rendering to login page

        return (

            <div className="container">
                <div className="row">
                 <div className="col-md-4 col-md-offset-2">
                    <div >
                        <div className="pull-left" style={{paddingRight: 10}}>
                            
                                <SvgIcon size={35} icon={user}/>
                            
                        </div>
                    </div>

                    <div className="media-body" style={{ paddingBottom: 45}}>
                    
                        <h4 className="media-heading"> Free Account </h4>
                        
                        <p>
                        Here you can write a feature description for your dashboard,
                        let the users know what is the value that you give them.
                        
                        </p>
                    </div>

                    <div >
                        <div className="pull-left" style={{paddingRight: 10}}>
                            
                                <SvgIcon size={35} icon={statsDots}/>
                            
                        </div>
                    </div>

                    <div className="media-body" style={{ paddingBottom: 45}}>
                    
                        <h4 className="media-heading"> Awesome Performance  </h4>
                        <p >
                        Here you can write a feature description for your dashboard,
                        let the users know what is the value that you give them.
                        
                        </p>
                     
                        
                    </div>
                    <div>
                        <div className="pull-left" style={{paddingRight: 10}}>
                            
                                <SvgIcon size={35} icon={headphones}/>
                            
                        </div>
                    </div>

                    <div className="media-body" style={{ paddingBottom: 45}}>
                    
                        <h4 className="media-heading"> Global Support </h4>
                        
                        <p>
                        Here you can write a feature description for your dashboard,
                        let the users know what is the value that you give them.
                        
                        </p>
                        
                    </div>

                </div>



                {/* section with inputs */}
                <div className="col-md-4">

                    <form onSubmit={this.handleSubmit}>
                        <div >

                            <div className="content">
                                    <div>    
                                        <div className="col-md-10 form-group" style={{paddingBottom: 10}}>
                                            <input style={{fontSize: 14}} id="registration-input" placeholder="Your First Name" type="text" className="form-control" onChange={(e) => { this.setState({ firstName: e.target.value }) }} value={this.state.firstName} />
                                        </div>
                                        
                                        <div className="col-md-10 form-group" style={{paddingBottom: 10}}>
                                            <input style={{fontSize: 14}} id="registration-input" placeholder="Your Last Name" type="text" className="form-control" onChange={(e) => { this.setState({ lastName: e.target.value }) }} value={this.state.lastName} />
                                        </div>
                                        
                                        <div className="col-md-10 form-group" style={{paddingBottom: 10}}>
                                            <input style={{fontSize: 14}} id="registration-input" placeholder="Enter Username" type="text" className="form-control" onChange={(e) => { this.setState({ username: e.target.value }) }} value={this.state.username} />
                                        </div>
                                        
                                        <div className="col-md-10 form-group" style={{paddingBottom: 10}}>
                                            <input style={{fontSize: 14}} id="registration-input" placeholder="Enter Email" type="text" className="form-control" value={this.state.email} onChange={(e) => { this.setState({ email: e.target.value }) }} />
                                        </div>
                                    
                                        <div className="col-md-10 form-group" style={{paddingBottom: 10}}>
                                            <input style={{fontSize: 14}} id="registration-input" placeholder="Password Confirmation" type="password" className="form-control" onChange={(e) => { this.setState({ password: e.target.value }) }} value={this.state.password} />
                                        </div>
                                        
                                        <div className="col-md-10 form-group" style={{paddingBottom: 10}}>
                                            <input style={{fontSize: 14}} id="registration-input" placeholder="Password Confirmation" type="password" className="form-control" onChange={(e) => { this.setState({ confirm: e.target.value }) }} value={this.state.confirm} />
                                        </div>
                                            
                                    </div>
                                    <div className="footer col-md-10 text-center">
                                     <button style={{fontSize: 14}} className="btn btn-info" type="submit"> Create Free Account</button>
                                    </div>
                                    
                                </div>
                              
                            </div>  
                             
                             
                        
                    </form>
                
                </div>
                    
                </div>
                
            </div>




        )
    }
}

const mapDispatchToProps = dispatch => ({
    register: registrationInfo => dispatch(createAccount(registrationInfo))
})

export default connect(null, mapDispatchToProps)(RegistrationForm);
