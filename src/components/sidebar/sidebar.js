import React, { Component } from 'react';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';

import { Link, Switch, Route } from 'react-router-dom';

import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';
import { ic_people } from 'react-icons-kit/md/ic_people';
import { ic_business_center } from 'react-icons-kit/md/ic_business_center';
import { ic_dashboard } from 'react-icons-kit/md/ic_dashboard';
import { ic_insert_chart } from 'react-icons-kit/md/ic_insert_chart'; 
import { calendar } from 'react-icons-kit/icomoon/calendar';
import { ic_pages } from 'react-icons-kit/md/ic_pages';

const Icon20 = props => <SvgIcon size={props.size || 20} icon={props.icon} />;


class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            
            
            <div id="sidebar" style={{ background: 'black', color: '#FFF', height: 1100  }}>
                <a href=""> <div ><img id="logo"src="./images/EccentricBI_270218_2_transparent.png" alt=""/></div></a>
                <hr style={{ background: 'black'}} />
                
                    <SideNav highlightColor='#E91E63' highlightBgColor='#00bcd4' defaultSelected='dashboard'>
                       
                        
                        <Nav id='header'>
                            <NavIcon  ><img className="img-circle" id="image" src="https://vignette.wikia.nocookie.net/nickelodeon/images/3/33/Image_by_daggett_beaver-d7at1km.jpg/revision/latest?cb=20160902041236" alt=""/></NavIcon>
                            <NavText id="user"  style={{fontSize: 18, paddingLeft: 45 }}>Somebody's page</NavText>
                            <Nav id="myProfile">
                                <NavIcon></NavIcon>
                                <NavText> My Profile </NavText>
                            </Nav>
                            <Nav id="editProfile">
                                <NavIcon></NavIcon>
                                <NavText> Edit Profile </NavText>
                            </Nav>
                            <Nav id="Settings">
                                <NavIcon></NavIcon>
                                <NavText> Settings </NavText>
                            </Nav>
                        </Nav>
                     
                        <Nav id='dashbaord'>
                            <NavIcon><SvgIcon size={40} icon={ic_dashboard} /></NavIcon>
                            <NavText style={{fontSize: 16, paddingLeft: 20 }} >DASHBOARD</NavText>
                        </Nav>
                        <Nav id='charts'>
                            <NavIcon><SvgIcon size={40} icon={ic_insert_chart} /></NavIcon>
                            <NavText style={{fontSize: 16, paddingLeft: 20}} >Charts</NavText>
                        </Nav>
                        <Nav id='calender'>
                            <NavIcon><SvgIcon size={40} icon={calendar} /></NavIcon>
                            <NavText style={{fontSize: 16, paddingLeft: 20}} >Calender</NavText>
                        </Nav>

                        {/* different pages*/}
                        <Nav id='pages'>
                            <NavIcon><SvgIcon size={40} icon={ic_pages} /></NavIcon>
                            <NavText style={{fontSize: 16,paddingLeft: 20 }} >PAGES</NavText>
                            <Nav id="userPage">
                                <NavIcon></NavIcon>
                                <NavText> User Page </NavText>
                            </Nav>
                            <Nav id="loginPage">
                                <NavIcon></NavIcon>
                                <NavText> Login Page </NavText>
                            </Nav>
                            <Nav id="Register">
                                <NavIcon></NavIcon>
                                <NavText> Register </NavText>
                            </Nav>
                            <Nav id="lockScreen">
                                <NavIcon></NavIcon>
                                <NavText> Lock Screen Page </NavText>
                            </Nav>


                        </Nav>




                    </SideNav>
                </div>
          
          
        )
    }
}

export default SideBar;