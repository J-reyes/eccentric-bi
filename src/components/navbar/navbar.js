import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSearchItem } from './../redux/actions/index'

import Title from '../title';


class NavBar extends Component {
    constructor(props) {

        super(props);
        this.state = {
            searchValue: ''
        }
        console.log(this.props)
    }

    render() {
        return (
            <div >
                <div className="row">
                    <div className="col-md-12" style={{ background: 'salmon' }}>
                        <span className="pull-right"><button onClick={() => this.props.sendSearch(this.state.searchValue)} >Enter</button></span>
                        <span className="pull-right"><input type="text" placeholder="Search ..." value={this.state.searchValue} onChange={(e) => { this.setState({ searchValue: e.target.value }) }} /></span>
                    </div>
                </div>
            </div>

        )
    }
}


// build onChange handler and value update via redux
// style button plus add onClick handler

const mapStateToProps = state => ({
    searchField: state.searchField
})

const mapDispatchToProps = dispatch => ({
    sendSearch: searchItem => dispatch(addSearchItem(searchItem))
})



export default connect(mapStateToProps, mapDispatchToProps)(NavBar);