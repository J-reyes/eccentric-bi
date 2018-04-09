import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import LoginPage from './api-module/user-login/login-page';
import UserPage from './api-module/user-page/user-page';
import AdminPage from './api-module/admin-edit/admin-page';


class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: {}, // { username: this.state.username}
            setUser: this.setUser
        }
    }

    setUser = user => {
        this.setState({
            currentUser: user
        })
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" render={() => <LoginPage {...this.state}/>} />
                    <Route exact path="/userpage" render={() => <UserPage {...this.state}/>} />
                    <Route exact path="/adminpage" render={() => <AdminPage {...this.state} />} />
                </Switch>
            </div>
        )
    }
}

export default Container;