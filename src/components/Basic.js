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
      <div className="Menu">
        <p>Going to Print the FullName By calling a function {formatName(user)}</p>
        <Welcome name={formatName(user)} />
        <DisplayName simpleName="Another Name" />
        <DisplayNameWithPropsObj person={Person}/>
        <ReusableComp type="Text Type"/>

      </div>

    );
  }
}




//needed
export default Basic;
