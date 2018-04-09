import React, { Component } from 'react';
import uniqid from 'uniqid';
import TableHeader from './table-header';

const displayHelper = item => (
    typeof item != "boolean"
        ? !isNaN(Date.parse(item))
            ? new Date(item).toString()
            : item
        : item
            ? "Yes"
            : "No"
);


const Table = props => (
    <table className="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                {props.header.map(labelObj => (
                    <TableHeader key={uniqid()} {...labelObj} />
                ))}
            </tr>
        </thead>
        <tbody>
            {
                props.items.map((itemArr, index) => (
                    <tr key={uniqid()}>
                        <th scope="row">{index + 1}</th>
                        {itemArr.map(item => (
                            <td key={uniqid()}>
                                {
                                    displayHelper(item)
                                }
                            </td>
                        ))} 
                    </tr>
                ))}
        </tbody>
    </table>
)

export default Table;

