import React, { Component } from 'react';
import axios from 'axios';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                id: '',
                firstName: '',
                lastName: '',
                email: '',
                username: '',
                password: '',
                role: ''
            }
        }
    }

    // ${this.props.username}

    //STILL NEED call user by ID
    componentDidMount() {
        axios.get(`http://192.168.7.244:5000/api/users/find/${this.props.username}`)
            .then(res => {
                this.setState({
                    user: {
                        id: res.data.id,
                        firstName: res.data.firstName,
                        lastName: res.data.lastName,
                        email: res.data.email,
                        username: res.data.username,
                        password: res.data.password,
                        role: res.data.role
                    }
                })
            })
    }

    saveEdit = event => {
        event.preventDefault();
        let updatedUser = this.state.user;

        axios.put((`http://192.168.7.244:5000/api/users/find/${this.state.user.username}`), updatedUser)
            .then(res => {
                console.log(res.data);
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

    deleteUser = () => {
        axios.delete(`http://192.168.7.244:5000/api/users/find/${this.state.user.username}`)
            .then(res => {
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
                <div className="sub-title">
                    <h2>Edit User</h2>
                </div>
                <div className="col-sm-12">
                    <form onSubmit={this.saveEdit} className="col-sm-6 card" >
                        <div className="form-group">
                            <label>First Name</label>
                            <input type="text" className="form-control" value={this.state.user.firstName} onChange={e => this.setState({ user: { ...this.state.user, firstName: e.target.value } })} />
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" className="form-control" value={this.state.user.lastName} onChange={e => this.setState({ user: { ...this.state.user, lastName: e.target.value } })} />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" value={this.state.user.email} onChange={e => this.setState({ user: { ...this.state.user, email: e.target.value } })} />
                        </div>
                        <div className="form-group">
                            <label>User Name</label>
                            <input type="text" className="form-control" value={this.state.user.username} onChange={e => this.setState({ user: { ...this.state.user, username: e.target.value } })} />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" value={this.state.user.password} onChange={e => this.setState({ user: { ...this.state.user, password: e.target.value } })} />
                        </div>
                        {/* <div className="form-group">
                            <label>Leads Owned</label>
                            <input type="text" className="form-control" value={this.state.user.leadsOwned} onChange={e => this.setState({ user: { ...this.state.user, leadsOwned: e.target.value } })} />
                        </div> */}
                        <div className="form-group">
                            <label>Role</label>
                            <input type="text" className="form-control" value={this.state.user.role} onChange={e => this.setState({ user: { ...this.state.user, role: e.target.value } })} />
                        </div>
                        <button type="submit" className="btn btn-success pull-right">Save Changes</button>
                        <button onClick={this.deleteUser} className="btn btn-danger pull-right">Delete User</button>
                        <button onClick={e => this.props.reload()} className="btn btn-warning">Cancel</button>
                    </form>
                    <div className="row">

                    </div>
                </div>
            </div>
        )
    }
}

export default EditUser;