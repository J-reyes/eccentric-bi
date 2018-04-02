import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Dragula from 'react-dragula';
import { connect } from 'react-redux';


class WidgetDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount = () => {
        var container = ReactDOM.findDOMNode(this);
        Dragula([container]);
    }

    render() {
        return (
            <div className="row">
                {
                    // extract react components from array and render to page
                    this.props.widgetList.map((widget, index) => {
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
    }
}

const mapStateToProps = state => ({
    widgetList: state.widgetContainer.widgetList
})

export default connect(mapStateToProps)(WidgetDisplay);
