import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './views/HomePage';
import Header from './components/Header/Header.js';
import './App.scss';

class App extends Component{
  render() {
    return (
      <div className='l-app'>
        <Header />

        <BrowserRouter>
          <Switch>
            <Route component={ HomePage } exact path='/' />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
