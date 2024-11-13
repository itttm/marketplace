import React from "react";

const Footer = () => {
  return (
    <div>
      <div
        className="container p-4 mx-auto flex flex-col items-center justify-between text-white relative after:content-[''] after:w-[360px] after:left-[100%] after:h-[360px] after:bottom-[100%] after:blur-[250px] after:bg-primary after:rounded-full after:absolute after:z-[1]"
        style={{
          background: "url('/assets/backgrounds/footer_background.png')",
          backgroundSize: "100% 100%",
        }}
      >
        <div className="flex flex-col items-center lg:items-stretch justify-between space-y-10 lg:space-y-0 lg:flex-row lg:justify-between w-full  z-[2] max-w-[250px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[unset]">
          <div className="flex flex-col w-full max-w-[180px] lg:max-w-[350px] justify-between">
            <img
              className="w-full max-w-[180px] lg:max-w-[315.07px]"
              src="/assets/logos/logo.svg"
              alt=""
            />
          </div>

          <div className="flex items-start w-full max-w-[670px]">
            <div></div>
            <div className="w-full ">
              <h4 className="text-base 2xl:text-xl text-white/60 mb-10 whitespace-nowrap">
                Navigation
              </h4>
              <ul className="text-xs 2xl:text-base space-y-6 leading-[1.8]">
                <li>Home</li>
                <li>Categories</li>
                <li>Sell Cards</li>
              </ul>
            </div>
            <div className="w-full ">
              <h4 className="text-base 2xl:text-xl text-white/60 mb-10 whitespace-nowrap">
                Resources
              </h4>
              <ul className="text-xs 2xl:text-base space-y-6 leading-[1.8]">
                <li>FAQs</li>
                <li>Contact</li>
                <li>Log In</li>
              </ul>
            </div>
            <div className="w-full hidden lg:block">
              <div className="text-xs flex flex-col items-end justify-end 2xl:text-base space-y-6 leading-[1.8]">
                <div className="flex gap-6">
                  <div className="border-style-decoration bg-primary-gradient p-6 w-fit cursor-pointer">
                    <img src="/assets/logos/facebook.svg" />
                  </div>
                  <div className="border-style-decoration bg-primary-gradient p-6 w-fit cursor-pointer">
                    <img src="/assets/logos/x.svg" />
                  </div>
                </div>
                <div>
                  <div className="border-style-decoration bg-primary-gradient p-6 w-fit cursor-pointer">
                    <img src="/assets/logos/instagram.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-xs flex lg:hidden items-center justify-between 2xl:text-base leading-[1.8] w-full">
            <div className="border-style-decoration bg-primary-gradient p-4 w-fit cursor-pointer">
              <img
                src="/assets/logos/facebook.svg"
                className="max-w-[28px] lg:max-w-[unset]"
              />
            </div>
            <div className="border-style-decoration bg-primary-gradient p-4 w-fit cursor-pointer">
              <img
                src="/assets/logos/x.svg"
                className="max-w-[28px] lg:max-w-[unset]"
              />
            </div>
            <div>
              <div className="border-style-decoration bg-primary-gradient p-4 w-fit cursor-pointer">
                <img
                  src="/assets/logos/instagram.svg"
                  className="max-w-[28px] lg:max-w-[unset]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:justify-between mt-20 lg:mt-32 pb-[3rem]">
          <span className="text-white/60 font-light text-xs lg:text-sm inline-block  mr-[-1rem]">
            © 2024 Card Shop Exchange
          </span>
          <div className="flex gap-24">
            <span className="text-white/60 font-light text-xs lg:text-sm">
              Privacy Policy
            </span>
            <span className="text-white/60 font-light text-xs lg:text-sm inline-block">
              Terms of service
            </span>
          </div>
        </div>
      </div>
      {/*  */}
      <div className=" overflow-hidden relative w-full h-[100px] after:content-[''] after:h-full after:top-0 after:absolute after:w-full after:max-w-[100px] lg:after:w-[500px] after:bg-[linear-gradient(to_left,#141414_0%,#14141400_100%)] after:right-0  after:pointer-events-none  before:content-['']  before:absolute before:h-full before:w-full before:max-w-[100px] lg:before:w-[500px] before:left-0 before:bg-[linear-gradient(to_left,#14141400_0%,#141414_100%)] z-10 before:z-20  before:pointer-events-none">
        <div className="flex items-center gap-6 animate-marquee">
          <span className="font-aero leading-[1] flex gradient-text uppercase text-[64px] lg:text-[92px] whitespace-nowrap">
            card shop exchange?
          </span>
          <span className="font-aero leading-[1] flex text-white uppercase text-[64px] lg:text-[92px] whitespace-nowrap">
            card shop exchange?
          </span>
          <span className="font-aero leading-[1] flex gradient-text uppercase text-[64px] lg:text-[92px] whitespace-nowrap">
            card shop exchange?
          </span>
          <span className="font-aero leading-[1] flex text-white uppercase text-[64px] lg:text-[92px] whitespace-nowrap">
            card shop exchange?
          </span>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Footer;
