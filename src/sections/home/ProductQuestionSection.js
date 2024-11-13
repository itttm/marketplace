import React from "react";

const ProductQuestionSection = () => {
  return (
    <div className="py-24 lg:py-48">
      <div className="container px-5 mx-auto relative after:content-[''] after:w-[360px] after:left-[100%] after:h-[360px] after:bottom-[90%] after:blur-[200px] after:bg-primary after:rounded-full after:absolute after:z-[1]">
        <div className="text-white product-ask-section p-10 lg:p-20 bg-white/5 backdrop-blur-md ">
          <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between ">
            <h2 className="uppercase font-aero text-center lg:text-left text-[48px] lg:text-[72px]  leading-[1.1]">
              What is{" "}
              <span className="gradient-text font-aero">
                <br />
                card shop <br />
                exchange?
              </span>
            </h2>
            <p className="w-full text-xs lg:text-base text-center mt-5 lg:mt-0 lg:text-left max-w-[370px] opacity-60 font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
              <br />
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 justify-between pt-8 mt-8 lg:pt-16 lg:mt-16 border-t-2 border-t-white/20">
            <div className="flex items-center gap-6">
              <div className="border-style-decoration bg-primary-gradient p-4 lg:p-6 w-fit">
                <img src="/assets/icons/icon-handshake.svg" />
              </div>
              <span className="font-aero text-base leading-[1.4] lg:text-xl uppercase">
                Seamless Buying <br />
                and Selling
              </span>
            </div>
            <div className="flex items-center gap-6">
              <div className="border-style-decoration bg-primary-gradient p-4 lg:p-6 w-fit">
                <img src="/assets/icons/icon-user-switch.svg" />
              </div>
              <span className="font-aero text-base leading-[1.4] lg:text-xl uppercase">
                easy account <br />
                management
              </span>
            </div>
            <div className="flex items-center gap-6">
              <div className="border-style-decoration bg-primary-gradient p-4 lg:p-6 w-fit">
                <img src="/assets/icons/icon-chat-text.svg" />
              </div>
              <span className="font-aero text-base leading-[1.4] lg:text-xl uppercase">
                integrated chat <br />
                functionality
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductQuestionSection;
