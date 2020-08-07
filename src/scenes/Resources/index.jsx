import React from 'react';

import styles from './style.module.scss';
import topLeft from 'assets/resources/top_left.svg';
import bottomLeft from 'assets/resources/bottom_left.svg';
import side from 'assets/resources/side.svg';
import clsx from 'clsx';

const Resources = () => (
  <div className={styles.resources}>
    <img className={clsx(styles.decoration, styles['top-left'])} src={topLeft} alt="" />
    <img className={clsx(styles.decoration, styles['bottom-left'])} src={bottomLeft} alt="" />
    <img className={clsx(styles.decoration, styles['side'])} src={side} alt="" />
  </div>
)