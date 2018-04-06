import React, { Component } from 'react';

import LineChart from './line-chart';

import axios from 'axios';



class LineContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            data: [
                {
                    "date": "2017-04-04",
                    "open": 141.86,
                    "high": 142.09,
                    "low": 141.27,
                    "close": 141.73,
                    "volume": 12948599,
                    "unadjustedVolume": 12948599,
                    "change": -0.55,
                    "changePercent": -0.387,
                    "vwap": 141.6304,
                    "label": "Apr 4, 17",
                    "changeOverTime": 0
                }
            ],
            nameData: "",
            average: "",
            symbol: "AAPL"
        }
    }

    updateAPI = () => {
        axios.get(`https://api.iextrading.com/1.0/stock/${this.state.symbol}/chart/1y`)
            .then(response => {
                this.setState({
                    data: response.data,
                })
            })

        axios.get(`https://api.iextrading.com/1.0/stock/${this.state.symbol}/company/chart`)
            .then(response => {
                this.setState({
                    nameData: `${response.data.companyName} SYMBOL: ${response.data.symbol}`
                })
            })
    }

    componentDidMount() {
        this.updateAPI();
        this.timerID = setInterval(
            () => this.updateAPI(),
            100000
          );
        
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
  }

    rangeClick = (stock, range) => {
        axios.get(`https://api.iextrading.com/1.0/stock/${stock}/chart/${range}`)
            .then(response => {
                this.setState({
                    data: response.data,
                    dayData: [
                        {
                            average: response.data.average
                        }
                    ]
                })


            })
    }



    searchSymbol(e){
        var symbol= e.target.value;
        this.setState({
            symbol: e.target.value
        })
        console.log(symbol);
    }

    submitSymbol(){
        
        axios.get(`https://api.iextrading.com/1.0/stock/${this.state.symbol}/company/chart`)
        .then(response => {
            this.setState({
                nameData: `${response.data.companyName} SYMBOL: ${response.data.symbol}`,


            })
        })
    }

    render() {
        return (
            <div>
                <LineChart data={this.state.data} nameData={this.state.nameData} />
                <div className="container-fluid text-center">
                    <button className="btn btn-primary col-md-2" onClick={() => this.rangeClick(this.state.symbol, "1d")}>1 Day</button>
                    <button className="btn btn-primary col-md-2" onClick={() => this.rangeClick(this.state.symbol, "1y")}>1 Years</button>
                    <button className="btn btn-primary col-md-2" onClick={() => this.rangeClick(this.state.symbol, "2y")}>2 Years</button>
                    <input type="text" placeholder="symbol" className="form-control col-md-2" onChange={this.searchSymbol.bind(this)} />
                    <button className="btn btn-primary col-md-2" onClick={this.submitSymbol.bind(this)}>submit</button>
                </div>

            </div>

        )
    }
}

export default LineContainer;