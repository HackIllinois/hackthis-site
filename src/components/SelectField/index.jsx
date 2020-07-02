import React from 'react';
import { Field } from 'formik';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';

import styles from './style.module.scss';

const customStyles = {
  control: () => ({
    background: 'transparent',
    borderBottom: '1px solid #B8B8B8',
    display: 'flex',
  }),
  valueContainer: base => ({
    ...base,
    paddingLeft: 0
  }),
  placeholder: base => ({
    ...base,
    color: '#525051',
    fontWeight: 500,
  }),
  input: base => ({
    ...base,
    fontWeight: 500,
  }),
  singleValue: base => ({
    ...base,
    color: 'black',
    fontWeight: 500,
    fontSize: '1.25em'
  }),
  multiValue: base => ({
    ...base,
    backgroundColor: '#3C519C',
    borderRadius: 100,
    padding: '0 2px',
  }),
  multiValueLabel: base => ({
    ...base,
    color: 'white',
  }),
  multiValueRemove: base => ({
    ...base,
    color: 'white',
    cursor: 'pointer',
    '&:hover': {
      color: 'white',
      backgroundColor: 'transparent',
    },
  }),
  clearIndicator: () => ({
    color: '#3C519C',
    cursor: 'pointer',
  }),
  indicatorSeparator: () => ({
    visible: false,
  }),
  dropdownIndicator: () => ({
    color: '#3C519C',
    cursor: 'pointer',
  }),
  menu: base => ({
    ...base,
    background: '#E8AECC',
    borderRadius: 20,
    padding: '0 15px',
  }),
  menuList: base => ({
    ...base,
    padding: '16px 0',
    scrollbarColor: '#CF3E7F transparent',
    scrollbarWidth: 'thin',
    '&::-webkit-scrollbar': {
      '-webkit-appearance': 'none',
    },
    '&::-webkit-scrollbar:vertical': {
      width: 5,
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: 10,
      border: '3px solid #CF3E7F',
    },
  }),
  option: (base, state) => ({
    border: (state.isSelected || state.isFocused) ? 'none' : '1px solid #514F51',
    borderRadius: 10,
    cursor: 'pointer',
    padding: (state.isSelected || state.isFocused) ? '9px 13px' : '8px 12px',
    margin: '5px',
    backgroundColor: (state.isSelected || state.isFocused) ? '#CF3E7F' : '#E8AECC',
    color: (state.isSelected || state.isFocused) ? 'white' : 'black',
  }),
};

const FormikSelect = ({ field, form, isMulti, options, creatable, ...props }) => {
  const getValue = () => {
    if (isMulti) {
      if (field.value === undefined || field.value === null) {
        return [];
      }
      return options.filter(option => field.value.includes(option.value));
    }

    if (field.value === undefined || field.value === null) {
      return '';
    }
    return options.find(option => field.value === option.value);
  }

  const handleChange = selected => {
    if (isMulti) {
      const values = selected ? selected.map(opt => opt.value) : [];
      form.setFieldValue(field.name, values);
    } else {
      const value = selected ? selected.value : '';
      form.setFieldValue(field.name, value);
    }
  }

  const SelectComponent = creatable ? CreatableSelect : Select;

  return (
    <SelectComponent
      name={field.name}
      value={getValue()}
      onChange={handleChange}
      options={options}
      isMulti={isMulti}
      blurInputOnSelect={false}
      closeMenuOnSelect={!isMulti}
      menuPlacement="auto"
      isClearable
      {...props}
    />
  );
}

const SelectField = ({ name, ...props }) => (
  <Field
    key={name}
    name={name}
    className={styles['select-field']}
    styles={customStyles}
    component={FormikSelect}
    {...props}
  />
);

export default SelectField;