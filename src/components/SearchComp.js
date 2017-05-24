import React, { Component } from 'react';

class SearchComp extends Component {

 constructor(props){
   super(props);
   this.handleSearchButtonClick = this.handleSearchButtonClick.bind(this);
 }

 handleSearchButtonClick(e) {
    this.props.onSearchButtonClick(document.getElementById("searchTxt").value);
 }

  render() {
    return (
     <div>
         <input  id="searchTxt" type="text"  placeholder="Search..." />
         <button onClick={this.handleSearchButtonClick}>search</button>
    </div>

    );
  }
}


export default SearchComp;
