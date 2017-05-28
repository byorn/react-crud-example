import React, { Component } from 'react';
import { Table,Button } from 'react-bootstrap';
class TableComp extends Component {

 constructor(props){
   super(props);

 }


  render() {

    let rows = [];
    let productItems = this.props.productItems;
    productItems.map(product =>
      rows.push(<tr key={product.id}><td>{product.id}</td><td>{product.name}</td><td>{product.price}</td></tr>)
    );

    const gridTitle = this.props.selectedSearchText == "" ? "": <span>Searching {this.props.selectedSearchText} </span>

    return (
      <div>

        {gridTitle}

        <Table responsive>
           <thead>
             <tr>
               <th>Code</th>
               <th>Name</th>
               <th>Price</th>
             </tr>
           </thead>
           <tbody>
                {rows}
         </tbody>
      </Table>
      </div>
    );
  }
}




//needed
export default TableComp;
