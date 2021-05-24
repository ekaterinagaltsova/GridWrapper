import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';

import MainPage from './pages/MainPage';
import TablePage from './pages/TablePage';
import MyContext from './context';

function App() {
  return (
    <div className="App-header">
      <MyContext.Provider>
        <Router>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/table" component={TablePage} />
          </Switch>
        </Router>
      </MyContext.Provider>
    </div>
  );
}

export default App;
