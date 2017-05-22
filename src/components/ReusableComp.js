import React, { Component } from 'react';

class ReusableComp extends Component {

 constructor(props){
   super(props);
 }

  render() {
    return (
      <p>
         This is a reusable comp {this.props.type}
      </p>

    );
  }
}




//needed
export default ReusableComp;
