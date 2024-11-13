import React from "react";

const Dropdown = ({
  options = [],
  placeholder = "Select an option",
  className = "",
  onChange,
  value,
}) => {
  return (
    <div
      className={`border-style-decoration w-full flex items-center appearance-none ${className}`}
    >
      <select
        className={`!bg-transparent text-white p-4 px-6 w-full appearance-none placeholder:text-white focus:outline-none cursor-pointer`}
        onChange={onChange}
        value={value}
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value} className="bg-[#141414]">
            {option.label}
          </option>
        ))}
      </select>
      <span className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[20px] h-[20px] text-white"
        >
          <mask
            id="mask0_672_18359"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <rect width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_672_18359)">
            <path d="M12 15L7 10H17L12 15Z" fill="white" />
          </g>
        </svg>
      </span>
    </div>
  );
};

export default Dropdown;
