import React, { Component } from 'react';
import { connect } from 'react-redux'

const BitcoinWidget = props =>
    <div className="small-widget">
        <h3>Bitcoin Price</h3>
        <img src="https://coalcrackerkids.org/wp-content/uploads/2018/01/Cryptocurrency-Bitcoin-Logo.jpg" alt="bitcoin logo" className="img-responsive col-sm-6" />
        <h3>{props.price}</h3>
    </div>

const mapStateToProps = state => ({
    price: state.widgetContainer.bitcoin
})

export default connect(mapStateToProps)(BitcoinWidget)