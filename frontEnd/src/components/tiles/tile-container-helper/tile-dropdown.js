import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addTile } from '../../redux/actions/index'
import { BARCHART, DOUGHNUTCHART, TODOTILE } from '../../redux/reducer/tile-container-reducer'

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class TileDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Select Tiles
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={() => this.props.createTile(BARCHART)}>Bar Chart</DropdownItem>
          <DropdownItem onClick={() => this.props.createTile(DOUGHNUTCHART)}>Doughnut Chart</DropdownItem>
          <DropdownItem onClick={() => this.props.createTile(TODOTILE)}>To Do Widget</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createTile: tileType => dispatch(addTile(tileType))
})

export default connect(null, mapDispatchToProps)(TileDropdown) 