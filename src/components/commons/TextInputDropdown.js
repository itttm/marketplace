import React from "react";
import Dropdown from "./Dropdown"; // Make sure to import your custom Dropdown component

const TextInputDropdown = ({
  containerClassName = "",
  dropdownClassName = "",
  separatorClassName = "",
  inputClassName = "",
  dropdownOptions = [],
  dropdownPlaceholder = "USD ($)",
  inputPlaceholder = "Enter price of the product",
  onDropdownChange,
  onInputChange,
  inputValue = "",
}) => (
  <div
    className={`border-style-decoration w-full flex items-center ${containerClassName}`}
  >
    <Dropdown
      options={dropdownOptions}
      placeholder={dropdownPlaceholder}
      onChange={onDropdownChange}
      className={`w-full max-w-[130px] !border-none ${dropdownClassName}`}
    />
    <div className={`h-[30px] w-[1px] bg-white/20 ${separatorClassName}`} />
    <input
      placeholder={inputPlaceholder}
      className={`!bg-transparent text-white p-1 px-6 w-full placeholder:text-white ${inputClassName}`}
      value={inputValue}
      onChange={onInputChange}
    />
  </div>
);

export default TextInputDropdown;
