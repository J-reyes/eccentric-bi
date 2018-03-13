import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { addWidget } from '../redux/actions/index';
import { connect } from 'react-redux';
import { WEATHERWIDGET, BITCOINWIDGET, TWITTERWIDGET, CALENDARWIDGET, REDWOODWIDGET } from '../redux/reducer/widget-reducer';


class WidgetDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false,
        }
    }
    toggle = () => {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }
    

    render() {
        return (
            <div className="main-container">
                <div className="widget-container">
                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle caret>
                            Widgets
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={() => this.props.createWidget(WEATHERWIDGET) } >Weather</DropdownItem>
                            <DropdownItem onClick={() => this.props.createWidget(BITCOINWIDGET) } >Bitcoin</DropdownItem>
                            <DropdownItem onClick={() => this.props.createWidget(TWITTERWIDGET) } >Twitter</DropdownItem>
                            <DropdownItem onClick={() => this.props.createWidget(CALENDARWIDGET) } >Calendar</DropdownItem>
                            <DropdownItem onClick={() => this.props.createWidget(REDWOODWIDGET) } >Redwood</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <div className="display-container">
                        {
                            this.props.widgetList.map((widget, index) =>
                            {
                                const WidgetComponent = widget;
                                return (
                                    <div key={index}  className="col-sm-3">
                                        <WidgetComponent />
                                    </div>
                                    
                                )
                            }
                            )
                        }
                    </div>
                </div>

            </div>
        )
        
    }
}

const mapStateToProps = state => ({
    widgetList: state.widgetContainer.widgetList
})

const mapDispatchToProps = dispatch => ({
    createWidget: widgetType => dispatch(addWidget(widgetType))
})

export default connect (mapStateToProps, mapDispatchToProps)(WidgetDropdown);