import React, { Component } from 'react';

const DashboardTile = props =>
    <div>
        <h3>{props.title}</h3>
        <div>{props.content}</div>
        <button className="btn btn-danger">Remove Tile</button>
    </div>

export default DashboardTile
