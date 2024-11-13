import React from "react";
import TextInput from "../../components/commons/TextInput";
import Button from "../../components/commons/Button";
import Dropdown from "../../components/commons/Dropdown";

const HeroSection = () => {
  const options = [
    { value: "", label: "Filter By" },
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const handleDropdownChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className="py-24 lg:py-48 lg:pb-24">
      <div className="container px-5 lg:px-20 mx-auto relative after:content-[''] after:w-[360px] after:left-[100%] after:h-[360px] after:bottom-[90%] after:blur-[200px] after:bg-primary after:rounded-full after:absolute after:z-[1]">
        <img
          src="/assets/decorations/marketplace_decoration_1.png"
          className="max-w-[180px] lg:hidden lg:max-w-[unset] absolute left-[-1.5rem] top-[25%] translate-y-[-50%] z-[1] drop-shadow-[0px_4px_40px_#fff5]"
        />
        <img
          src="/assets/decorations/marketplace_decoration_3.png"
          // className="hidden lg:block absolute right-[-3rem] top-[50%] translate-y-[-60%] z-[2] drop-shadow-[0px_4px_40px_#fff5] pointer-events-none"
          className="block absolute max-w-[140px] lg:max-w-[160px] right-[0] top-[25%] translate-y-[-50%] lg:top-[50%] lg:translate-y-[-60%] z-[2] drop-shadow-[0px_4px_40px_#fff5] pointer-events-none"
        />
        <div className="text-white product-ask-section bg-white/5 backdrop-blur-md flex flex-col-reverse lg:flex-row">
          <div className="flex flex-col w-full p-5 py-10 lg:p-20">
            <h2 className="uppercase font-aero text-left text-[32px] lg:text-[48px]  leading-[1.1]">
              Buy, Sell, and
              <span className="gradient-text font-aero">
                <br />
                Trade with Ease
              </span>
            </h2>
            <p className="w-full text-xs lg:text-base text-center mt-5 lg:text-left max-w-[370px] opacity-60 font-light">
              From rare finds to the latest releases, we provide a space where
              enthusiasts can buy, sell, and exchange cards with confidence.
            </p>
            <div className="mt-6 flex flex-col lg:flex-row items-center gap-4 w-full  ">
              {/* <img
            src="/assets/decorations/homepage_decoration_9.png"
            className="absolute top-[-2rem] pointer-events-none w-[700px]"
          /> */}
              {/* <div className="absolute pointer-events-none w-[360px] h-[360px] bg-primary blur-[300px] rounded-full left-[50%] translate-x-[-50%] bottom-[100%]" /> */}
              <Dropdown
                options={options}
                placeholder="Filter by"
                onChange={handleDropdownChange}
                className="w-full lg:max-w-[150px]"
              />
              <div className="flex items-center w-full space-x-4">
                <TextInput placeholder="Search for cards" />
                <Button isActive>Explore</Button>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="h-[420px] lg:h-[unset] w-full lg:max-w-[480px] relative pointer-events-none z-[2] overflow-hidden lg:overflow-visible">
            <img
              src="/assets/decorations/marketplace_decoration_1.png"
              className="hidden lg:block lg:max-w-[270px] absolute left-[-1.5rem] bottom-[50%] translate-y-[50%] z-[1] drop-shadow-[0px_4px_40px_#fff5]"
            />
            <img
              src="/assets/decorations/marketplace_decoration_2.png"
              // className="block max-w-[190px] bottom-[-4.5rem] lg:max-w-[unset] absolute right-[1.5rem] lg:bottom-[-6.5rem] z-[1] drop-shadow-[0px_4px_40px_#fff5]"
              className="block max-w-[190px] bottom-[-4.5rem] lg:max-w-[250px] absolute right-[7.5%] lg:right-[1.5rem] lg:translate-x-0 translate-x-[-7.5%] lg:bottom-[-6.5rem] z-[1] drop-shadow-[0px_4px_40px_#fff5]"
            />

            <img
              src="/assets/decorations/marketplace_decoration_4.png"
              className="max-w-[130px] lg:max-w-[150px] block absolute top-[-2.5rem] lg:top-[-3.5rem] right-[3.5rem] lg:right-[3.75rem] z-[1] drop-shadow-[0px_4px_40px_#fff5]"
            />
            <div className="w-full h-full bg-primary-gradient product-ask-section"></div>
            {/* <div className="h-[480px] w-full max-w-[480px] bg-primary-gradient"></div> */}
            {/* <img src="/assets/decorations/marketplace_decoration.png" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
