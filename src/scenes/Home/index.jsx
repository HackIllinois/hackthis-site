import React from 'react';

import styles from './style.module.scss';
import logo from 'assets/logo.svg';

const Home = () => (
  <main className={styles.home}>
    <nav className={styles.navbar}>
      <img className={styles.logo} src={logo} alt="HackIllinois Logo" />
    </nav>

    <section className={styles.top}>
      <div className={styles.content}>
        <h3 className={styles.presents}>HackIllinois Presents</h3>
        <h1 className={styles.title}>HackThis</h1>
        <h2 className={styles.tagline}>this.hack = education</h2>
        <h4 className={styles.dates}>August 7 - August 15, 2020</h4>
      </div>
    </section>
  </main>
);

export default Home;