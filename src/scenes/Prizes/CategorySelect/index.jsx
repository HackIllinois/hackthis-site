import React from 'react';
import Select from 'react-select';

const CategorySelect = ({ color, textColor = 'black', isDisabled, ...props }) => {
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
      color: textColor,
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
      visibility: isDisabled ? 'hidden' : 'visible',
    }),
    menu: base => ({
      ...base,
      marginTop: 0,
      borderRadius: 0,
      boxShadow: 'none',
    }),
    menuList: base => ({
      ...base,
      paddingTop: 0,
      paddingBottom: 10,
      backgroundColor: color,
    }),
    option: base => ({
      ...base,
      background: color,
      // borderTop: '#CF3E7F solid 1.5px',
      fontSize: '1em',
      fontWeight: 600,
      paddingLeft: 28,
      height: 40,
      color: textColor,
      display: 'flex',
      alignItems: 'center',
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
      isDisabled={isDisabled}
      {...props}
    />
  )
};

export default CategorySelect;
