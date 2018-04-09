import React, { Component } from 'react';
import TableHeader from './table-header'
import uniqid from 'uniqid';

const Table = props => (
    <table className="table" style={{border: '1px solid black'}} >
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
                        {itemArr.map((item, index) => (
                            <td key={uniqid()}>
                                {
                                    index === 4 ? "*****" :
                                    index === 6 ? <button onClick={() => props.leadsDropdown(item)}  className="btn btn-default">Leads Dropdown</button> : 
                                    item
                                }
                            </td>
                        ))}
                        <td>
                            <button onClick={() => props.edit(itemArr[3])} className="btn btn-primary btn-xs"><span className="glyphicon glyphicon-pencil"></span></button>
                        </td>
                    </tr>
                ))}
        </tbody>
    </table>
)

// itemArr[3]
export default Table;