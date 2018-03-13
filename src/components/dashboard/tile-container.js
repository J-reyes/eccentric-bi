import React, { Component } from 'react';
import { connect } from 'react-redux';
import dragula from 'react-dragula';

import DashboardTile from './dashboard-tile';
import LargeTile from './large-tile';

class TileContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            img: 'https://www.muralswallpaper.co.uk/app/uploads/Black-and-White-typography-map-maps-plain-kj-820x532.jpg'
        }
    }
    render() {
        return (
            <div id="dashboard-container">
                <div id="tile-ribbon" className="row">
                    {
                        this.props.tiles.map((item, index) =>
                            <div key={index} className="container tile-container col-sm-3">
                                <DashboardTile title={item.title} content={item.content} />
                            </div>
                        )}
                </div>
                <div id="large-tiles" className="row col-sm-12" >
                    <div className="container" ref={this.dragulaDecorator} >
                        <LargeTile map={this.state.img} />
                        <LargeTile map={this.state.img} />
                        <LargeTile map={this.state.img} />
                    </div>

                </div>
            </div>
        )
        dragulaDecorator = (componentBackingInstance) => {
            if (componentBackingInstance) {
              let options = { };
              Dragula([componentBackingInstance], options);
            }
          };
    }
}

const mapStateToProps = state => {
    return {
        tiles: state.loginPage.tiles
    }
}

export default connect(mapStateToProps)(TileContainer);