import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import styles from './style.module.scss';
import logo from 'assets/logo.svg';
import Home from 'scenes/Home';

const App = () => (
  <Router>
    <header className={styles.navbar}>
      <img className={styles.logo} src={logo} alt="HackIllinois Logo" />
      <nav></nav>
    </header>

    <Switch>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;