import React, { Component } from 'react';

class TableComp extends Component {

 constructor(props){
   super(props);

 }


  render() {
    return (
      <div className="row">
         {{ props.selectedSearchText}}
      </div>

    );
  }
}




//needed
export default TableComp;
