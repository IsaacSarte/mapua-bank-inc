import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

// CSS
import './App.css';

// Pages
import Home from './pages/Home/Home.js';

const App = () => {
  return (
    <Router>
      <main className="main">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;