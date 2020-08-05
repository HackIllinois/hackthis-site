import React from 'react';

import styles from './style.module.scss'
import NavBar from 'components/NavBar';

const Loading = () => (
  <div className={styles.loading}>
    <NavBar dark blueLink />
    Loading...
  </div>
);

export default Loading;