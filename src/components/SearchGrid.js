import React, { Component } from 'react';
import SearchComp from '../components/SearchComp'
import TableComp from '../components/TableComp'


class SearchGrid extends Component {
  render() {
    return (
      <div className="container">
        <SearchComp/>
        <TableComp/>
      </div>

    );
  }
}




//needed
export default SearchGrid;
