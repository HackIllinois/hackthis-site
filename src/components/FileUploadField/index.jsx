import React from 'react';
import { Field } from 'formik';

import { uploadFile } from 'api';
import styles from './style.module.scss';

const FormikFileUpload = ({ field, form, type, accept }) => {
  const onFileUpload = event => {
    const file = event.target.files[0];
    uploadFile(file, type).then(() => {
      form.setFieldValue(field.name, file.name);
    }).catch(() => {
      alert('Failed to upload file.');
    });
  }

  return (
    <div className={styles['file-upload']}>
      <label>
        CHOOSE FILE
        <input
          type="file"
          accept={accept}
          onChange={onFileUpload}
        />
      </label>

      <span className={styles.filename}>{field.value || 'No file chosen'}</span>
    </div>
  )
}

const FileUploadField = ({ name, ...props }) => (
  <Field key={name} name={name} component={FormikFileUpload} {...props} />
);

export default FileUploadField;
