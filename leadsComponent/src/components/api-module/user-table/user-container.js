import React, { Component } from 'react';
import { formatData, filterBySearch } from './../helper-functions/axios-format';
import {
    ascComparatorBuilder, descComparatorBuilder,
    sortBuilder
} from './../helper-functions/sorter';
import Table from './table';
import LeadsTable from './leads-table';
import axios from 'axios';

import EditUser from '../admin-edit/edit-user';
import CreateUserWindow from '../create-user/create-user-window';

// Leads Table

class UserContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            header: [
                {
                    label: 'First Name',
                    canSort: true,
                    sortAsc: () => this.sortState(0, ascComparatorBuilder),
                    sortDesc: () => this.sortState(0, descComparatorBuilder)
                },
                {
                    label: 'Last Name',
                    canSort: true,
                    sortAsc: () => this.sortState(1, ascComparatorBuilder),
                    sortDesc: () => this.sortState(1, descComparatorBuilder)
                },
                {
                    label: 'Email',
                    canSort: true,
                    sortAsc: () => this.sortState(2, ascComparatorBuilder),
                    sortDesc: () => this.sortState(2, descComparatorBuilder)
                },
                {
                    label: 'Username',
                    canSort: true,
                    sortAsc: () => this.sortState(3, ascComparatorBuilder),
                    sortDesc: () => this.sortState(3, descComparatorBuilder)
                },
                {
                    label: 'Password',
                    canSort: false,
                    sortAsc: () => null,
                    sortDesc: () => null
                },
                {
                    label: 'Role',
                    canSort: true,
                    sortAsc: () => this.sortState(5, ascComparatorBuilder),
                    sortDesc: () => this.sortState(5, descComparatorBuilder)
                }
            ],
            items: [[]],
            search: "",
            edit: this.edit,
            editMode: false,
            userEditing: "",
            createMode: false,
            leadsDropdown: this.leadsDropdown,
            leadsMode: false,
            leadsArray: [[]]
        }
    }

    // formatData removes id element, returns an array of array
    componentDidMount = () => {
        this.loadUsers();
    }

    loadUsers = () => {
        let connection = "192.168.7.244";
        axios.get(`http://${connection}:5000/api/users`)
            .then(res => {
                this.setState({
                    items: formatData(res.data),
                    editMode: false,
                    createMode: false
                })
            })
    }

    // connects sort to setting state
    sortState = (column, comparatorBuilder) => {
        let sorter = sortBuilder(comparatorBuilder(column))
        this.setState({
            items: sorter(this.state.items)
        })
    }

    edit = username => {
        this.setState({
            editMode: !this.state.editMode,
            userEditing: username
        });
    }

    create = () => {
        this.setState({
            createMode: !this.state.createMode
        })
    }

    leadsDropdown = (arr) => {
        this.setState({
            leadsMode: !this.state.leadsMode,
            leadsArray: arr
        })
    }


    render() {
        return (
            <div>
                <button className="btn btn-success" onClick={this.create} >Create New User</button>
                {
                    this.state.createMode ? <CreateUserWindow reload={this.loadUsers}/> : null
                }
                <Table {...this.state} />
                {
                    this.state.editMode ? <EditUser username={this.state.userEditing} reload={this.loadUsers}/> : ""
                }
                {
                    this.state.leadsMode ? <LeadsTable data={this.state.leadsArray} /> : null
                }
            </div>
        )
    }
}

export default UserContainer;