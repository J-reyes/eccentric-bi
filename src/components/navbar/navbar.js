import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSearchItem } from './../redux/actions/index'

import Title from '../title';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Nav from 'react-bootstrap/lib/Nav';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import NavbarHeader from 'react-bootstrap/lib/NavbarHeader';
import Form from 'react-bootstrap/lib/Form';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Button from 'react-bootstrap/lib/Button';

import SvgIcon from 'react-icons-kit';
import { search } from 'react-icons-kit/icomoon/search';

class EccentricNavBar extends Component {
    constructor(props) {

        super(props);
        this.state = {
            searchValue: ''
        }
    }

    render() {
        return (



            <div className="row">
                <div className="col-md-12">
                    <Navbar inverse collapseOnSelect style={{ borderRadius: 0, background: 'gold' }}>

                        <Navbar.Collapse>
                            <Navbar.Form pullLeft>
                                <FormGroup id="search-icon">
                                    <SvgIcon size={30} icon={search} />
                                </FormGroup>
                                <FormGroup>

                                    <FormControl type="text" placeholder="Search" />
                                </FormGroup>{' '}
                                <Button type="submit" style={{fontSize: 14}}  >Submit</Button>
                            </Navbar.Form>

                            <Nav className="pull-right">
                                <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown" style={{fontSize: 14}} >
                                    <MenuItem eventKey={3.1}>Action</MenuItem>
                                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                                    <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                    <MenuItem divider />
                                    <MenuItem eventKey={3.3}>Separated link</MenuItem>

                                </NavDropdown>
                            </Nav>
                            <Nav className="pull-right">
                                <NavDropdown eventKey={4} title="Dropdown" id="basic-nav-dropdown" style={{fontSize: 14}} >
                               
                                    <MenuItem eventKey={4.1}>Action</MenuItem>
                                    <MenuItem eventKey={4.2}>Another action</MenuItem>
                                    <MenuItem eventKey={4.3}>Something else here</MenuItem>
                                    <MenuItem divider />
                                    <MenuItem eventKey={4.4}>Separated link</MenuItem>

                                </NavDropdown>
                            </Nav>
                            <Nav className="pull-right">
                                <NavDropdown eventKey={5} title="Dropdown" id="basic-nav-dropdown" style={{fontSize: 14}} >
                                    <MenuItem eventKey={5.1}>Action</MenuItem>
                                    <MenuItem eventKey={5.2}>Another action</MenuItem>
                                    <MenuItem eventKey={5.3}>Something else here</MenuItem>
                                    <MenuItem divider />
                                    <MenuItem eventKey={5.4}>Separated link</MenuItem>

                                </NavDropdown>
                            </Nav>
                            <Nav className="pull-right" style={{fontSize: 14}} >
                                <NavItem eventKey={2} href="#">
                                    Link Right
                                      </NavItem>

                            </Nav>
                          
                        </Navbar.Collapse>
                    </Navbar>;
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



export default connect(mapStateToProps, mapDispatchToProps)(EccentricNavBar);