import React, { useState } from "react";

const CardFaq = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={`border-style-decoration backdrop-blur-sm justify-between flex ${
        isOpen
          ? "items-start p-5 lg:p-10 bg-white/5"
          : "items-center p-5 lg:px-10"
      } gap-12`}
    >
      <div>
        <h4 className="text-base lg:text-xl text-white">{title}</h4>

        {isOpen && (
          <p className="text-white/60 leading-[1.4] mt-4 text-xs lg:text-base">
            {content}
          </p>
        )}
      </div>

      <div className={`${isOpen ? "lg:-mt-5 lg:-mr-5" : ""}`}>
        <button
          onClick={toggleFAQ}
          className={`border-style-decoration w-[42px] h-[42px] lg:w-[54px] lg:h-[54px] flex justify-center items-center ${
            isOpen ? "bg-primary-gradient" : ""
          }`}
        >
          <img
            src={
              isOpen
                ? "/assets/icons/icon-remove.svg"
                : "/assets/icons/icon-add-bold.svg"
            }
            className="max-w-[20px] lg:max-w-[unset]"
            alt={isOpen ? "Remove Icon" : "Add Icon"}
          />
        </button>
      </div>
    </div>
  );
};

export default CardFaq;
