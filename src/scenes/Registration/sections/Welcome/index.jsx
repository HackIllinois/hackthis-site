import React from 'react';

import styles from './style.module.scss';
import clsx from 'clsx';

const Welcome = ({ Buttons }) => (
  <section className={styles.welcome}>
    <h1 className={styles.title}>Welcome!</h1>
    <div className={styles.content}>
      <p className={styles.text}>
        HackIllinois is extremely excited to present HackThis, a fully virtual hackathon taking place
        between August 7th - August 15th, 2020. The focus of HackThis is to build tools to enhance
        virtual education for students, teachers, and schools.
      </p>
      <p className={styles.text}>
        Please fill out the following form to register for HackThis. We will use your email to send
        you additional information about our event in the coming weeks!
      </p>
      <p className={styles.text}>
        For more information, or if you have any questions, please visit our website
        <a href="https://hackthis.hackillinois.org/"> (https://hackthis.hackillinois.org/) </a>
        or email us at
        <a href="mailto:contact@hackillinois.org"> contact@hackillinois.org</a>.
      </p>
      <p className={clsx(styles.text, styles.note)}>Note: Registration uses your GitHub account for authentication</p>
    </div>

    <Buttons className={styles.buttons} />
  </section>
);

export default Welcome;