import React from 'react';
import { ErrorMessage } from 'formik';

import styles from './style.module.scss';

const FieldErrorMessage = props => (
  <ErrorMessage className={styles['field-error-message']} component="div" {...props}/>
);

export default FieldErrorMessage;