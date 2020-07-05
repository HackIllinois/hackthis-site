import React, { useState } from 'react';
import { Field } from 'formik';

import { uploadFile } from 'api';
import styles from './style.module.scss';
import clsx from 'clsx';

const FormikFileUpload = ({ field, form, type, accept, text, className, ...props }) => {
  const [isUploading, setIsUploading] = useState(false);

  const onFileUpload = event => {
    setIsUploading(true);
    const file = event.target.files[0];
    uploadFile(file, type).then(() => {
      form.setFieldValue(field.name, file.name);
    }).catch(() => {
      alert('Failed to upload file.');
    }).finally(() => {
      setIsUploading(false);
    })
  }

  return (
    <div className={clsx(styles['file-upload'], className)} {...props}>
      {text && <p>{text}</p>}

      <label>
        { isUploading ? 'UPLOADING...' : 'CHOOSE FILE' }
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
  <Field name={name} component={FormikFileUpload} {...props} />
);

export default FileUploadField;
