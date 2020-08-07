import React from 'react';
import Select from 'react-select';

const CategorySelect = ({ color, ...props }) => {
  const customStyles = {
    control: base => ({
      ...base,
      background: color,
      border: 'none',
      borderTop: '#F9C669 solid 8px',
      borderRadius: 0,
      outline: 'none',
      boxShadow: 'none',
      fontSize: '1em',
      '&:hover': {},
      height: 60,
    }),
    singleValue: base => ({
      ...base,
      color: 'black',
      fontWeight: 600,
      width: '100%',
      marginLeft: 20,
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
      background: color,
      // borderTop: '#CF3E7F solid 1.5px',
      fontSize: '1em',
      fontWeight: 600,
      paddingLeft: 28,
      height: 50,
      '&:active': {
        backgroundColor: color,
      },
    })
  }

  return (
    <Select
      styles={customStyles}
      hideSelectedOptions={true}
      isSearchable={false}
      {...props}
    />
  )
};

export default CategorySelect;
