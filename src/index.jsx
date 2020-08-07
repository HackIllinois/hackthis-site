import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, useLocation, Redirect } from 'react-router-dom';
import ReactGA from 'react-ga';

import './index.css';
import StaticFileRedirect from 'components/StaticFileRedirect';
import Home from 'scenes/Home';
import Registration from 'scenes/Registration';
import AuthenticatedRoute from 'components/AuthenticatedRoute';
import Auth from 'scenes/Auth';
import MentorAvailability from 'scenes/MentorAvailability';
import Mentors from 'scenes/Mentors';
import Schedule from 'scenes/Schedule';
import Prizes from 'scenes/Prizes';

ReactGA.initialize('UA-169912882-1', {
  testMode: process.env.NODE_ENV !== 'production'
});

// Note: Moved <Router> from App to ReactDOM.render due to https://github.com/ReactTraining/react-router/issues/7015#issuecomment-548420654
const App = () => {
  const location = useLocation();
  useEffect(() => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  }, [location]);

  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/auth" exact>
        <Auth />
      </Route>

      <AuthenticatedRoute path="/register" exact>
        <Registration />
      </AuthenticatedRoute>

      <Route path="/mentor-availability">
        <MentorAvailability />
      </Route>

      <Route path="/mentors" exact>
        <Mentors />
      </Route>

      <Route path="/schedule" exact>
        <Schedule />
      </Route>

      <Route path="/prizes" exact>
        <Prizes />
      </Route>

      <Route path="/sponsor" exact>
        <StaticFileRedirect to="/documents/sponsorship.pdf" />
      </Route>

      <Route path="/speaker" exact>
        <StaticFileRedirect to="/documents/speaker.pdf" />
      </Route>

      <Route path="/mentor" exact>
        <StaticFileRedirect to="/documents/mentorship.pdf" />
      </Route>

      <Route path="/diversity">
        <StaticFileRedirect to="/documents/diversity.pdf" />
      </Route>

      <Route path="/terms-of-service">
        <StaticFileRedirect to="/documents/terms-of-service.pdf" />
      </Route>

      <Route path="/discord-terms-of-service">
        <StaticFileRedirect to="/documents/discord-terms-of-service.pdf" />
      </Route>

      <Route path="/">
        <Redirect to="/" />
      </Route>      
    </Switch>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
