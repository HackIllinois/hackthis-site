import React from 'react';

import styles from './style.module.scss'
import NavBar from 'components/NavBar';

const Loading = () => (
  <div className={styles.loading}>
    <NavBar singleLogo />
    Loading...
  </div>
);

export default Loading;