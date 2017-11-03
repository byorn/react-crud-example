import React, { Component } from 'react';
import StateComp from '../components/StateComp'

class StateManagement extends Component {

  constructor(props){
    super(props);

    this.changeVar = this.changeVar.bind(this);
    this.myVariable = "Byorn";
    this.state = {
      myState: "once"
    }
  }

 changeVar(){
   this.myVariable = "Jing";
   this.setState({myState:"twice"});

 }

  render() {

    return (
      <div>
          <button onClick = {this.changeVar} />
          <StateComp myProp={this.myVariable}/>
      </div>
    );
  }
}


//needed
export default StateManagement;
