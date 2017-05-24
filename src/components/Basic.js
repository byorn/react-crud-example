import React, { Component } from 'react';
import Welcome from '../components/Welcome'
import ReusableComp from '../components/ReusableComp'

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Byorn',
  lastName: 'De Silva'
};

const Person = {
  name: 'Jing',
  age: '33'
}

const DisplayName = (props) => (
    <p> Display Name:  {props.simpleName}</p>

)
const DisplayNameWithPropsObj = (props) => (
    <div>
        <p> Persons Name:  {props.person.name} </p>
        <p> Persons Age:  {props.person.age} </p>
    </div>
)

class Basic extends Component {
  render() {
    return (
      <ul>
        <li>Calling a function:  {formatName(user)}</li>
        <li>Passing a name to a component: <Welcome name={formatName(user)} /> </li>
        <li>Passing a name to an inline component: (i.e. function component in the same class file) <DisplayName simpleName="Byorn de Silva" /> </li>
        <li>Passing an object to a component: <DisplayNameWithPropsObj person={Person}/> </li>
        <li>Passing different types of attributes to a component class, where props have been initialized in the constructor: <ReusableComp type="Text Type"/> </li>

      </ul>

    );
  }
}




//needed
export default Basic;
