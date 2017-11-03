import React, { Component } from 'react';


class StateComp extends Component {

  constructor(props){
    super(props);
    this.myPropsdetails = this.props.myProp;
  }


  render() {

    return (
      <span> my state managed {this.myPropsdetails} component </span>
    );
  }
}


//needed
export default StateComp;
