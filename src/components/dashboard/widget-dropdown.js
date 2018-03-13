import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import WeatherWidget from './../widgets/weather-widget';
import BitcoinWidget from './../widgets/bitcoin-widget';
import TwitterWidget from './../widgets/twitter-widget';
import CalendarWidget from './../widgets/calendar-widget';
import RedwoodWidget from './../widgets/redwood-widget';

class WidgetDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false,
            widgetBar: []
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
                            <DropdownItem onClick={(e) => this.setState({ widgetBar: <WeatherWidget /> })} >Weather</DropdownItem>
                            <DropdownItem >Bitcoin</DropdownItem>
                            <DropdownItem >Twitter</DropdownItem>
                            <DropdownItem >Calendar</DropdownItem>
                            <DropdownItem >Redwood</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <div className="display-container">
                        {
                            this.state.widgetBar
                        }
                    </div>
                </div>

            </div>
        )
        
    }
}

export default WidgetDropdown;