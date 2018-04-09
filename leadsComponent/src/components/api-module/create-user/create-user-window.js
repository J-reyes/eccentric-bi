import React, { Component } from 'react';
import axios from 'axios';

class CreateUserWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                firstName: '',
                lastName: '',
                email: '',
                username: '',
                password: '',
                role: ''
            }

        }
    }

    createUser = event => {
        event.preventDefault();

        let newUser = this.state.user;

        axios.post('http://192.168.7.244:5000/api/users', newUser)
            .then( res => {
                this.props.reload();
            })
        
        this.setState({
            user: {
                firstName: '',
                lastName: '',
                email: '',
                username: '',
                password: '',
                role: ''
            }
        })
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={e => this.createUser(e)} className="col-sm-6 card">
                    <div className="form-group">
                        <label>First Name </label>
                        <input type="text" value={this.state.user.firstName} onChange={e => this.setState({user: {...this.state.user, firstName: e.target.value}})} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Last Name </label>
                        <input type="text" value={this.state.user.lastName} onChange={e => this.setState({user: {...this.state.user,lastName: e.target.value }})} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Email </label>
                        <input type="email" value={this.state.user.email} onChange={e => this.setState({user: {...this.state.user, email: e.target.value }})} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Username </label>
                        <input type="text" value={this.state.user.username} onChange={e => this.setState({user: {...this.state.user, username: e.target.value }})}className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" value={this.state.user.password} onChange={e => this.setState({user: {...this.state.user, password: e.target.value }})} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Role </label>
                        <input type="text" value={this.state.user.role} onChange={e => this.setState({user: {...this.state.user, role: e.target.value }})} className="form-control"/>
                    </div>
                    <button type="submit" className="btn btn-info">Create User</button>
                    <button className="btn btn-warning" onClick={e => this.props.reload()} >Cancel</button>
                </form>
            </div>
        )
    }
}

export default CreateUserWindow;