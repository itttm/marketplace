import React from "react";

const TextInput = ({
  divClassName = "",
  inputClassName = "",
  startIcon,
  endIcon,
  ...props
}) => (
  <div
    className={`border-style-decoration w-full flex items-center ${divClassName}`}
  >
    {startIcon && <button className="ml-6">{startIcon}</button>}
    <input
      className={`!bg-transparent text-white p-4 px-6 w-full placeholder:text-white ${inputClassName}`}
      {...props}
    />
    {endIcon && <button className="mr-6">{endIcon}</button>}
  </div>
);

export default TextInput;
