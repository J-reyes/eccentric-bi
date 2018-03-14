import React, { Component } from 'react';
import SideBar from '../sidebar/sidebar'
import NavBar from '../navbar/navbar'
import Title from '../title'
import TileContainer from './../tiles/tile-container'


import WidgetDropdown from './widget-dropdown'



class SideBarTest extends Component {
    constructor(props) {
        super(props);
        this.state = {}
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

export default SideBarTest;