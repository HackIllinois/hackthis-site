import React from 'react';

import styles from './style.module.scss';
import logo from 'assets/logo.svg';
import logoWhite from 'assets/logo_white.svg';

const NavBar = () => (
  <header className={styles.navbar}>
    <img className={styles.logo} src={logo} alt="HackIllinois Logo" />
    <img className={styles.logoMobile} src={logoWhite} alt="HackIllinois Logo" />
    <nav></nav>
  </header>
);

export default NavBar;