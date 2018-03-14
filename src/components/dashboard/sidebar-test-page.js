import React, { Component } from 'react';
import SideBar from '../sidebar/sidebar'
import NavBar from '../navbar/navbar'
import Title from '../title'
import TileContainer from './../tiles/tile-container'

import ReactDOM from 'react-dom';
import Dragula from 'react-dragula';

import WidgetDropdown from './widget-dropdown'



class SideBarTest extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    // componentDidMount = () => {
    //     var specialContainer = ReactDOM.findDOMNode(this);
    //     Dragula([specialContainer]);
    // }

    render() {
        return (
            <div>
                <div>
                    <NavBar />
                </div>
                
                <div className="container-fluid">
                    <div className="row ">
                        <div className="col-md-2" style={{ padding: 0 }} >
                            <SideBar />
                        </div>

                        <div className="col-md-10 dashboard-container">
                            <div className="row widget-row">
                                <div className="col-md-12">
                                    <WidgetDropdown />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <TileContainer />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default SideBarTest;