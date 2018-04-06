import React, { Component } from 'react';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';

import { formatData } from './line-helper';


class LineChart extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    createLineData = (data, nameData) => {
        return {
            labels: formatData(data, "label"),
            datasets: [{
                label: nameData,
                data: formatData(data, "close")[0] == undefined ? formatData(data, "average") : formatData(data, "close"),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)'
                ],
                borderColor: ['rgb(255, 99, 102)'],
                fill: true,
                cubicInterpolationMode: 'monotone',
                pointStyle: 'rect'
            }],
            options: {

            }
        }
    }



    render() {
        return (
            <div className="card dashboard-tile">
                <Line data={this.createLineData(this.props.data, this.props.nameData)} height={this.props.height} />
            </div>
        )
    }
}

LineChart.defaultProps = {
    height: 140
}

export default LineChart;