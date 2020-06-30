import React from 'react';
import { Field } from 'formik';

import TextInput from 'components/TextInput';

const TextField = ({name, ...props}) => (
  <Field name={name} key={name}>
    {({ field }) => (
      <TextInput {...field} {...props} />
    )}
  </Field>
);

export default TextField;