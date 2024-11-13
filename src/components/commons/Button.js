import React from "react";

const Button = ({
  children,
  divClassName = "",
  buttonClassName = "",
  isActive = false,
  onClick,
}) => (
  <div
    className={`border-style-decoration-container group ${
      isActive && "active"
    } ${divClassName}`}
  >
    <button
      onClick={onClick}
      className={`group-hover:bg-primary-gradient w-full flex justify-center items-center bg-white/5 backdrop-blur-sm ${
        isActive && "bg-primary-gradient text-white top-[-2px]"
      } flex items-center p-4 px-6 text-white border-style-decoration after:bottom-[-.5px] right-[-.5px] transition hover:top-[-2px] ${buttonClassName}`}
    >
      {children}
    </button>
  </div>
);

export default Button;
