import React from 'react';
import { Field } from 'formik';
import clsx from 'clsx';

import styles from './style.module.scss';
import TextInput from 'components/TextInput';

const CheckboxField = ({ name, options = [] }) => {
  const findOption = (value, fromOptions) => (fromOptions || []).find(option => option.value === value);
  const isChecked = (checkboxValue, field, checkbox) => (
    !!findOption(checkboxValue, field.value)
    || (checkbox.isOther && getOtherValue(field) !== undefined)
  );

  const handleChange = (checked, selectedOption, field, form, checkbox = {}) => {
    const fieldValue = field.value || [];
    if (checked && !findOption(selectedOption.value, fieldValue)) {
      if (checkbox.isOther) {
        form.setFieldValue(field.name, fieldValue.concat({ value: '' }));
      } else if (isValueOther(selectedOption.value)) {
        form.setFieldValue(field.name, removeOther(fieldValue).concat(selectedOption));
      } else {
        form.setFieldValue(field.name, fieldValue.concat(selectedOption));
      }
    } 
    
    if (!checked) {
      if (checkbox.isOther) {
        form.setFieldValue(field.name, removeOther(fieldValue));
      } else {
        // filter out the selected option
        form.setFieldValue(field.name, fieldValue.filter(option => option.value !== selectedOption.value));
      }
    }
  }

  const isValueOther = value => options.every(option => option.value !== value);

  const getOtherValue = field => {
    const fieldValue = field.value || [];
    const other = fieldValue.find(option => isValueOther(option.value));
    return (other || {}).value;
  }

  // remove all values that aren't in options
  const removeOther = fieldValue => {
    return fieldValue.filter(option => !!findOption(option.value, options));
  }

  return (
    <Field name={name} key={name}>
      {({ field, form }) => (
        <div className={styles['checkbox-field']}>
          {options.map(({ label, value, ...checkbox }) => (
            <>
              <label className={clsx(styles['checkbox-label'], isChecked(value, field, checkbox) && styles['checked'])}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  value={value}
                  checked={isChecked(value, field, checkbox)}
                  onChange={e => handleChange(e.target.checked, { label, value }, field, form, checkbox)}
                />
                {label}
              </label>
              {checkbox.isOther && isChecked(value, field, checkbox) && (
                <TextInput
                  placeholder="Insert Race Here"
                  value={getOtherValue(field)}
                  onChange={e => handleChange(true, { value: e.target.value }, field, form)}
                />
              )}
            </>
          ))}
        </div>
      )}
    </Field>
  )
}

export default CheckboxField;