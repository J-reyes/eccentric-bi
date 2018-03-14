import React, { Component } from 'react';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import { Link, Switch, Route } from 'react-router-dom';

import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';
import { ic_people } from 'react-icons-kit/md/ic_people';
import { ic_business_center } from 'react-icons-kit/md/ic_business_center';

const Icon20 = props => <SvgIcon size={props.size || 20} icon={props.icon} />;


class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            
            
            <div className="col-md-3" id="sidebar" style={{ background: '#ff5b57', color: '#FFF', width: 220, height: 1100, overflowY: 'scroll', WebKitOverflowScrolling: 'auto'  }}>
                <a href=""> <div className="logo"><img src="http://lbd-pro-react.creative-tim.com/static/media/logo.5d5d9eef.svg" alt=""/></div></a>
                <a href="#" className="simple-text logo-normal" >Eccentric</a>
                    <SideNav highlightColor='#E91E63' highlightBgColor='#00bcd4' defaultSelected='dashboard'>
                       
                        
                        <Nav id='header'>
                            <NavIcon><SvgIcon size={40} icon={ic_aspect_ratio} /></NavIcon>
                            <NavText> Eccentric BI </NavText>
                        </Nav>
                        <Nav id='user'>
                            <NavIcon><SvgIcon size={20} icon={ic_people} /></NavIcon>
                            <NavText>USER</NavText>
                        </Nav>
                        <Nav id='dashbaord'>
                            <NavIcon><SvgIcon size={20} icon={ic_business} /></NavIcon>
                            <NavText>DASHBOARD</NavText>
                        </Nav>
                        <Nav id='charts'>
                            <NavIcon><SvgIcon size={20} icon={ic_business} /></NavIcon>
                            <NavText>Charts</NavText>
                        </Nav>
                        <Nav id='calender'>
                            <NavIcon><SvgIcon size={20} icon={ic_business} /></NavIcon>
                            <NavText>Calender</NavText>
                        </Nav>

                        {/* different pages*/}
                        <Nav id='pages'>
                            <NavIcon><SvgIcon size={20} icon={ic_business} /></NavIcon>
                            <NavText>PAGES</NavText>
                            <Nav id="userPage">
                                <NavIcon><Icon20 size={16} icon={ic_aspect_ratio} /></NavIcon>
                                <NavText> User Page </NavText>
                            </Nav>
                            <Nav id="loginPage">
                                <NavIcon><Icon20 size={16} icon={ic_business} /></NavIcon>
                                <NavText> Login Page </NavText>
                            </Nav>
                            <Nav id="Register">
                                <NavIcon><Icon20 size={16} icon={ic_business_center} /></NavIcon>
                                <NavText> Register </NavText>
                            </Nav>
                            <Nav id="lockScreen">
                                <NavIcon><Icon20 size={16} icon={ic_business_center} /></NavIcon>
                                <NavText> Lock Screen Page </NavText>
                            </Nav>


                        </Nav>




                    </SideNav>
                </div>
          
          
        )
    }
}

export default SideBar;