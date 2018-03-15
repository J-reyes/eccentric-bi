import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { addLogin } from './../redux/actions/index';

import RejectMessage from './reject-true';

class UserLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            success: false,
            reject: false,
            stored: [{
                username: 'Andrew',
                password: 'abc123'
            },
            {
                username: 'Patrick',
                password: 'Starfish'
            }]
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        if (this.isValid()) {
            this.setState({
                success: !this.state.success,
                reject: false
            })
        }
        else {
            this.setState({
                reject: true
            })
        }
    }

    isValid = () => {
        for (let account of this.state.stored) {
            if (account.username === this.state.username && account.password === this.state.password) {
                return true;
            }
        }
        return false;
    }

    render() {

        if (this.state.success) {
            return (
                <Redirect to="/dashboard" />
            )
        }

        

        return (
            <div className="container-fluid">
                <div id="login-box" className="row">


                    <form onSubmit={this.handleSubmit} className="col-sm-4 col-sm-offset-4">
                        <div className="form-group">
                            <label>User Name</label>
                            <input type="text" className="form-control" value={this.state.username} onChange={(e) => { this.setState({ username: e.target.value }) }} />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" value={this.state.password} onChange={(e) => { this.setState({ password: e.target.value }) }} />
                        </div>

                        {
                             !this.props.location.state ? null : this.props.location.state.newUser ? <div>Welcome to our app</div> : null
                        }

                        {
                            this.state.reject ? <RejectMessage /> : null
                        }

                        <div className="row" style={{ display: 'flex', justifyContent: 'flex-end', marginRight: 0 }}>
                            <button className="btn btn-info pull-right btn-lg" type='submit' >Log In</button>
                        </div>
                        <div className="row" style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
                            <a href="#"  > New Users Register Here </a>
                        </div>
                    </form>


                </div>

            </div>
        )
    }
}



const mapDispatchToProps = dispatch => ({
    sendLogin: login => dispatch(addLogin(login))
})


export default connect(null, mapDispatchToProps)(UserLogin);