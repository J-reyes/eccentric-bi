import React, { Component } from 'react';
import ToDoInput from './todo-tile/todo-input'
import ToDoDisplay from './todo-tile/todo-display'

const ToDoTile = props => (
    <div>
        <ToDoInput />
        <ToDoDisplay />
    </div>
)
 
export default ToDoTile;
 
