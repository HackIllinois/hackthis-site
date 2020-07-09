import React from 'react';

import styles from './style.module.scss';

const TextInput = props => (
  <input className={styles['text-input']} type="text" maxLength={150} {...props} />
);

export default TextInput;