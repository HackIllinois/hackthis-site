import React from 'react';

import styles from './style.module.scss';
import logo from 'assets/logo.svg';
import logoLight from 'assets/logo_light.svg';

const NavBar = () => (
  <header className={styles.navbar}>
    <img className={styles.logo} src={logo} alt="HackIllinois Logo" />
    <img className={styles.logoMobile} src={logoLight} alt="HackIllinois Logo" />
    <nav></nav>
  </header>
);

export default NavBar;