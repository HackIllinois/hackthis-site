import React from 'react';

import styles from './style.module.scss'
import NavBar from 'components/NavBar';

const Message = ({ children, className, style }) => (
  <div className={styles.message}>
    <NavBar dark blueLink />
    <span className={className} style={style}>{children}</span>
  </div>
);

export default Message;