import React, { Component } from 'react';

import { connect } from 'react-redux';
import { removeToDo } from '../../redux/actions/index'


const ToDoDisplay = props => (
    <div>
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>To Do</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.toDoList.map((item, index) => (
                        <tr onClick={() =>  props.removeFromList(index)} key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.text}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
)


const mapStateToProps = state => ({
    toDoList: state.toDo.toDoList
})
const mapDispatchToProps = dispatch => ({
    removeFromList: index => dispatch(removeToDo(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoDisplay);
