import React, { Component } from 'react';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';
import { connect } from 'react-redux'

class ChartTile extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return (
            <Doughnut data={this.props.data}/>
        )
    }
}

 
const mapStateToProps = state => ({
    data: state.charts.data
})

export default connect(mapStateToProps)(ChartTile);