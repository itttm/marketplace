import React from "react";
import Button from "./commons/Button";
import DropdownMenu from "./commons/DropdownMenu";

const Header = ({ isLogin = false }) => {
  const menuItems = ["AI Tools", "History", "Settings", "Log out"];

  return (
    <div className="relative after:content-['']  after:w-full after:absolute after:h-[100px] after:bg-[linear-gradient(to_bottom,#141414_0%,#14141400_100%)] z-10  after:pointer-events-none">
      <div className="container mx-auto px-4 py-8 w-full absolute top-0 inset-0 bg-transparent z-10 h-fit">
        <div className="flex items-center justify-between w-full">
          {/*  */}
          <div className="flex items-center lg:hidden  gap-6">
            <button>
              <img src="/assets/icons/icon-menu.svg" alt="" />
            </button>
            <button>
              <img src="/assets/icons/icon-search.svg" alt="" />
            </button>
          </div>

          <img
            className="h-[2rem] lg:min-h-[3rem]"
            src="/assets/logos/logo.svg"
            alt=""
          />

          <div className="hidden lg:flex gap-[2rem] text-[1.1rem] uppercase  text-white ">
            <div className="flex items-center font-bold">
              <a href="/#">Home</a>
            </div>
            <div className="flex items-center text-[#484F52]">
              <a href="/#">Categories</a>
            </div>
            <div className="flex items-center text-[#484F52]">
              <a href="/#">Buy Cards</a>
            </div>
            <div className="flex items-center text-[#484F52]">
              <a href="/#">Sell Cards</a>
            </div>
            <div className="flex items-center  text-[#484F52]">
              <a href="/#">Contact</a>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            {/*  */}
            <button className="lg:hidden">
              <img src="/assets/icons/icon-person.svg" alt="" />
            </button>
            {!isLogin ? (
              <Button isActive divClassName="hidden lg:block">
                <img
                  src="/assets/icons/icon-person.svg"
                  alt="icon"
                  className="mr-2"
                />{" "}
                Login
              </Button>
            ) : (
              <div className="hidden lg:block">
                <DropdownMenu
                  contentPlaceholder={
                    <div className="flex items-center relative">
                      <div className="border-style-decoration">
                        <img
                          src="/assets/avatars/avatar.png"
                          className="object-cover lg:w-[45px] lg:h-[45px] relative z-0"
                        />
                      </div>
                      <div className="ml-4 hidden lg:flex items-center whitespace-nowrap">
                        <span className="text-base text-white">
                          Emily Johnson
                        </span>
                        <img
                          src="/assets/icons/icon-arrow-drop-down.svg"
                          className="rotate-[180deg] ml-2"
                        />
                      </div>
                    </div>
                  }
                  menuItems={["Profile Settings", "Your Listing", "Log out"]}
                />
              </div>
            )}

            {/*  */}
            <button className="relative">
              <span className="text-[8px] font-bold rounded-full flex items-center justify-center bg-primary text-white absolute  w-[14px] h-[14px] right-[-.25rem]  bottom-[-.25rem]">
                2
              </span>
              <img src="/assets/icons/icon-bag.svg" alt="icon" />
            </button>
          </div>

          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default Header;
