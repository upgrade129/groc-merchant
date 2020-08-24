import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import orders from './components/Orders';
import Header from './components/Header';
import Signin from './components/Signin';
import Header_acc from './components/Header_acc';
import Header_rej from './components/Header_rej';


function App() {
  return (
    <Router>
        <div className="App">
          <Switch>
            {/* A user can't go to the HomePage if is not authenticated */}
            <Route path="/" component={Signin} exact />
            <Route path="/orders" component={orders}  />
            <Route path="/header" component={Header}  />
            <Route path="/header_acc" component={Header_acc} />
            <Route path="/header_rej" component={Header_rej} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
