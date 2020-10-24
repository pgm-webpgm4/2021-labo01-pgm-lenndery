import React from 'react';
import './App.scss';
import Header from './components/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home, NewAuthor, NewPost} from './pages/index.js'

const App = () => {
    return (
        <Router>
        <div className="App h-100">
            <div className="row h-100">
                <div className="col-3">
                    <div className="bg-primary h-100 w-100">
                        <Header/>
                    </div>
                </div>
                <div className="col">
                    <Route path='/' exact component={Home}></Route>
                    <Route path='/blog/create' exact component={NewPost}></Route>
                    <Route path='/author/create' exact component={NewAuthor}></Route>
                </div>
            </div>
        </div>
        </Router>
    );
}

export default App;
