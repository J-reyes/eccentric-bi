import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addLogin } from './../redux/actions/index';

class UserLogin extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            password: ''
         }
    }
    render() { 
        return ( 
            <div className="container-fluid">
                <div id="login-box" className="row">
                
                <div  className="col-sm-4 col-sm-offset-4">
                    <div className="form-group">
                        <label>User Name</label>
                        <input type="text" className="form-control" value={this.state.username} onChange={(e) => { this.setState({username: e.target.value })}} />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" value={this.state.password} onChange={(e) => { this.setState({password: e.target.value })}}/>
                    </div>
                    <div className="row" style={{display: 'flex', justifyContent: 'flex-end', marginRight: 0}}>
                        <button className="btn btn-info pull-right btn-lg" onClick={ (e) => { this.props.sendLogin(this.state)}} >Log In</button>
                    </div>
                    <div className="row" style={{display: 'flex', justifyContent: 'center', marginTop: 20}}>
                        <a href="#"  > New Users Register Here </a>
                    </div>
                </div>
                
                
                </div>
                
            </div>
         )
    }
}



const mapDispatchToProps = dispatch => ({
    sendLogin: login => dispatch(addLogin(login))
})

 
export default connect(null, mapDispatchToProps)(UserLogin);