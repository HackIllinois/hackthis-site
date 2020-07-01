import React from 'react';

import styles from './style.module.scss';

const Welcome = ({ Buttons }) => (
  <section className={styles.welcome}>
    <h1>Welcome!</h1>
    <div className={styles.content}>
      <p>
        HackIllinois is extremely excited to present HackThis, a fully virtual hackathon taking place
        between August 7th - August 15th, 2020. The focus of HackThis is to build tools to enhance
        virtual education for students, teachers, and schools.
      </p>
      <p>
        Please fill out the following form to register for HackThis. We will use your email to send
        you additional information about our event in the coming weeks!
      </p>
      <p>
        For more information, or if you have any questions, please visit our website
        <a href="https://hackthis.hackillinois.org/"> (https://hackthis.hackillinois.org/) </a>
        or email us at
        <a href="mailto:contact@hackillinois.org"> contact@hackillinois.org</a>.
      </p>
    </div>

    <Buttons />
  </section>
);

export default Welcome;