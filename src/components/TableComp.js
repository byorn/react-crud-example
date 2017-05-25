import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
class TableComp extends Component {

 constructor(props){
   super(props);

 }


  render() {

    let rows = [];
    let productItems = this.props.productItems;
    productItems.map(x =>
      rows.push(<tr><td>{x}</td><td>{x}</td><td>{x}</td></tr>)
    );
    return (
      <Table responsive>
         <thead>
           <tr>
             <th>#</th>
             <th>Table heading</th>
             <th>Table heading</th>
           </tr>
         </thead>
         <tbody>
              {rows}
       </tbody>
    </Table>
    );
  }
}




//needed
export default TableComp;
