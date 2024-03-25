import React from "react";
import Select from "react-select";
import { customStyles } from "@/utils/customStyles";


const ThemeDropdown = ({ handleThemeChange }) => {

  const themes = [
    {label: 'Dark', value: 'dark'},
    {label: 'Light', value: 'light'},
  ];

  return (
    <Select
      options={themes}
      styles={customStyles}
      defaultValue={themes[0]}
      onChange={handleThemeChange}
    />
  );
};

export default ThemeDropdown;
