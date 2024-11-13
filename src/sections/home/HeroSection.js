import React from "react";
import TextInput from "../../components/commons/TextInput";
import Button from "../../components/commons/Button";

const HeroSection = () => {
  return (
    // <div className="relative h-screen w-full text-white  pt-[15rem] lg:pt-[8em] px-5">
    <div className="relative w-full text-white  pt-[15rem] lg:pt-[10rem] px-5">
      {/* left  decoration */}
      <div className="absolute top-0 left-0">
        <img
          src="/assets/decorations/homepage_decoration_1.png"
          className="max-w-[70px] lg:max-w-[unset] relative left-[calc(100%-0.5rem)] lg:left-[calc(100%+3rem)] top-[6rem] lg:top-[-7rem]"
        />
        <img
          src="/assets/decorations/homepage_decoration_2.png"
          className="max-w-[70px] lg:max-w-[unset] relative left-[-1.5rem] lg:left-[unset] top-[2.5rem] lg:top-[-14rem]"
        />
        <img
          src="/assets/decorations/homepage_decoration_3.png"
          className="hidden lg:block relative left-[calc(100%-3rem)] top-[-18rem]"
        />
        <img
          src="/assets/decorations/homepage_decoration_4.png"
          className="hidden lg:block  relative top-[-24rem] left-[-5rem]"
        />
      </div>
      <div className="absolute top-0 right-0">
        <img
          src="/assets/decorations/homepage_decoration_5.png"
          className="max-w-[70px] lg:max-w-[unset] relative right-[calc(100%-0.5rem)] lg:right-[calc(100%+3rem)] top-[6rem] lg:top-[-7rem]"
        />
        <img
          src="/assets/decorations/homepage_decoration_6.png"
          className="max-w-[70px] lg:max-w-[unset] relative right-[-1.5rem] lg:right-[unset] top-[2.5rem] lg:top-[-14rem]"
        />
        <img
          src="/assets/decorations/homepage_decoration_7.png"
          className="hidden lg:block  relative right-[calc(100%-3rem)] top-[-18rem]"
        />
        <img
          src="/assets/decorations/homepage_decoration_8.png"
          className="hidden lg:block  relative top-[-24rem] right-[-5rem]"
        />
      </div>

      <div className="flex justify-center items-center flex-col h-full w-full">
        <h1 className="uppercase font-aero text-[48px] lg:text-[72px] text-center leading-[1.2] text-white">
          Discover <br /> Millions Of <br /> Cards
        </h1>
        <p className="text-base lg:text-2xl text-center my-2 text-white/60">
          Pre-owned cards from various categories,
          <br /> hassle-free at best prices.
        </p>

        <div className="mt-6 flex items-center space-x-4 w-full max-w-[380px] lg:max-w-[500px] relative after:content-[''] after:w-[360px]  after:h-[360px] after:left-[50%] after:translate-x-[-50%] after:bottom-[100%] after:blur-[300px] after:bg-primary after:rounded-full after:absolute after:z-[-1]">
          {/* <img
            src="/assets/decorations/homepage_decoration_9.png"
            className="absolute top-[-2rem] pointer-events-none w-[700px]"
          /> */}
          {/* <div className="absolute pointer-events-none w-[360px] h-[360px] bg-primary blur-[300px] rounded-full left-[50%] translate-x-[-50%] bottom-[100%]" /> */}
          <TextInput placeholder="Search for cards" />
          <Button isActive>Explore</Button>
        </div>

        <div className="flex items-start justify-center gap-3 w-full mt-12 lg:mt-20">
          {/* card */}
          <div className="border-style-decoration w-full  max-w-[200px] p-3 lg:p-5 flex flex-col items-center">
            <h4 className="uppercase font-aero text-lg lg:text-[28px] text-center leading-[1.2] text-primary">
              3m+
            </h4>
            <span className="text-[10px] lg:text-base mt-1">Cards Traded</span>
          </div>
          {/* endcard */}
          {/* card */}
          <div className="border-style-decoration w-full  max-w-[200px] p-3 lg:p-5 flex flex-col items-center">
            <h4 className="uppercase font-aero text-lg lg:text-[28px] text-center leading-[1.2] text-primary">
              20m+
            </h4>
            <span className="text-[10px] lg:text-base mt-1">
              Total Earnings
            </span>
          </div>
          {/* endcard */}
          {/* card */}
          <div className="border-style-decoration w-full  max-w-[200px] p-3 lg:p-5 flex flex-col items-center">
            <h4 className="uppercase font-aero text-lg lg:text-[28px] text-center leading-[1.2] text-primary">
              40k+
            </h4>
            <span className="text-[10px] lg:text-base mt-1">Monthly Users</span>
          </div>
          {/* endcard */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
