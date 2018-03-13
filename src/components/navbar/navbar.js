import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSearchItem } from './../redux/actions/index'


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
            <div>
                <input type="text" placeholder="Search ..." value={this.state.searchValue} onChange={(e) => { this.setState({ searchValue: e.target.value }) }} />
                <button onClick={ () => this.props.sendSearch(this.state.searchValue) } >Enter</button>
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