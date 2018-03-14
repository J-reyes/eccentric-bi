import React, { Component } from 'react';

import TileDisplay from './tile-container-helper/tile-display'
import TileDropdown from './tile-container-helper/tile-dropdown'

const TileContainer = props => (
    <div className="main-container" >
        <TileDropdown />
        <TileDisplay />
    </div>
)
 
export default TileContainer;