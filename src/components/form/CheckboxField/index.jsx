import React from 'react';
import { Field } from 'formik';
import clsx from 'clsx';

import styles from './style.module.scss';
import TextInput from '../TextInput';
import FieldErrorMessage from '../FieldErrorMessage';

const CheckboxField = ({ name, options = [], hideErrors, className, style, ...props }) => {
  const isValueOther = value => options.every(option => option.value !== value);

  const getOtherValue = field => {
    const fieldValue = field.value || [];
    return fieldValue.find(value => isValueOther(value));
  }

  // remove all values that aren't in options
  const removeOther = fieldValue => {
    return fieldValue.filter(value => !isValueOther(value));
  }

  const isChecked = (checkboxValue, field, checkbox) => (
    (field.value || []).includes(checkboxValue)
    || (checkbox.isOther && getOtherValue(field) !== undefined)
  );

  const handleChange = (checked, selectedValue, field, form, checkbox = {}) => {
    const fieldValue = field.value || [];
    if (checked && !fieldValue.includes(selectedValue)) {
      if (checkbox.isOther) {
        form.setFieldValue(field.name, fieldValue.concat(''));
      } else if (isValueOther(selectedValue)) {
        form.setFieldValue(field.name, removeOther(fieldValue).concat(selectedValue));
      } else {
        form.setFieldValue(field.name, fieldValue.concat(selectedValue));
      }
    } 
    
    if (!checked) {
      if (checkbox.isOther) {
        form.setFieldValue(field.name, removeOther(fieldValue));
      } else {
        // filter out the selected option
        form.setFieldValue(field.name, fieldValue.filter(value => value !== selectedValue));
      }
    }
  }

  return (
    <>
      <Field name={name} {...props}>
        {({ field, form }) => (
          <div className={clsx(styles['checkbox-field'], className)} style={style}>
            {options.map(({ label, value, ...checkbox }) => (
              <React.Fragment key={label}>
                <label className={clsx(styles['checkbox-label'], isChecked(value, field, checkbox) && styles['checked'])}>
                  <input
                    type="checkbox"
                    className={styles.checkbox}
                    value={value}
                    checked={isChecked(value, field, checkbox)}
                    onChange={e => handleChange(e.target.checked, value, field, form, checkbox)}
                  />
                  {label}
                </label>
                {checkbox.isOther && isChecked(value, field, checkbox) && (
                  <TextInput
                    placeholder="Insert Race Here"
                    value={getOtherValue(field)}
                    onChange={e => handleChange(true, e.target.value, field, form)}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </Field>

      {!hideErrors && <FieldErrorMessage name={name} />}
    </>
  )
}

export default CheckboxField;