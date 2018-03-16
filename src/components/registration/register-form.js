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
                    pathname: '/login',
                    state: { newUser: true }
                }}/>
            );
        }
        // add conditional rendering to login page

        return (

            <form onSubmit={this.handleSubmit}>
                <div className="card  card-plugin">
                    <label>First Name</label>
                    <div className="form-group">
                        <input type="text" className="form-control" onChange={(e) => { this.setState({ firstName: e.target.value }) }} value={this.state.firstName} />
                    </div>
                    <label>Last Name</label>
                    <div className="form-group">
                        <input type="text" className="form-control" onChange={(e) => { this.setState({ lastName: e.target.value }) }} value={this.state.lastName} />
                    </div>
                    <label>Username</label>
                    <div className="form-group">
                        <input type="text" className="form-control" onChange={(e) => { this.setState({ username: e.target.value }) }} value={this.state.username} />
                    </div>
                    <label>Email</label>
                    <div className="form-group">
                        <input type="text" className="form-control" value={this.state.email} onChange={(e) => { this.setState({ email: e.target.value }) }} />
                    </div>
                    <label>Password</label>
                    <div className="form-group">
                        <input type="password" className="form-control" onChange={(e) => { this.setState({ password: e.target.value }) }} value={this.state.password} />
                    </div>
                    <label>Confirm Password</label>
                    <div className="form-group">
                        <input type="password" className="form-control" onChange={(e) => { this.setState({ confirm: e.target.value }) }} value={this.state.confirm} />
                    </div>

                    <button className="btn btn-info" type="submit">Submit</button>
                </div>
                <Link to="/login">TEST</Link>
            </form>
            

        )
    }
}

const mapDispatchToProps = dispatch => ({
    register: registrationInfo => dispatch(createAccount(registrationInfo))
})

export default connect(null, mapDispatchToProps)(RegistrationForm);
