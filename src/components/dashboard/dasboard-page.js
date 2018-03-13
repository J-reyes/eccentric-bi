import React, { Component } from 'react';
import NavBar from '../navbar/navbar';


// icons imports
import SvgIcon from 'react-icons-kit';
import { menu } from 'react-icons-kit/icomoon/menu';
import { database } from 'react-icons-kit/icomoon/database';
import { ic_cached } from 'react-icons-kit/md/ic_cached';

class DashBoardPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="main-panel">
                <div className="nav navbar-default">
                        <div className="container-fluid">
                            <div className="navbar-minimize">
                                <button id="minimizeSidebar" className="btn btn-default btn-fill btn-round btn-icon">
                                    <i className="fa fa-ellipsis-v visibile-on-sidebar-regular"></i>
                                    <i ><SvgIcon size={20} icon={menu} /></i>

                                </button>
                                <div className="main-content">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-lg-2 col-sm-6">
                                            <div className="card card-status">
                                                <div className="content">
                                                    <div className="row">
                                                        <div className="col-xs-5">
                                                            <SvgIcon size={20} icon={database} />
                                                        </div>
                                                        <div className="col-xs-7">
                                                            <div className="numbers">
                                                                <p>Capacity</p>
                                                                105GB
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="footer">
                                                    <hr />
                                                    <div className="stats">
                                                        <SvgIcon size={20} icon={ic_cached} />
                                                        Update now
                                                    </div>
                                                </div>
            
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-sm-6">
                                            <div className="card card-stats">
                                                <div className="content">
                                                    <div className="row">
                                                        <div className="col-xs-5">
                                                            <SvgIcon size={20} icon={database} />
                                                        </div>
                                                        <div className="col-xs-7">
                                                            <div className="numbers">
                                                                <p>Revenue</p>
                                                                $1,345
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="footer">
                                                    <hr />
                                                    <div className="stats">
                                                        <SvgIcon size={20} icon={ic_cached} />
                                                        Update now
                                                    </div>
                                                </div>
            
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-sm-6">
                                            <div className="card card-stats">
                                                <div className="content">
                                                    <div className="row">
                                                        <div className="col-xs-5">
                                                            <SvgIcon size={20} icon={database} />
                                                        </div>
                                                        <div className="col-xs-7">
                                                            <div className="numbers">
                                                                <p>Revenue</p>
                                                                $1,345
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="footer">
                                                    <hr />
                                                    <div className="stats">
                                                        <SvgIcon size={20} icon={ic_cached} />
                                                        Update now
                                                    </div>
                                                </div>
            
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-sm-6">
                                            <div className="card card-stats">
                                                <div className="content">
                                                    <div className="row">
                                                        <div className="col-xs-5">
                                                            <SvgIcon size={20} icon={database} />
                                                        </div>
                                                        <div className="col-xs-7">
                                                            <div className="numbers">
                                                                <p>Revenue</p>
                                                                $1,345
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="footer">
                                                    <hr />
                                                    <div className="stats">
                                                        <SvgIcon size={20} icon={ic_cached} />
                                                        Update now
                                                    </div>
                                                </div>
            
                                            </div>
                                        </div>       
            
                                    </div>
                                </div>
                            </div>
            
                        </div>
                    </div>
                </div>

                


         </div>

        )
    }
}

export default DashBoardPage;