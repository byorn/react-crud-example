import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

const wellStyles = {maxWidth: 400, margin: '0 auto 10px'};

const buttonsInstance = (
  <div className="well" style={wellStyles}>
    <Button bsStyle="primary" bsSize="large" block>Block level button</Button>
    <Button bsSize="large" block>Block level button</Button>
  </div>
);


// const CSSButtons = () => (
//   buttonsInstance
// )

//(1)

class CSSButtons extends Component {
  render() {
    return (
      buttonsInstance
    );
  }
}
//

//(2)
// function Sample(){
//   return <div>another way</div>
// }

//needed
export default CSSButtons;
