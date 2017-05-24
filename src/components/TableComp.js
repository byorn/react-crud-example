import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
class TableComp extends Component {

 constructor(props){
   super(props);

 }


  render() {
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
              <tr>
                <td>1</td>
                <td>{this.props.selectedSearchText} </td>
                <td></td>
              </tr>
       </tbody>
    </Table>

    );
  }
}




//needed
export default TableComp;
