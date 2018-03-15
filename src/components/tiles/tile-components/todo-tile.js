import React, { Component } from 'react';
import ToDoInput from '../todo-tile-helper/todo-input'
import ToDoDisplay from '../todo-tile-helper/todo-display'

const ToDoTile = props => (
    <div className="card dashboard-tile">
        <ToDoInput />
        <ToDoDisplay />
    </div>
)
 
export default ToDoTile;
 
