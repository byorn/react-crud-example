import React, { Component } from 'react';
import SearchComp from '../components/SearchComp';
import TableComp from '../components/TableComp';
import AddComp from '../components/AddComp';


class SearchGrid extends Component {



  constructor(props){
    super(props);
    this.state = {
      searchText: '',
    }
    this.handleSearchClicked = this.handleSearchClicked.bind(this);
    this.handleSearchTextProvided = this.handleSearchTextProvided.bind(this);
    this.handleAddRecord =   this.handleAddRecord.bind(this);

    this.dataItems =  [{id:'LAP1',name:'Laptop PC',price:'1500AUD'},
                   {id:'DES1',name:'Desktop PC',price:'1100AUD'},
                 ];
    this.productItems = this.dataItems;



  }


handleAddRecord(product){
  this.productItems.push(product);

  //will make a change to the state, so that the search component will render
  this.setState({
    searchText: ''
  });
}

 handleSearchTextProvided(search){
   this.doSearch(search);
 }




  handleSearchClicked(search){
      this.doSearch(search);
  }


  doSearch(search){
    this.setState({
      searchText: search
    });

    if(search != ""){
      this.productItems = [];
    }else{
      this.productItems = this.dataItems;
      return;
    }

    for (let product of this.dataItems) {
        if(product.name.includes(search)){
          this.productItems.push(product);
        }
    }
  }

  render() {

    return (
      <div>
        <div className="row">
            <SearchComp onSearchButtonClick={this.handleSearchClicked} onSearchTextProvided={this.handleSearchTextProvided}/>
        </div>
        <div className="row">
        <TableComp productItems={this.productItems} selectedSearchText={this.state.searchText}/>
        </div>
        <div className="row">
        <AddComp onAddRecord={this.handleAddRecord}/>
        </div>
      </div>
    );
  }
}


export default SearchGrid;
