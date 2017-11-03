import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import SearchGrid from './components/SearchGrid';
import CSSButtons from './components/CSSButtons';
import StateManagement from './components/StateManagement';
import Basic from './components/Basic';

class MainMenu extends Component {
  render() {
    return(
      <Router>
          <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
                <ul>
                <li><Link to="/">Menu 1</Link></li>
                <li><Link to="/menu2">Menu 2</Link></li>
                <li><Link to="/menu3">Menu 3</Link></li>

                </ul>
            </div>
            <div className="col-md-10">

                <Route exact path="/" component={SearchGrid}/>
                <Route exact path="/react-crud-example" component={SearchGrid}/>
                <Route path="/menu2" component={CSSButtons}/>
                <Route path="/menu3" component={StateManagement}/>

          </div>
        </div>
      </div>
    </Router>
          );
     }
}

export default MainMenu;
