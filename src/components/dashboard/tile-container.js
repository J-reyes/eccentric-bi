import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChartTile from './../tiles/chart-tile';
import ReactDOM from 'react-dom';
import Dragula from 'react-dragula';

import DashboardTile from './dashboard-tile';
import LargeTile from './large-tile';

class TileContainer extends Component {
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
        // return (
        //     <div className='container'>
        //         <div>Swap me around</div>
        //         <div>Swap her around</div>
        //         <div>Swap him around</div>
        //         <div>Swap them around</div>
        //         <div>Swap us around</div>
        //         <div>Swap things around</div>
        //         <div>Swap everything around</div>
        //     </div>
        // )
        return (
            <div id="dashboard-container">
                <div id="tile-ribbon" className="row specialContainer">
                    {
                        this.props.tiles.map((item, index) =>
                            <div key={index} className=" container tile-container col-sm-3">
                                <ChartTile />
                                {/* <DashboardTile title={item.title} content={item.content} /> */}
                            </div>
                        )}
                </div>
                <div id="large-tiles" className="row col-sm-12" >
                    <div className="specialContainer" ><ChartTile /></div>
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

export default connect(mapStateToProps)(TileContainer);