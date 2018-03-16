import React, { Component } from 'react';
import SideBar from '../sidebar/sidebar'
import EccentricNavBar from '../navbar/navbar'
import Title from '../title'
import TileContainer from './../tiles/tile-container'

import ReactDOM from 'react-dom';
import Dragula from 'react-dragula';


import WidgetContainer from './../widgets/widget-container';
import axios from 'axios';
import * as actionCreators from '../redux/actions/index';
import { connect } from 'react-redux'


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount = () => {
        this.props.loadBitcoin();
        this.props.loadWeather();
    }


    render() {
        return (
            <div>


                <div className="container-fluid">
                    <div className="row ">
                        <div className="col-md-2" style={{ padding: 0 }} >
                            <SideBar />
                        </div>



                        <div className="col-md-10 dashboard-container">
                            <div className="row">
                                <div className="col-md-12" style={{padding: 0, borderRadius: 0}} >
                                    <EccentricNavBar />
                                </div>

                            </div>
                            <div className="row widget-row">
                                <div className="col-md-12">
                                    <WidgetContainer />
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



export default connect(null, actionCreators)(Dashboard);