import React, { Component } from 'react';
import SideBar from '../sidebar/sidebar'
import NavBar from '../navbar/navbar'
import Title from '../title'

import WidgetDropdown from './widget-dropdown'



class SideBarTest extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <SideBar />
                <NavBar />
                <WidgetDropdown />
                <div className="container-fluid">
                    <div className="row ">
                        <div className="col-md-12"><span className="pull-right"><button className="btn btn-primary" id="button">Button</button></span></div>
                    </div>

                        <div className="row" id="tiles-div">

                    </div>

                    <div className="row ">
                        <div className="col-md-12"><span className="pull-right"><button className="btn btn-primary" id="button">Button</button></span></div>
                    </div>

                    <div className="row" id="graph-div">

                     </div>

                     <div className="row ">
                     <div className="col-md-12"><span className="pull-right"><button className="btn btn-primary" id="button">Button</button></span></div>
                 </div>

                     <div className="row" id="tiles-div">

                 </div>
                </div>


            </div>
        )
    }
}

export default SideBarTest;