import React, { Component } from 'react';

const TableHeader = props => (
    <th scope="col">
        {props.label}
        {props.canSort ? <span onClick={props.sortAsc} className="glyphicon glyphicon-triangle-top"></span> : ""} 
        {props.canSort ? <span onClick={props.sortDesc} className="glyphicon glyphicon-triangle-bottom"></span> : ""} 
    </th>
)

export default TableHeader;