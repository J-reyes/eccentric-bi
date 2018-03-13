import React, { Component } from 'react';
import DashboardTile from './dashboard-tile';
import { connect } from 'react-redux';

class TileContainer extends Component {
    constructor(props) {
        super(props);
        
        this.state = { }
         console.log(this.props.tiles)
    }
    render() { 
        return ( 
            <div id="dashboard-container">
                {
                    this.props.tiles.map((item, index) =>
                        <div key={index} style={{border: '1px solid black'}} className="container tile-container col-sm-3">
                            <DashboardTile title={item.title} content={item.content}/>
                        </div>
                )}
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