import React from 'react';
import { Field } from 'formik';
import clsx from 'clsx';

import styles from './style.module.scss';
import TextInput from '../TextInput';
import FieldErrorMessage from '../FieldErrorMessage';
import Checkbox from '../Checkbox';

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
    let fieldValue = field.value || [];
    if (checked && !fieldValue.includes(selectedValue)) {
      // remove all currently selected checkboxes that act as radio buttons
      // if the selected checkbox is also a radio button, then we want to remove all other options
      const findOptionWithValue = value => {
        return options.find(option => option.value === value)
          || options.find(option => option.isOther) // assuming only one other option
          || {};
      }
      fieldValue = fieldValue.filter(value => {
        if (checkbox.isRadio || findOptionWithValue(value).isRadio){
          return false;
        }
        return true;
      });

      if (checkbox.isOther) { // when the 'other' checkbox is clicked
        form.setFieldValue(field.name, fieldValue.concat(''));
      } else if (isValueOther(selectedValue)) { // when the 'other' field is modified
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
            {options.map(({ value, label, ...checkbox }) => (
              <React.Fragment key={label}>
                <Checkbox
                  value={value}
                  checked={isChecked(value, field, checkbox)}
                  label={label}
                  onChange={e => handleChange(e.target.checked, value, field, form, checkbox)}
                />
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