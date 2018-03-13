import React, { Component } from 'react';
import { connect } from 'react-redux';
<<<<<<< HEAD:src/components/dashboard/tile-container.js
// import ChartTile from './../tiles/chart-tile';
=======
import BarTile from './../tiles/bar-tile';
>>>>>>> 69aeed2e876a9a2bfc7fef69465505aeb1ee58e3:src/components/dashboard/dashboard.js
import ReactDOM from 'react-dom';
import Dragula from 'react-dragula';

import DashboardTile from './dashboard-tile';
import LargeTile from './large-tile';

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
<<<<<<< HEAD:src/components/dashboard/tile-container.js
                                {/* <ChartTile /> */}
                                {/* <DashboardTile title={item.title} content={item.content} /> */}
=======
                                <BarTile />
>>>>>>> 69aeed2e876a9a2bfc7fef69465505aeb1ee58e3:src/components/dashboard/dashboard.js
                            </div>
                        )}
                </div>
                <div id="large-tiles" className="row col-sm-12" >
<<<<<<< HEAD:src/components/dashboard/tile-container.js
                    {/* <div className="specialContainer" ><ChartTile /></div> */}
=======
                    <div className="specialContainer" ><BarTile /></div>
>>>>>>> 69aeed2e876a9a2bfc7fef69465505aeb1ee58e3:src/components/dashboard/dashboard.js
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
