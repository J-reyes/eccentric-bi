import React, { Component } from 'react';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';
import { connect } from 'react-redux'

class BarTile extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return (
            <div className="card card-stats">
                <Bar data={this.props.barData} height={this.props.height} />
            </div>  
        )
    }
}

BarTile.defaultProps = {
    height: 200
}
 
const mapStateToProps = state => ({
    barData: state.charts.barData
})

export default connect(mapStateToProps)(BarTile);