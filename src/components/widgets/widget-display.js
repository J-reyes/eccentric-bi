import React, { Component } from 'react';

import { connect } from 'react-redux';

const WidgetDisplay = props => (
    <div className="row">
    {
        props.widgetList.map((widget, index) => {
            const WidgetComponent = widget;
            return (
                <div key={index} className="col-sm-3">
                    <WidgetComponent />
                </div>
            )
        })
    }
    </div>
)

const mapStateToProps = state => ({
    widgetList: state.widgetContainer.widgetList
})

export default connect (mapStateToProps)(WidgetDisplay);