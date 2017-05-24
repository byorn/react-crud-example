import React, { Component } from 'react';

class SearchComp extends Component {

 constructor(props){
   super(props);
   this.handleSearchButtonClick = this.handleSearchButtonClick.bind(this);
 }

 handleSearchButtonClick(e) {
    this.props.onSearchButtonClick(e.target.value);
 }

  render() {
    return (
      <div className="row">
         <input  type="text"  placeholder="Search..."  value={this.props.searchText}/>
         <button onClick={this.handleSearchButtonClick}>search</button>
      </div>

    );
  }
}




//needed
export default SearchComp;
