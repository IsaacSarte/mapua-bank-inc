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
import Admin from './pages/Admin/Admin.js';
import Client from './pages/Client/Client';

const App = () => {
  return (
    <Router>
      <main className="main">
        <Switch>
          <Route exact path="/" component={Home} />

          {/* Admin Routings */}

          <Route path="/admin">
            <Admin />
          </Route>

            <Route path="/admin-create">

            </Route>

            <Route path="/admin-transaction">

            </Route>

            <Route path="/admin-members">

            </Route>

            <Route path="/admin-history">

            </Route>

          {/* Client/Account Holder Routings */}
          <Route path="/client">
            <Client />
          </Route>

        </Switch>
      </main>
    </Router>
  );
}

export default App;