import React, { Component } from 'react';
import SearchComp from '../components/SearchComp'
import TableComp from '../components/TableComp'


class SearchGrid extends Component {


  constructor(props){
    super(props);
    this.state = {
      searchText: ''
    }
    this.handleSearchClicked = this.handleSearchClicked.bind(this);

  }

  handleSearchClicked(search){
      this.setState({
        searchText: search
      })

  }

  render() {
    return (
      <div>
        <div className="row">
            <SearchComp onSearchButtonClick={this.handleSearchClicked}/>
        </div>
        <div className="row">
        <TableComp selectedSearchText={this.state.searchText}/>
        </div>
      </div>

    );
  }
}


export default SearchGrid;
