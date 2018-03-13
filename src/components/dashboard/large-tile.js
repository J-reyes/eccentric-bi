import React, { Component } from 'react';

const LargeTile = props =>
    <div className="large-tile">
        <h3>Global Labels</h3>
        <img src={props.map} alt="" className="img-responsive" style={{height: '25em'}} />
    </div>

export default LargeTile 