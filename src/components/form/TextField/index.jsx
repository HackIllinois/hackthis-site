import React from 'react';
import { Field } from 'formik';

import TextInput from '../TextInput';
import FieldErrorMessage from '../FieldErrorMessage';

const TextField = ({name, hideErrors, ...props}) => (
  <>
    <Field name={name}>
      {({ field }) => (
        <TextInput {...field} {...props} />
      )}
    </Field>
    { !hideErrors && <FieldErrorMessage name={name} /> }
  </>
);

export default TextField;