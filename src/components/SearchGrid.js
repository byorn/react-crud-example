import React, { Component } from 'react';
import SearchComp from '../components/SearchComp'
import TableComp from '../components/TableComp'


class SearchGrid extends Component {

  constructor(props){
    super(props);
    this.handleSearchClicked = this.handleSearchClicked.bind(this);
  }

  handleSearchClicked(searchedText){
      this.props.searchText = searchText;
  }

  render() {
    return (
      <div className="container">
        <SearchComp onSearchButtonClick={this.handleSearchClicked}/>
        <TableComp searchText={this.searchText}/>
      </div>

    );
  }
}




//needed
export default SearchGrid;
