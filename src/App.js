import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import orders from './components/Orders';
import Header from './components/Header';
import Signin from './components/Signin';

function App() {
  return (
    <Router>
        <div className="App">
          <Switch>
            {/* A user can't go to the HomePage if is not authenticated */}
            <Route path="/" component={Signin} exact />
            <Route path="/orders" component={orders}  />
            <Route path="/header" component={Header}  />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
