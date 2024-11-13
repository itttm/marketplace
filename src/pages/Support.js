import React, { useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TextInput from "../components/commons/TextInput";

const Support = () => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file);
      // Handle the file here (e.g., upload it or store it in state)
    }
  };
  return (
    <div>
      <Header isLogin />
      <div className="container mx-auto px-5 py-32 lg:py-48 relative after:content-[''] after:w-[360px] after:right-[100%] after:h-[360px] after:bottom-[80%] after:blur-[250px] after:bg-primary after:rounded-full after:absolute after:z-[1]">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between">
          <h1 className="font-aero uppercase text-white leading-[1.2] text-[32px] lg:text-[48px]">
            support
          </h1>

          <div className="flex items-center gap-3 mt-6 lg:mt-0 w-full lg:justify-end">
            <button
              className={`relative w-full lg:max-w-[214px] justify-center text-sm lg:text-base flex items-center p-4 px-6 whitespace-nowrap border-style-decoration after:bottom-[-.5px] right-[-.5px] text-white hover:bg-white hover:text-[#141414]`}
            >
              My tickets
            </button>
            <button
              className={`relative w-full lg:max-w-[214px] justify-center text-sm lg:text-base flex items-center p-4 px-6 whitespace-nowrap border-style-decoration after:bottom-[-.5px] right-[-.5px] text-white hover:bg-white hover:text-[#141414]`}
            >
              FAQ's
            </button>
          </div>
        </div>

        <div className="product-ask-section p-5 lg:p-10 mt-10 lg:mt-16 ">
          <div className="h-[40vh] overflow-y-auto no-scrollbar space-y-6">
            <div className="flex flex-row-reverse items-start gap-6">
              <img
                src="/assets/avatars/avatar_2.png"
                className="border-style-decoration max-w-[48px]"
              />
              <div className="flex flex-col items-end">
                <div className="border-style-decoration p-4 px-6 bg-white/5 backdrop-blur-sm">
                  <span className="uppercase text-xs lg:text-sm text-white/60 font-medium block">
                    YOU
                  </span>
                  <p className="text-white text-sm lg:text-base mt-1">
                    I am not able to create a listing
                  </p>
                </div>
                <span className="text-white/40 text-sm mt-2 block">
                  11:32 AM
                </span>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="border-style-decoration ">
                <img
                  src="/assets/logos/card-marketplace.svg"
                  className="max-w-[48px]"
                />
              </div>
              <div className="flex flex-col items-start">
                <div className="border-style-decoration p-4 px-6 bg-white backdrop-blur-sm">
                  <span className="uppercase text-xs lg:text-sm text-[#7F8289] font-medium block">
                    card shop exchange
                  </span>
                  <p className="text-black text-sm lg:text-base mt-1">
                    We have raised a ticket with number 634572. Our team will
                    get back to you shortly.
                  </p>
                </div>
                <span className="text-white/40 text-sm mt-2 block">
                  11:32 AM
                </span>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="grid lg:grid-cols-2 gap-4 pt-8">
            <div className="border-style-decoration flex items-center gap-4 bg-white/5 backdrop-blur-sm p-2 lg:p-4">
              <div className="border-style-decoration bg-white/5 backdrop-blur-sm p-3.5  w-fit">
                <img
                  src="/assets/icons/icon-package.svg"
                  className="max-w-[20px] lg:max-w-[unset]"
                />
              </div>
              <div>
                <span className="block text-white text-sm lg:text-lg font-medium">
                  Sellers
                </span>
                <span className="block text-[10px] lg:text-xs text-white/60">
                  Lorem ipsum dolor sit amet, consectetur
                </span>
              </div>
            </div>
            <div className="border-style-decoration flex items-center gap-4 bg-white/5 backdrop-blur-sm p-2 lg:p-4">
              <div className="border-style-decoration bg-white/5 backdrop-blur-sm p-3.5  w-fit">
                <img
                  src="/assets/icons/icon-cards.svg"
                  className="max-w-[20px] lg:max-w-[unset]"
                />
              </div>
              <div>
                <span className="block text-white text-sm lg:text-lg font-medium">
                  Product
                </span>
                <span className="block text-[10px] lg:text-xs text-white/60">
                  Lorem ipsum dolor sit amet, consectetur
                </span>
              </div>
            </div>
            <div className="border-style-decoration flex items-center gap-4 bg-white/5 backdrop-blur-sm p-2 lg:p-4">
              <div className="border-style-decoration bg-white/5 backdrop-blur-sm p-3.5  w-fit">
                <img
                  src="/assets/icons/icon-shopping-bag-open.svg"
                  className="max-w-[20px] lg:max-w-[unset]"
                />
              </div>
              <div>
                <span className="block text-white text-sm lg:text-lg font-medium">
                  Purchase
                </span>
                <span className="block text-[10px] lg:text-xs text-white/60">
                  Lorem ipsum dolor sit amet, consectetur
                </span>
              </div>
            </div>
            <div className="border-style-decoration flex items-center gap-4 bg-white/5 backdrop-blur-sm p-2 lg:p-4">
              <div className="border-style-decoration bg-white/5 backdrop-blur-sm p-3.5  w-fit">
                <img
                  src="/assets/icons/icon-headset.svg"
                  className="max-w-[20px] lg:max-w-[unset]"
                />
              </div>
              <div>
                <span className="block text-white text-sm lg:text-lg font-medium">
                  Customer helpline
                </span>
                <span className="block text-[10px] lg:text-xs text-white/60">
                  Lorem ipsum dolor sit amet, consectetur
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center pt-8 gap-4">
            <TextInput
              divClassName="bg-white/5 backdrop-blur-sm"
              placeholder="Type your text here"
              inputClassName="placeholder:text-white/60"
              endIcon={
                <button className="flex justify-center items-center bg-primary-gradient p-1.5 mr-[-10px]">
                  <img src="/assets/icons/icon-upward.svg" />
                </button>
              }
            />

            <button
              className="hover:bg-primary relative w-full lg:max-w-[300px] hover:text-white !border-primary after:!border-t-primary after:!border-l-primary before:!border-b-primary before:!border-r-primary justify-center text-sm lg:text-base flex items-center p-4 px-6 text-white border-style-decoration after:bottom-[-.5px] right-[-.5px] whitespace-nowrap"
              onClick={handleButtonClick}
            >
              Add attachment
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
              />
              <img src="/assets/icons/icon-plus.svg" className="ml-2" />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Support;
