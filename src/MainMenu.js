import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import SearchGrid from './components/SearchGrid';
import CSSButtons from './components/CSSButtons';
import ES6 from './components/ES6';
import Basic from './components/Basic';

class MainMenu extends Component {
  render() {
    return(
      <Router>
          <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
                <ul>
                <li><Link to="/">CRUD EXample</Link></li>
                <li><Link to="/cssButtons">Bootstrap Stuff</Link></li>
                <li><Link to="/es6">ES6 Code</Link></li>
                <li><Link to="/basic">Basic</Link></li>
                </ul>
            </div>
            <div className="col-md-10">

                <Route exact path="/" component={SearchGrid}/>
                <Route path="/cssButtons" component={CSSButtons}/>
                <Route path="/es6" component={ES6}/>
                <Route path="/basic" component={Basic}/>
          </div>
        </div>
      </div>
    </Router>
          );
     }
}

export default MainMenu;
