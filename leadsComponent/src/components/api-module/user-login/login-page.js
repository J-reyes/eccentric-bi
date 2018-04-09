import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import RejectMessage from './reject-message';
import axios from 'axios';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            reject: null,
            responseSuccess: null,
            responseRole: ''
        }
    }


    submitLogin = event => {
        event.preventDefault();

        let userCheck = {
            username: this.state.username,
            password: this.state.password
        };

        axios.post('http://192.168.7.244:5000/api/users/login', userCheck)
            .then(res => {
                this.setState({
                    responseSuccess: res.data.success,
                    responseRole: res.data.role,
                    reject: !res.data.success
                });
                console.log('API called')
            })
    }

    render() {
        if (this.state.responseSuccess) {

            // successful username entry
            this.props.setUser({ username: this.state.username});

            if (this.state.responseRole === 'admin') {
                return (
                    <Redirect to="/adminpage" />
                )
            }
            if (this.state.responseRole != 'admin') {
                return (
                    <Redirect to="/userpage" />
                )
            }
        }


        return (

            <div className="container-fluid" style={{ background: 'lightgray' }}>
                <div id="login-box" className="row" >
                    <div className="col-md-6 col-md-offset-3" style={{ paddingLeft: 15, paddingRight: 15 }}>

                        <form onSubmit={this.submitLogin} className="col-sm-12" style={{ paddingTop: 30, background: 'lightgray' }}>

                            <div className="header col-sm-12"> <img src="./images/EccentricBI_270218_2_transparent.png" alt="" style={{ background: 'black', marginBottom: 30 }} className="img-responsive" /></div>
                            <div className="content" style={{ padding: 15 }}>
                                <div>
                                    <div className="form-group" style={{ marginBottom: 15 }}>
                                        <label style={{ marginBottom: 5 }} >User Name</label>
                                        <input style={{ border: 1, paddingLeft: 12, paddingRight: 12, paddingTop: 8, paddingBottom: 8 }} type="text" className="form-control" value={this.state.username} onChange={(e) => { this.setState({ username: e.target.value }) }} />
                                    </div>
                                    <div className="form-group" style={{ marginBottom: 15 }}>
                                        <label>Password</label>
                                        <input style={{ border: 1, paddingLeft: 12, paddingRight: 12, paddingTop: 8, paddingBottom: 8 }} type="password" className="form-control" value={this.state.password} onChange={(e) => { this.setState({ password: e.target.value }) }} />
                                    </div>
                                    {
                                        this.state.reject ? <RejectMessage /> : null
                                    }
                                    <div className="footer text-center" style={{ paddingLeft: 15, paddingRight: 15, paddingBottom: 10 }}>
                                        <div className="row" style={{ display: 'flex', justifyContent: 'center', marginRight: 0, paddingTop: 5, paddingBottom: 5 }}>
                                            <button className="col-md-8 btn btn-info pull-right btn-lg" type='submit' style={{ paddingTop: 8, paddingLeft: 16, paddingRight: 16, border: 1 }} >Log In</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>

            </div >
        )
    }
}

export default LoginPage;