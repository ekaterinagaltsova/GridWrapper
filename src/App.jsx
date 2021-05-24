import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';

import MainPage from './pages/MainPage';
import TablePage from './pages/TablePage';

function App() {
  return (
    <div className="App-header">
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/table" component={TablePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
