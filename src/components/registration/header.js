import React, { Component } from 'react';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="container">
                <div className="row" >
                    <div className="col-md-8 col-md-offset-2 text-center"  >
                        <div className="header-text" id="header-text" >
                            <h1 style={{fontSize: 36}} id="header-h3" > Light Bootstrap DashBoard PRO</h1>
                            <h3 style={{fontSize: 24}} id="header-h4"> Register for free and experience the dashboard today</h3>
                            <hr/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;