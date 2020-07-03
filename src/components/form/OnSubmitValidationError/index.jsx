// Taken from https://github.com/formik/formik/issues/1484#issuecomment-490558973 to workaround limitation of Formik

import React from 'react';
import { connect } from 'formik';

function OnSubmitValidationError(props) {
  const { callback, formik } = props;

  const effect = () => {
    if (formik.submitCount > 0 && !formik.isSubmitting && !formik.isValid) {
      callback(formik);
    }
  };
  React.useEffect(effect, [formik.submitCount, formik.isSubmitting]);

  return null;
}

export default connect(OnSubmitValidationError);