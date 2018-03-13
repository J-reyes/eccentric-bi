import React, { Component } from 'react';

import { connect } from 'react-redux';


const TileDisplay = props => (
    <div className="row">
        {
            props.tileList.map((tile, index) => {
                const TileComponent = tile;
                return (
                    <TileComponent key={index}/>
                )
            })
        }
    </div>
)


const mapStateToProps = state => ({
    tileList: state.tileContainer.tileList
})


export default connect(mapStateToProps)(TileDisplay);
