import React, { useRef } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TextInput from "../../components/commons/TextInput";

const MarketplaceChat = () => {
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
      <Header isLogin/>
      <div className="container mx-auto px-5 py-32 lg:py-48 relative after:content-[''] after:w-[360px] after:right-[100%] after:h-[360px] after:bottom-[80%] after:blur-[250px] after:bg-primary after:rounded-full after:absolute after:z-[1]">
        <div className="flex items-center justify-between">
          <h1 className="font-aero uppercase text-white leading-[1.2] text-[32px] lg:text-[48px]">
            Chat
          </h1>

          <button
            className={`relative w-full max-w-[168px] lg:max-w-[214px] justify-center text-sm lg:text-base flex items-center p-4 px-6 whitespace-nowrap border-style-decoration after:bottom-[-.5px] right-[-.5px] text-white hover:bg-white hover:text-[#141414]`}
          >
            View Profile
          </button>
        </div>

        <div className="product-ask-section p-5 lg:p-10 mt-10 lg:mt-16 ">
          <div className="h-[65vh] overflow-y-auto no-scrollbar space-y-6">
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
                    What material are the cards of cubone x 3?
                  </p>
                </div>
                <span className="text-white/40 text-sm mt-2 block">
                  11:32 AM
                </span>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <img
                src="/assets/avatars/avatar.png"
                className="border-style-decoration max-w-[48px]"
              />
              <div className="flex flex-col items-start">
                <div className="border-style-decoration p-4 px-6 bg-white backdrop-blur-sm">
                  <span className="uppercase text-xs lg:text-sm text-[#7F8289] font-medium block">
                    emily johnson
                  </span>
                  <p className="text-black text-sm lg:text-base mt-1">
                    The material used is hard paper with glossy finish. The
                    cards are high quality product.
                  </p>
                </div>
                <span className="text-white/40 text-sm mt-2 block">
                  11:32 AM
                </span>
              </div>
            </div>
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
                    Okay thankyou. How many days will it take for the delivery?
                  </p>
                </div>
                <span className="text-white/40 text-sm mt-2 block">
                  11:32 AM
                </span>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <img
                src="/assets/avatars/avatar.png"
                className="border-style-decoration max-w-[48px]"
              />
              <div className="flex flex-col items-start">
                <div className="border-style-decoration p-4 px-6 bg-white backdrop-blur-sm">
                  <span className="uppercase text-xs lg:text-sm text-[#7F8289] font-medium block">
                    emily johnson
                  </span>
                  <p className="text-black text-sm lg:text-base mt-1">
                    Standard delivery time is 7-8 days
                  </p>
                </div>
                <span className="text-white/40 text-sm mt-2 block">
                  11:32 AM
                </span>
              </div>
            </div>
          </div>
          {/*  */}
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

export default MarketplaceChat;
