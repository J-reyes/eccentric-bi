import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Dragula from 'react-dragula';
import { connect } from 'react-redux';

class TileDisplay extends Component {
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
                    this.props.tileList.map((tile, index) => {
                        const TileComponent = tile;
                        return (
                            <div key={index} className="col-sm-6">
                                <TileComponent />
                            </div>

                        )
                    })
                }
            </div>)
    }
}

const mapStateToProps = state => ({
    tileList: state.tileContainer.tileList
})

export default connect(mapStateToProps)(TileDisplay);

// const TileDisplay = props => (
//     <div className="row">
//         {
//             props.tileList.map((tile, index) => {
//                 const TileComponent = tile;
//                 return (
//                     <div key={index} className="col-sm-6" style={{margin: 0}} >
//                         <TileComponent />
//                     </div>

//                 )
//             })
//         }
//     </div>
// )


// const mapStateToProps = state => ({
//     tileList: state.tileContainer.tileList
// })


// export default connect(mapStateToProps)(TileDisplay);
