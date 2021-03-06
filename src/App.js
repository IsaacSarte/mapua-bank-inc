import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

// Pages
import Home from './pages/Home/Home.js';
import Admin from './pages/Admin/Admin.js';
import Client from './pages/Client/Client.js'; 

import Create from './pages/Admin/Create.js';
import Transaction from './pages/Admin/Transaction.js';
import Members from './pages/Admin/Members.js';
import History from './pages/Admin/History.js';

// CSS
import './App.css';

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
              <Create/>
            </Route>

            <Route path="/admin-transaction">
              <Transaction/>
            </Route>

            <Route path="/admin-members">
              <Members/>
            </Route>

            <Route path="/admin-history">
              <History/>
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