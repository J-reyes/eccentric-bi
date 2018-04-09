import React, { Component } from 'react';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        }
    }


    render() {
        return (
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Search for..." value={this.props.searchValue} onChange={(e) => {this.props.search(e.target.value)}}/>
            </div>
        )
    }
}

export default SearchBar;