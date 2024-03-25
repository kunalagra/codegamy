import React from "react";
import Select from "react-select";
import { customStyles } from "@/utils/customStyles";

const FontSizeDropdown = ({ onSelectChange }) => {

  const fonts = [
    {label: '10', value: '10px'},
    {label: '12', value: '12px'},
    {label: '14', value: '14px'},
    {label: '16', value: '16px'},
    {label: '18', value: '18px'},
    {label: '20', value: '20px'},
  ];
  
  return (
    <Select
      options={fonts}
      styles={customStyles}
      defaultValue={fonts[2]}
      onChange={(selectedOption) => onSelectChange(selectedOption)}
    />
  );
};

export default FontSizeDropdown;
