import React from 'react';

import styles from './style.module.scss'
import NavBar from 'components/NavBar';

const Message = ({ text, className, style }) => (
  <div className={styles.message}>
    <NavBar singleLogo />
    <span className={className} style={style}>{text}</span>
  </div>
);

export default Message;