import React from 'react';

import styles from './style.module.scss';
import logo from 'assets/logo.svg';
import logoLight from 'assets/logo_light.svg';
import { Link } from 'react-router-dom';

const NavBar = ({ singleLogo }) => (
  <header className={styles.navbar}>
    <Link to="/">
      <img className={styles.logo} src={logo} alt="HackIllinois Logo" />
      <img className={styles.logoMobile} src={singleLogo ? logo : logoLight} alt="HackIllinois Logo" />
    </Link>
    <nav></nav>
  </header>
);

export default NavBar;