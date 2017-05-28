import React, {Component} from 'react';
import {
  Button,
  Modal,
  FormControl,
  FormGroup,
  ControlLabel,
  HelpBlock
} from 'react-bootstrap';

const FieldGroup = ({
  id,
  label,
  help,
  ...props
}) => (
  <FormGroup controlId={id}>
    <ControlLabel>{label}</ControlLabel>
    <FormControl {...props}/> {help && <HelpBlock>{help}</HelpBlock>}
  </FormGroup>

)

class AddComp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.add = this.add.bind(this);
  }

  close() {
    this.setState({showModal: false});
  }

  open() {
    this.setState({showModal: true});
  }

  add() {
    let productID = document.getElementById("ProductID").value;
    let productName = document.getElementById("ProductName").value;
    let productPrice = document.getElementById("ProductPrice").value;

    this.props.onAddRecord({id: productID, name: productName, price: productPrice});
    this.close();
  }

  render() {
    return (
      <div>
        <Button bsStyle="primary" bsSize="medium" onClick={this.open} id="show">
          Add
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title id="modalTitle">Add a Recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <FieldGroup id="ProductID" type="text" label="ID" placeholder="Enter Product ID"/>
              <FieldGroup id="ProductName" type="text" label="Name" placeholder="Enter Product Name"/>
              <FieldGroup id="ProductPrice" type="text" label="Price" placeholder="Enter Product Price"/>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.add} bsStyle="primary" id="addButton">Add</Button>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>

      </div>

    );
  }
}

export default AddComp;
