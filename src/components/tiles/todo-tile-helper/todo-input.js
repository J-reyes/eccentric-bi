import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToDo } from '../../redux/actions/index'


class ToDoInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    _sendToStore = () => {
        this.props.sendToDo(this.state);
        this.setState({
            text: ''
        });
    }

    render() {
        return (
            <div className="form-group">
                <label>To Do Item</label>
                <div className="form-inline">
                    <input type="text" className="form-control" value={this.state.text} onChange={(e) => this.setState({ text: e.target.value })} />
                    <button className="btn btn-primary" onClick={this._sendToStore} >Enter</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    sendToDo: item => dispatch(addToDo(item))
})


export default connect(null, mapDispatchToProps)(ToDoInput);