import React, { Component } from 'react';
import SearchComp from '../components/SearchComp'
import TableComp from '../components/TableComp'


class SearchGrid extends Component {



  constructor(props){
    super(props);
    this.state = {
      searchText: '',
    }
    this.handleSearchClicked = this.handleSearchClicked.bind(this);

  }


  this.productItems = [{id:'LAP1',name:'Laptop PC',price:'1500AUD'},
                 {id:'DES1',name:'Desktop PC',price:'1100AUD'},
               ];


  handleSearchClicked(search){
      this.setState({
        searchText: search
      });

  }

  render() {

    return (
      <div>
        <div className="row">
            <SearchComp onSearchButtonClick={this.handleSearchClicked}/>
        </div>
        <div className="row">
        <TableComp productItems={this.productItems} selectedSearchText={this.state.searchText}/>
        </div>
      </div>
    );
  }
}


export default SearchGrid;
