import React, { Component } from 'react';

class UserLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container">
                <div id="login-box" className="col-sm-4 col-sm-offset-4">
                    <div className="form-group">
                        <label>User Name</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control"/>
                    </div>
                    <div className="row">
                        <button className="btn btn-info pull-right">Log In</button>
                    </div>
                    <div className="row">
                        <a href="#" className="col-sm-offset-3" > New Users Register Here </a>
                    </div>
                </div>
            </div>
         )
    }
}
 
export default UserLogin;