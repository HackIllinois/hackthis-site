import React from 'react';

import styles from './style.module.scss';
import logo from 'assets/logo.svg';
import logoLight from 'assets/logo_light.svg';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

const NavBar = ({ dark, light, className, style }) => (
  <header className={clsx(styles.navbar, className)} style={style}>
    <Link to="/">
      <img className={styles.logo} src={light ? logoLight : logo} alt="HackIllinois Logo" />
      <img className={styles.logoMobile} src={dark ? logo : logoLight} alt="HackIllinois Logo" />
    </Link>
    <nav></nav>
  </header>
);

export default NavBar;