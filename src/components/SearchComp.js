import React, { Component } from 'react';

class SearchComp extends Component {

 constructor(props){
   super(props);
 }

  render() {
    return (
      <div className="row">
         <input value={searchValue}/>
         <button>search</button>
      </div>

    );
  }
}




//needed
export default SearchComp;
