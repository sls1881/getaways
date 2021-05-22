import React from 'react';
import Getaways from '../../containers/Getaways';
import Details from '../../containers/Details';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Getaways} />
          <Route exact path="/:id" component={Details} />
        </Switch>
      </Router>
    </div>
  );
}
