import React, { Component } from 'react';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';
import { connect } from 'react-redux'


const DoughnutTile = props => 
<div className="card card-stats dashboard-tile">
    <h3>{props.label}</h3>
    <Doughnut data={props.data} height={props.height}/>
</div>;

DoughnutTile.defaultProps = {
    height: 185,
    label: "Doughnut Data"
}


const mapStateToProps = state => ({
    data: state.charts.doughnutData
})

export default connect(mapStateToProps)(DoughnutTile);
