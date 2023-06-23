import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Buyflow from './modules/buyflow';
import { ProductIds } from './modules/buyflow/constants';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Switch>
          <Route path="/buy/insurance_dev">
            <Buyflow productId={ProductIds.developerInsurance} />
          </Route>
          <Route path="/buy/insurance_des">
            <Buyflow productId={ProductIds.designerInsurance} />
          </Route>
          <Route path="/">
            <p>Welcome to Getsafe's Developer Insurance</p>
            <Link to="/buy/insurance_dev">Developer Insurance</Link>
            <Link to="/buy/insurance_des">Designer Insurance</Link>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
