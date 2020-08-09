import React from "react";
import { Table } from 'reactstrap';

const DataBase = (props) => {
    return(
        
        <Table hover>
        <thead>
          <tr>
            {props.th.map((items,i) => <th key={i}>{items}</th>)}
          </tr>
        </thead>
        <tbody>
          <tr>
          {props.td.map((items,i) => <td key={i}>{items}</td>)}
          </tr>
          <tr>
          {props.td.map((items,i) => <td key={i}>{items}</td>)}
          </tr>
          <tr>
          {props.td.map((items,i) => <td key={i}>{items}</td>)}
          </tr>
          <tr>
          {props.td.map((items,i) => <td key={i}>{items}</td>)}
          </tr>
          <tr>
          {props.td.map((items,i) => <td key={i}>{items}</td>)}
          </tr>
          <tr>
          {props.td.map((items,i) => <td key={i}>{items}</td>)}
          </tr>
          <tr>
          {props.td.map((items,i) => <td key={i}>{items}</td>)}
          </tr>
        </tbody>
      </Table>

    )
}

export default DataBase;