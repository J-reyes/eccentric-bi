import React, { Component } from 'react';

import { connect } from 'react-redux';


const TileDisplay = props => (
    <div className="row">
        {
            props.tileList.map((tile, index) => {
                const TileComponent = tile;
                return (
                    <div key={index} className="col-sm-6" style={{margin: 0}} >
                        <TileComponent />
                    </div>
                    
                )
            })
        }
    </div>
)


const mapStateToProps = state => ({
    tileList: state.tileContainer.tileList
})


export default connect(mapStateToProps)(TileDisplay);
