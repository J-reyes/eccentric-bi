import React, { Component } from 'react';
import axios from 'axios';
import Table from './../lead-table/table';
import {
    ascComparatorBuilder, descComparatorBuilder,
    sortBuilder, boolAscCompBuilder, boolDescCompBuilder,
    dateAscCompBuilder, dateDescCompBuilder
} from './../helper-functions/sorter';
import { formatLeadsData, filterBySearch } from './../helper-functions/axios-format';
// import SearchBar from './searchbar';

class LeadsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            header: [
                {
                    label: 'Name',
                    canSort: true,
                    sortAsc: () => this.sortState(0, ascComparatorBuilder),
                    sortDesc: () => this.sortState(0, descComparatorBuilder)
                },
                {
                    label: 'Email',
                    canSort: true,
                    sortAsc: () => this.sortState(1, ascComparatorBuilder),
                    sortDesc: () => this.sortState(1, descComparatorBuilder)
                },
                {
                    label: 'Phone',
                    canSort: false,
                    sortAsc: () => null,
                    sortDesc: () => null
                },
                {
                    label: 'Description',
                    canSort: true,
                    sortAsc: () => this.sortState(3, ascComparatorBuilder),
                    sortDesc: () => this.sortState(3, descComparatorBuilder)
                },
                {
                    label: 'Time of Contact',
                    canSort: true,
                    sortAsc: () => this.sortState(4, dateAscCompBuilder),
                    sortDesc: () => this.sortState(4, dateDescCompBuilder)
                },
                {
                    label: 'Completed',
                    canSort: true,
                    sortAsc: () => this.sortState(5, boolAscCompBuilder),
                    sortDesc: () => this.sortState(5, boolDescCompBuilder)
                }
            ],
            items: [[]],
            search: ""
        }
    }

    componentDidMount = () => {

        this.setState({
            items: formatLeadsData(this.props.data)
        })

    }

    // connects sort to setting state
    sortState = (column, comparatorBuilder) => {
        let sorter = sortBuilder(comparatorBuilder(column))
        this.setState({
            items: sorter(this.state.items)
        })
    }

    setSearch = searchFromChild => {
        this.setState({
            search: searchFromChild
        })
    }

    render() {
        return (
            <div>
                {/* <SearchBar searchValue={this.state.search} search={this.setSearch} /> */}
                <Table items={filterBySearch(this.state.items, this.state.search)} header={this.state.header} />
            </div>

        )
    }
}

export default LeadsContainer;