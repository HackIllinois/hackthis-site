import React from 'react';

import styles from './style.module.scss';
import hackthisLogo from 'assets/registration/hackthis_logo.svg';

const Finish = () => (
  <section className={styles.finish}>
    <img src={hackthisLogo} alt="HackThis"/>
    <p>
      Thank you for registering for HackThis 2020! Be sure to follow our
      <a href="https://www.instagram.com/hackillinois/"> instagram (@hackillinois) </a>
      and our
      <a href="https://twitter.com/hackillinois"> twitter (@hackillinois)</a>.
      We will be posting live updates during the event that you won’t want to miss! 
    </p>
  </section>
);

export default Finish;