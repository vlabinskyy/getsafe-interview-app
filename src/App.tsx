import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Buyflow from './modules/buyflow';
import { createStore, StateMachineProvider } from 'little-state-machine';
import { routes } from './constants';

createStore({
  buyflow: {},
});

const App = () => {
  return (
    <StateMachineProvider>
      <Router>
        <div className="App">
          <header className="App-header">
            <Link to={routes.HOME}>
              <img src={logo} className="App-logo" alt="logo" />
            </Link>
          </header>
          <Switch>
            <Route path="/buy/:productId">
              <Buyflow />
            </Route>
            <Route path="/">
              <p>Welcome to Getsafe's Developer Insurance</p>
              <Link to={routes.DEVELOPER_INSURANCE}>Developer Insurance</Link>|
              <Link to={routes.DESIGNER_INSURANCE}>Designer Insurance</Link>
            </Route>
          </Switch>
        </div>
      </Router>
    </StateMachineProvider>
  );
};

export default App;
