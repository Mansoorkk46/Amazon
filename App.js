import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import Checkout from './Checkout';
import Home from './Home';
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>

      </div>
    </Router>

  )
}

export default App;
