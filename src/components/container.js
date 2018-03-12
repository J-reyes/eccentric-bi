import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';


// import components 
import SideBar from './sidebar/sidebar.js';




class Container extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container-fluid">
                
                    <SideBar />
              


            </div>
        )
    }
}

export default Container;