import React, { Component } from 'react';
import SvgIcon from 'react-icons-kit';
import { user } from 'react-icons-kit/icomoon/user';
import { statsDots } from 'react-icons-kit/icomoon/statsDots';
import { headphones } from 'react-icons-kit/icomoon/headphones';


import { connect } from 'react-redux';
import { createAccount } from './../redux/actions/index';

class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstnameInput: '',
            lastnameInput: '',
            companyInput: '',
            email: '',
            passwordInput: '',
            confirmInput: ''

        }
    }
    render() {
        return (
            <div className="container">
                <div className="row">

                    <div className="col-md-4 col-md-offset-2">
                        <div className="media">
                            <div className="media-left"> <SvgIcon size={20} icon={user} /></div>
                            <div className="media-body d-block">
                                <h4 className="media-heading">Free Account</h4>
                                <p>Here you can write a feature description for you dashboard, let the user know what is the value that you give them</p>
                            </div>
                        </div>

                        <div className="media">
                            <div className="media-left"> <SvgIcon size={20} icon={statsDots} /></div>
                            <div className="media-body d-block">
                                <h4 className="media-heading">Awesome Performance</h4>
                                <p>Here you can write a feature description for your dashboard, let the user kno what is the value that you give them</p>
                            </div>
                        </div>

                        <div className="media">
                            <div className="media-left"> <SvgIcon size={20} icon={headphones} /> </div>
                            <div className="media-body d-block">
                                <h4 className="media-heading">Awesome Performance</h4>
                                <p>Here you can write a feature description for your dashboard, let the user kno what is the value that you give them</p>
                            </div>
                        </div>
                    </div>




                    <div id="login-box" className="col-md-4">
                        <form>
                            <div className="card  card-plugin">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your First Name" onChange={(e) => { this.setState({firstnameInput: e.target.value })}} value={this.state.firstnameInput} />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your Last Name" onChange={(e) => { this.setState({lastnameInput: e.target.value })} } value={this.state.lastnameInput} />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Company" onChange={(e) => { this.setState({companyInput: e.target.value })}} value={this.state.companyInput} />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Enter Email" value={this.state.email} onChange-={(e) => { this.setState({email: e.target.value })}}  />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Password" onChange={(e) => { this.setState({passwordInput: e.target.value })}} value={this.state.passwordInput}  />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Password Confirmation" onChange={(e) => { this.setState({confirmInput: e.target.value })}} value={this.state.confirmInput} />
                                </div>

                            </div>

                            <div className="foot text-center">
                                <div className="legend">
                                    <button className="btn btn-info" onClick={(e) => { this.props.registration(this.state) }}>Create Free Account</button>
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
    registration: register => dispatch(createAccount(register))
})



export default connect(null, mapDispatchToProps)(RegistrationForm);