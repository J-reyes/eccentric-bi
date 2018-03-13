import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import BarTile from './../tiles/bar-tile';
import ReactDOM from 'react-dom';
import Dragula from 'react-dragula';

import DashboardTile from './dashboard-tile';
import LargeTile from './large-tile';
import WeatherWidget from './../widgets/weather-widget';
import BitcoinWidget from './../widgets/bitcoin-widget';
import TwitterWidget from './../widgets/twitter-widget';
import CalendarWidget from './../widgets/calendar-widget';
import RedwoodWidget from './../widgets/redwood-widget';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            img: 'https://www.muralswallpaper.co.uk/app/uploads/Black-and-White-typography-map-maps-plain-kj-820x532.jpg'
        }
    }

    componentDidMount = () => {
        var specialContainer = ReactDOM.findDOMNode(this);
        Dragula([specialContainer]);
    }

    render() {

        return (
            <div id="dashboard-container">
                <div id="tile-ribbon" className="row specialContainer">
                    {
                        this.props.tiles.map((item, index) =>
                            <div key={index} className=" container tile-container col-sm-3">
                                <BarTile />
                            </div>
                        )}
                </div>
                <div className="col-sm-3"><WeatherWidget /></div>
                <div className="col-sm-3"><CalendarWidget /></div>
                <div className="col-sm-3"><BitcoinWidget /></div>
                <div className="col-sm-3"><TwitterWidget /></div>
                <div className="col-sm-3"><RedwoodWidget /></div>
                <div id="large-tiles" className="row col-sm-12" >
                    <div className="specialContainer" ><BarTile /></div>
                </div>

                <div className="specialContainer" ><LargeTile map={this.state.img} /></div>
                <div className="specialContainer" ><LargeTile map={this.state.img} /></div>


                </div>
        )

    }
}

const mapStateToProps = state => {
    return {
        tiles: state.loginPage.tiles
    }
}

export default connect(mapStateToProps)(Dashboard);
