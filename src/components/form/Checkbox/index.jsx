import React from 'react';
import clsx from 'clsx';

import styles from './style.module.scss';

const Checkbox = ({ value, label, checked, className, style, ...props}) => (
  <label className={clsx(styles['checkbox-label'], checked && styles['checked'], className)} style={style}>
    <input
      type="checkbox"
      className={styles.checkbox}
      value={value}
      checked={checked}
      {...props}
    />
    {label}
  </label>
);

export default Checkbox;