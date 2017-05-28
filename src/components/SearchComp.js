import React, { Component } from 'react';
import { FormControl,Button } from 'react-bootstrap';
class SearchComp extends Component {

 constructor(props){
   super(props);
   this.handleSearchButtonClick = this.handleSearchButtonClick.bind(this);
   this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
 }

 handleSearchButtonClick(e) {
    this.props.onSearchButtonClick(document.getElementById("searchTxt").value);
 }

handleSearchInputChange(e){
  this.props.onSearchTextProvided(document.getElementById("searchTxt").value);
}



  render() {
    return (
     <div>
        <div className="col-md-11">
         <FormControl type="text" id="searchTxt" placeholder="Search..." onChange={this.handleSearchInputChange}/>
         </div>
           <div className="col-md-1">
         <Button bsStyle="primary" bsSize="medium" onClick={this.handleSearchButtonClick}>
           Search
         </Button>
       </div>
    </div>

    );
  }
}


export default SearchComp;
