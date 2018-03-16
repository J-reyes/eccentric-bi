import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
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
        for (let account of this.props.accounts) {
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
            <div className="container-fluid" >
                <div id="login-box" className="row" >
                    <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3" style={{ paddingLeft: 15, paddingRight: 15 }}>
                        <form onSubmit={this.handleSubmit} className="col-sm-8 col-sm-offset-2" >
                            <div className="card" style={{ borderRadius: 10 }}>
                                <div className="header"> <img src="./images/EccentricBI_270218_2_transparent.png" alt="" style={{ width: 250, height: 130, background: 'lightGray', marginBottom: 30 }} /></div>

                                <div className="content" style={{ padding: 15, }}>

                                    <div>
                                        <div className="form-group" style={{ marginBottom: 15 }}>
                                            <label style={{ marinBottom: 5 }} >User Name</label>
                                            <input style={{ border: 1, paddingLeft: 12, paddingRight: 12, paddingTop: 8, paddingBottom: 8 }} type="text" className="form-control" value={this.state.username} onChange={(e) => { this.setState({ username: e.target.value }) }} />
                                        </div>
                                        <div className="form-group" style={{ marginBottom: 15 }}>
                                            <label>Password</label>
                                            <input style={{ border: 1, paddingLeft: 12, paddingRight: 12, paddingTop: 8, paddingBottom: 8 }} type="password" className="form-control" value={this.state.password} onChange={(e) => { this.setState({ password: e.target.value }) }} />
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" name="" id="1" value="on" style={{ marginTop: 4, }} />
                                            <label style={{ paddingLeft: 10 }} >Subscribe to newsletter</label>
                                        </div>

                                        {
                                            !this.props.location.state ? null : this.props.location.state.newUser ? <div>Welcome to our app</div> : null
                                        }

                                        {
                                            this.state.reject ? <RejectMessage /> : null
                                        }

                                        <div className="footer text-center" style={{paddingLeft: 15, paddingRight: 15, paddingBottom: 10}}>
                                            <div className="row" style={{ display: 'flex', justifyContent: 'center', marginRight: 0, paddingTop: 5, paddingBottom: 5 }}>
                                                <button className="col-md-8 btn btn-info pull-right btn-lg" type='submit' style={{paddingTop: 8, paddingLeft: 16, paddingRight: 16, border: 1}} >Log In</button>
                                            </div>
                                        </div>


                                        <div className="row" style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
                                            <Link to="/registration"> New Users Register Here </Link>
                                        </div>
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

const mapStateToProps = state => ({
    accounts: state.accountManager.register
})

const mapDispatchToProps = dispatch => ({
    sendLogin: login => dispatch(addLogin(login))
})


export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);