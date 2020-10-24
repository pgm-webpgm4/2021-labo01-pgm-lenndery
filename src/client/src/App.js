import React from 'react';
import './App.css';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import Header from './components/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home} from './pages/index.js'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Route path='/' exact component={Home}></Route>
        <Route path='/store' component={Store}></Route>
      </div>
    </Router>
  );
}

const Store = () => {
  return (
    <div className="p-5">
      <h1>Store</h1>
    </div>
  )
}

export default App;
