import React, { Component } from 'react';

const DashboardTile = props =>
    <div id="dashboard-tile">
        <h3>{props.title}</h3>
        <div>{props.content}</div>
        <button className="btn btn-danger btn-sm pull-right">Remove Tile</button>
    </div>

export default DashboardTile
