import React, { Component } from 'react';
import ToDoInput from './todo-tile-helper/todo-input'
import ToDoDisplay from './todo-tile-helper/todo-display'

const ToDoTile = props => (
    <div>
        <ToDoInput />
        <ToDoDisplay />
    </div>
)
 
export default ToDoTile;
 
