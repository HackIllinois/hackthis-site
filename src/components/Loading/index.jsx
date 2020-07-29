import React from 'react';

import styles from './style.module.scss'
import NavBar from 'components/NavBar';

const Loading = () => (
  <div className={styles.loading}>
    <NavBar dark />
    Loading...
  </div>
);

export default Loading;