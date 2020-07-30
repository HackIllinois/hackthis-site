import React from 'react';
import Select from 'react-select';

const customStyles = {
  control: base => ({
    ...base,
    background: '#E8AECC',
    border: 'none',
    borderTop: '#46959F solid 8px',
    borderRadius: 0,
    outline: 'none',
    boxShadow: 'none',
    fontSize: '.9em',
    '&:hover': {},
  }),
  singleValue: base => ({
    ...base,
    color: 'black',
    fontWeight: 500,
    width: '100%',
    textAlign: 'center',
  }),
  indicatorSeparator: () => ({
    visible: false,
  }),
  dropdownIndicator: base => ({
    ...base,
    color: 'white',
    cursor: 'pointer',
  }),
  menu: base => ({
    ...base,
    marginTop: 0,
    borderRadius: 0,
    boxShadow: 'none',
  }),
  menuList: base => ({
    ...base,
    padding: 0,
  }),
  option: base => ({
    ...base,
    background: '#E8AECC',
    borderTop: '#CF3E7F solid 1.5px',
    textAlign: 'center',
    fontSize: '.9em',
    fontWeight: 500,
    '&:active': {
      backgroundColor: '#E8AECC',
    },
  })
}

const MentorSelect = props => {
  return (
    <Select
      styles={customStyles}
      hideSelectedOptions={true}
      isSearchable={false}
      {...props}
    />
  )
};

export default MentorSelect;
