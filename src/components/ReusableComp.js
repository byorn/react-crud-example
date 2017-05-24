import React, { Component } from 'react';

class ReusableComp extends Component {

 constructor(props){
   super(props);
   this.state = {status:'NEW'};
 }

  render() {
    return (
      <p>
         This is a reusable component with Props Type is:  [ {this.props.type}]
         <br/>
         The status of the component is State Status is : {this.state.status}
      </p>

    );
  }



componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      status: 'MOUNTED'
    });
  }

}

export default ReusableComp;
