import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from 'scenes/Home';
import StaticFileRedirect from 'components/StaticFileRedirect';

const App = () => (
  <Router>
    <Switch>
      <Route path="/sponsor">
        <StaticFileRedirect to="/documents/sponsorship.pdf" />
      </Route>

      <Route path="/speaker">
        <StaticFileRedirect to="/documents/speaker.pdf" />
      </Route>

      <Route path="/mentor">
        <StaticFileRedirect to="/documents/mentorship.pdf" />
      </Route>

      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;