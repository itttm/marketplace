import React, { useState } from "react";
import TextInput from "../../components/commons/TextInput";
import Button from "../../components/commons/Button";

const PaymentSetting = () => {
  const [activeOption, setActiveOption] = useState("Credit Card");

  const options = [
    {
      id: "Credit Card",
      icon: "/assets/icons/icon-credit-card-2.svg",
      label: "Credit Card",
    },
    { id: "Paypal", icon: "/assets/logos/paypal.svg", label: "Paypal" },
    { id: "Stax", icon: "/assets/logos/stax.svg", label: "Stax" },
  ];

  return (
    <div className="mt-12 lg:mt-24">
      <div className="flex items-center gap-6 justify-center">
        {options.map((option) => (
          <div
            key={option.id}
            onClick={() => setActiveOption(option.id)}
            className={`border-style-decoration p-5 w-full max-w-[200px] h-[120px] flex flex-col items-center justify-center cursor-pointer ${
              option.id === "Stax" && "hidden lg:flex"
            }
            ${
              activeOption === option.id
                ? "bg-white/5 backdrop-blur-sm !border-primary after:!border-l-primary after:!border-t-primary before:!border-r-primary before:!border-b-primary"
                : "bg-transparent border-white/20"
            }`}
          >
            <img
              src={option.icon}
              className={`max-w-${option.id === "Stax" ? "[52px]" : "[28px]"}`}
              alt={`${option.label} Icon`}
            />
            <span className="text-base text-white mt-1">{option.label}</span>
          </div>
        ))}
      </div>

      <div className="mt-10 lg:mt-20">
        <div className="flex flex-col lg:flex-row gap-5 w-full mt-5 lg:mt-8">
          <label className="w-full  text-white">
            <span className="text-base lg:text-xl mb-3 block">Card Number</span>
            <TextInput
              placeholder="0000 0000 0000 0000"
              inputClassName="placeholder:text-white/60"
              endIcon={<img src="/assets/logos/visa.svg" />}
            />
          </label>
          <label className="w-full text-white">
            <span className="text-base lg:text-xl mb-3 block">
              Expiration Date
            </span>
            <TextInput
              placeholder="00 / 00 / 0000"
              inputClassName="placeholder:text-white/60"
              endIcon={<img src="/assets/icons/icon-date.svg" />}
            />
          </label>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 w-full mt-5 lg:mt-8">
          <label className="w-full  text-white">
            <span className="text-base lg:text-xl mb-3 block">
              Card Holder Name
            </span>
            <TextInput
              placeholder="Enter Name"
              inputClassName="placeholder:text-white/60"
            />
          </label>
          <label className="w-full text-white">
            <span className="text-base lg:text-xl mb-3 block">
              Expiration Date
            </span>
            <TextInput
              placeholder="Enter CVV"
              inputClassName="placeholder:text-white/60"
              endIcon={<img src="/assets/icons/icon-credit-card-2.svg" />}
            />
          </label>
        </div>

        <div className="flex flex-col  md:flex-row justify-end  items-center gap-5 mt-12">
          <button className="hover:bg-primary relative w-full hover:text-white !border-primary after:!border-t-primary after:!border-l-primary before:!border-b-primary before:!border-r-primary justify-center text-sm lg:text-base flex items-center p-4 px-6 text-white border-style-decoration after:bottom-[-.5px] right-[-.5px] whitespace-nowrap md:max-w-[300px]">
            View order summary
          </button>
          <Button isActive divClassName="w-full md:max-w-[300px]">
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSetting;
