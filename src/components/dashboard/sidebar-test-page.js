import React, { Component } from 'react';
import SideBar from '../sidebar/sidebar'
import NavBar from '../navbar/navbar'
import Title from '../title'
import TileContainer from './../tiles/tile-container'


import WidgetDropdown from './widget-dropdown'
import axios from 'axios';
import * as actionCreators from '../redux/actions/index';
import { connect } from 'react-redux'


class SideBarTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    componentDidMount = () => {
        this.props.loadBitcoin();
    }

    render() {
        return (
            <div>

                <NavBar />

                <div className="container-fluid">
                    <div className="row ">
                        <div className="col-md-3" style={{ padding: 0 }} >
                            <SideBar />
                        </div>

                        <div className="col-md-9"><span className="pull-right"></span>
                            <div className="row">
                                <div className="col-md-12">
                                    <WidgetDropdown />
                                </div>


                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <TileContainer />
                                </div>

                            </div>

                            <div className="row" id="tiles-div">

                                BLUE BAR
                            </div>
                            <div className="row" id="tiles-div">
                                BLUE BAR
                            </div>
                            <div className="row" id="tiles-div">
                                BLUE BAR
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}



export default connect(null, actionCreators)(SideBarTest);