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
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>
              Dropdown
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        );
      }
    

    // render() {
        // return (
        //     <div className="main-container">
        //         <div className="widget-container">
        //             <div className="widget-dropdown">
        //                 <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-haspopup="true" aria-expanded="false" >
        //                     Widgets
        //                 </button>
        //                 <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        //                     <a className="dropdown-item" href="#" onClick={(e) => this.setState({ widgetBar: <WeatherWidget /> })} >Weather</a>
        //                     <a className="dropdown-item" href="#" >Bitcoin</a>
        //                     <a className="dropdown-item" href="#" >Twitter</a>
        //                     <a className="dropdown-item" href="#" >Calendar</a>
        //                     <a className="dropdown-item" href="#" >Redwood</a>
        //                 </div>
        //             </div>
        //             <div className="display-container">
        //                 {
        //                     this.state.widgetBar
        //                 }
        //             </div>
        //         </div>

        //     </div>
        // )
        
    // }
}

export default WidgetDropdown;