import React from "react";
import Button from "../commons/Button";

const TableSalesHistory = () => {
  return (
    <table
      className="border-separate w-full  mt-8"
      style={{ borderSpacing: "0 20px" }}
    >
      <thead className="text-white !font-normal border-b border-b-white/20">
        <th
          align="left"
          className="bg-transparent !font-normal border-b border-b-white/20 pb-5"
        ></th>
        <th
          align="left"
          className="bg-transparent !font-normal border-b border-b-white/20 pb-5"
        >
          Product
        </th>
        <th
          align="left"
          className="bg-transparent !font-normal border-b border-b-white/20 pb-5 px-4"
        >
          Product Detail
        </th>
        <th
          align="left"
          className="bg-transparent !font-normal border-b border-b-white/20 pb-5 px-4"
        >
          Cost
        </th>
        <th
          align="left"
          className="bg-transparent !font-normal border-b border-b-white/20 pb-5 px-4"
        >
          Status & Delivery
        </th>

        <th
          align="left"
          className="bg-transparent !font-normal border-b border-b-white/20 pb-5 px-4"
        >
          Action
        </th>
      </thead>
      <tbody>
        <tr className="bg-white/5 backdrop-blur-sm text-base border-style-decoration">
          <td className="p-3 w-[250px] border-l border-l-white/20 border-y border-y-white/20">
            <img
              src="/assets/images/image_item_2.png"
              className="border-style-decoration"
            />
          </td>
          <td className="py-3 px-4 w-fit border-y border-y-white/20">
            <div className="space-y-3">
              <div className="flex items-center">
                <img
                  src="/assets/icons/icon-star-fill.svg"
                  className="w-[14px] lg:w-[24px]"
                />
                <img
                  src="/assets/icons/icon-star-fill.svg"
                  className="w-[14px] lg:w-[24px]"
                />
                <img
                  src="/assets/icons/icon-star-fill.svg"
                  className="w-[14px] lg:w-[24px]"
                />
                <img
                  src="/assets/icons/icon-star-fill.svg"
                  className="w-[14px] lg:w-[24px]"
                />
                <img
                  src="/assets/icons/icon-star-fill.svg"
                  className="w-[14px] lg:w-[24px]"
                />
              </div>
              <h4 className="w-full max-w-[240px] lg:max-w-[300px] font-aero text-sm lg:text-xl text-white leading-[1.1] uppercase">
                pokemon pecharunt x 2
              </h4>

              <p className="text-xs  text-white/60 mt-4 lg:mt-0 max-w-[200px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod..
              </p>

              <div className="flex items-center space-x-2 ">
                <img
                  src="/assets/avatars/avatar.png"
                  className="max-w-[32px] lg:max-w-[32px] border-style-decoration object-cover"
                  alt="User Avatar"
                />
                <div className="flex items-center">
                  <span className="text-sm text-white whitespace-nowrap">
                    Emily Johnson
                  </span>
                  <span className="text-sm text-white whitespace-nowrap">
                    <img
                      src="/assets/icons/icon-chat.svg"
                      className="max-w-[14px] lg:max-w-[unset] ml-1 lg:ml-2 mt-1"
                    />{" "}
                  </span>
                </div>
              </div>
            </div>
          </td>
          <td className="px-4 border-y border-y-white/20">
            <span className="gradient-text font-aero text-base lg:text-2xl ">
              $29.99
            </span>
          </td>
          <td className="h-full px-4 border-y border-y-white/20">
            <div className="flex flex-col gap-20 justify-between h-full">
              <span className="hidden lg:block rounded-full px-4 py-2 text-xs lg:text-sm text-primary bg-primary/20 border border-primary w-fit">
                Being Processed
              </span>

              <div className="flex items-start lg:flex-col gap-1 mt-auto">
                <span className="text-xs lg:text-sm text-primary block whitespace-nowrap">
                  Expected Delivery
                </span>
                <span className="text-xs lg:text-sm text-white block whitespace-nowrap">
                  17 Oct, 2024
                </span>
              </div>
            </div>
          </td>

          <td className="px-4 pr-8 border-y border-y-white/20 border-r border-r-white/20">
            <button className="hover:bg-primary relative w-full hover:text-white !border-primary after:!border-t-primary after:!border-l-primary before:!border-b-primary before:!border-r-primary justify-center text-sm lg:text-base flex items-center p-4 px-6 text-white border-style-decoration after:bottom-[-.5px] right-[-.5px] whitespace-nowrap">
              View order summary
            </button>
            <Button isActive divClassName="!mt-3 lg:!mt-5">
              Buy Now
            </Button>
          </td>
        </tr>
        <tr className="bg-white/5 backdrop-blur-sm text-base border-style-decoration">
          <td className="p-3 w-[250px] border-l border-l-white/20 border-y border-y-white/20">
            <img
              src="/assets/images/image_item_1.png"
              className="border-style-decoration"
            />
          </td>
          <td className="py-3 px-4 w-fit border-y border-y-white/20">
            <div className="space-y-3">
              <div className="flex items-center">
                <img
                  src="/assets/icons/icon-star-fill.svg"
                  className="w-[14px] lg:w-[24px]"
                />
                <img
                  src="/assets/icons/icon-star-fill.svg"
                  className="w-[14px] lg:w-[24px]"
                />
                <img
                  src="/assets/icons/icon-star-fill.svg"
                  className="w-[14px] lg:w-[24px]"
                />
                <img
                  src="/assets/icons/icon-star-fill.svg"
                  className="w-[14px] lg:w-[24px]"
                />
                <img
                  src="/assets/icons/icon-star-fill.svg"
                  className="w-[14px] lg:w-[24px]"
                />
              </div>
              <h4 className="w-full max-w-[240px] lg:max-w-[300px] font-aero text-sm lg:text-xl text-white leading-[1.1] uppercase">
                cubone x 3
              </h4>

              <p className="text-xs  text-white/60 mt-4 lg:mt-0 max-w-[200px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod..
              </p>

              <div className="flex items-center space-x-2 ">
                <img
                  src="/assets/avatars/avatar.png"
                  className="max-w-[32px] lg:max-w-[32px] border-style-decoration object-cover"
                  alt="User Avatar"
                />
                <div className="flex items-center">
                  <span className="text-sm text-white whitespace-nowrap">
                    Emily Johnson
                  </span>
                  <span className="text-sm text-white whitespace-nowrap">
                    <img
                      src="/assets/icons/icon-chat.svg"
                      className="max-w-[14px] lg:max-w-[unset] ml-1 lg:ml-2 mt-1"
                    />{" "}
                  </span>
                </div>
              </div>
            </div>
          </td>
          <td className="px-4 border-y border-y-white/20">
            <span className="gradient-text font-aero text-base lg:text-2xl ">
              $120.00
            </span>
          </td>
          <td className="h-full px-4 border-y border-y-white/20">
            <div className="flex flex-col gap-20 justify-between h-full">
              <span className="hidden lg:block rounded-full px-4 py-2 text-xs lg:text-sm text-primary bg-primary/20 border border-primary w-fit">
                Being Processed
              </span>

              <div className="flex items-start lg:flex-col gap-1 mt-auto">
                <span className="text-xs lg:text-sm text-primary block whitespace-nowrap">
                  Expected Delivery
                </span>
                <span className="text-xs lg:text-sm text-white block whitespace-nowrap">
                  17 Oct, 2024
                </span>
              </div>
            </div>
          </td>

          <td className="px-4 pr-8 border-y border-y-white/20 border-r border-r-white/20">
            <button className="hover:bg-primary relative w-full hover:text-white !border-primary after:!border-t-primary after:!border-l-primary before:!border-b-primary before:!border-r-primary justify-center text-sm lg:text-base flex items-center p-4 px-6 text-white border-style-decoration after:bottom-[-.5px] right-[-.5px] whitespace-nowrap">
              View order summary
            </button>
            <Button isActive divClassName="!mt-3 lg:!mt-5">
              Buy Now
            </Button>
          </td>
        </tr>
        <tr className="bg-white/5 backdrop-blur-sm text-base border-style-decoration">
          <td className="p-3 w-[250px] border-l border-l-white/20 border-y border-y-white/20">
            <img
              src="/assets/images/image_item_7.png"
              className="border-style-decoration"
            />
          </td>
          <td className="py-3 px-4 w-fit border-y border-y-white/20">
            <div className="space-y-3">
              <div className="flex items-center">
                <img
                  src="/assets/icons/icon-star-fill.svg"
                  className="w-[14px] lg:w-[24px]"
                />
                <img
                  src="/assets/icons/icon-star-fill.svg"
                  className="w-[14px] lg:w-[24px]"
                />
                <img
                  src="/assets/icons/icon-star-fill.svg"
                  className="w-[14px] lg:w-[24px]"
                />
                <img
                  src="/assets/icons/icon-star-fill.svg"
                  className="w-[14px] lg:w-[24px]"
                />
                <img
                  src="/assets/icons/icon-star-fill.svg"
                  className="w-[14px] lg:w-[24px]"
                />
              </div>
              <h4 className="w-full max-w-[240px] lg:max-w-[300px] font-aero text-sm lg:text-xl text-white leading-[1.1] uppercase">
                WIXOSS Wi-Cross Ele...
              </h4>

              <p className="text-xs  text-white/60 mt-4 lg:mt-0 max-w-[200px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod..
              </p>

              <div className="flex items-center space-x-2 ">
                <img
                  src="/assets/avatars/avatar.png"
                  className="max-w-[32px] lg:max-w-[32px] border-style-decoration object-cover"
                  alt="User Avatar"
                />
                <div className="flex items-center">
                  <span className="text-sm text-white whitespace-nowrap">
                    Emily Johnson
                  </span>
                  <span className="text-sm text-white whitespace-nowrap">
                    <img
                      src="/assets/icons/icon-chat.svg"
                      className="max-w-[14px] lg:max-w-[unset] ml-1 lg:ml-2 mt-1"
                    />{" "}
                  </span>
                </div>
              </div>
            </div>
          </td>
          <td className="px-4 border-y border-y-white/20">
            <span className="gradient-text font-aero text-base lg:text-2xl ">
              $12.99
            </span>
          </td>
          <td className="h-full px-4 border-y border-y-white/20">
            <div className="flex flex-col gap-20 justify-between h-full">
              <span className="hidden lg:block rounded-full px-4 py-2 text-xs lg:text-sm text-white bg-white/20 border border-white w-fit">
                Recently Viewed
              </span>

              <div className="flex items-start lg:flex-col gap-1 mt-auto">
                <span className="text-xs lg:text-sm text-primary block whitespace-nowrap">
                  Delivery in 4-5 days
                </span>
                <span className="text-xs lg:text-sm text-white block whitespace-nowrap">
                  Order in next 240hrs
                </span>
              </div>
            </div>
          </td>

          <td className="px-4 pr-8 border-y border-y-white/20 border-r border-r-white/20">
            <button className="hover:bg-primary relative w-full hover:text-white !border-primary after:!border-t-primary after:!border-l-primary before:!border-b-primary before:!border-r-primary justify-center text-sm lg:text-base flex items-center p-4 px-6 text-white border-style-decoration after:bottom-[-.5px] right-[-.5px] whitespace-nowrap">
              View order summary
            </button>
            <Button isActive divClassName="!mt-3 lg:!mt-5">
              Buy Now
            </Button>
          </td>
        </tr>
        <tr className="bg-white/5 backdrop-blur-sm text-base border-style-decoration">
          <td className="p-3 w-[250px] border-l border-l-white/20 border-y border-y-white/20">
            <img
              src="/assets/images/image_item_3.png"
              className="border-style-decoration"
            />
          </td>
          <td className="py-3 px-4 w-fit border-y border-y-white/20">
            <div className="space-y-3">
              <div className="flex items-center">
                <img
                  src="/assets/icons/icon-star-fill.svg"
                  className="w-[14px] lg:w-[24px]"
                />
                <img
                  src="/assets/icons/icon-star-fill.svg"
                  className="w-[14px] lg:w-[24px]"
                />
                <img
                  src="/assets/icons/icon-star-fill.svg"
                  className="w-[14px] lg:w-[24px]"
                />
                <img
                  src="/assets/icons/icon-star-fill.svg"
                  className="w-[14px] lg:w-[24px]"
                />
                <img
                  src="/assets/icons/icon-star-fill.svg"
                  className="w-[14px] lg:w-[24px]"
                />
              </div>
              <h4 className="w-full max-w-[240px] lg:max-w-[300px] font-aero text-sm lg:text-xl text-white leading-[1.1] uppercase">
                WIXOSS Wi-Cross Ele...
              </h4>

              <p className="text-xs  text-white/60 mt-4 lg:mt-0 max-w-[200px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod..
              </p>

              <div className="flex items-center space-x-2 ">
                <img
                  src="/assets/avatars/avatar.png"
                  className="max-w-[32px] lg:max-w-[32px] border-style-decoration object-cover"
                  alt="User Avatar"
                />
                <div className="flex items-center">
                  <span className="text-sm text-white whitespace-nowrap">
                    Emily Johnson
                  </span>
                  <span className="text-sm text-white whitespace-nowrap">
                    <img
                      src="/assets/icons/icon-chat.svg"
                      className="max-w-[14px] lg:max-w-[unset] ml-1 lg:ml-2 mt-1"
                    />{" "}
                  </span>
                </div>
              </div>
            </div>
          </td>
          <td className="px-4 border-y border-y-white/20">
            <span className="gradient-text font-aero text-base lg:text-2xl ">
              $12.99
            </span>
          </td>
          <td className="h-full px-4 border-y border-y-white/20">
            <div className="flex flex-col gap-20 justify-between h-full">
              <span className="hidden lg:block rounded-full px-4 py-2 text-xs lg:text-sm text-primary bg-primary/20 border border-primary w-fit">
                Being Processed
              </span>

              <div className="flex items-start lg:flex-col gap-1 mt-auto">
                <span className="text-xs lg:text-sm text-primary block whitespace-nowrap">
                  Expected Delivery
                </span>
                <span className="text-xs lg:text-sm text-white block whitespace-nowrap">
                  17 Oct, 2024
                </span>
              </div>
            </div>
          </td>

          <td className="px-4 pr-8 border-y border-y-white/20 border-r border-r-white/20">
            <button className="hover:bg-primary relative w-full hover:text-white !border-primary after:!border-t-primary after:!border-l-primary before:!border-b-primary before:!border-r-primary justify-center text-sm lg:text-base flex items-center p-4 px-6 text-white border-style-decoration after:bottom-[-.5px] right-[-.5px] whitespace-nowrap">
              View order summary
            </button>
            <Button isActive divClassName="!mt-3 lg:!mt-5">
              Buy Now
            </Button>
          </td>
        </tr>
        <tr className="bg-white/5 backdrop-blur-sm text-base border-style-decoration">
          <td className="p-3 w-[250px] border-l border-l-white/20 border-y border-y-white/20">
            <img
              src="/assets/images/image_item_8.png"
              className="border-style-decoration"
            />
          </td>
          <td className="py-3 px-4 w-fit border-y border-y-white/20">
            <div className="space-y-3">
              <div className="flex items-center">
                <img
                  src="/assets/icons/icon-star-fill.svg"
                  className="w-[14px] lg:w-[24px]"
                />
                <img
                  src="/assets/icons/icon-star-fill.svg"
                  className="w-[14px] lg:w-[24px]"
                />
                <img
                  src="/assets/icons/icon-star-fill.svg"
                  className="w-[14px] lg:w-[24px]"
                />
                <img
                  src="/assets/icons/icon-star-fill.svg"
                  className="w-[14px] lg:w-[24px]"
                />
                <img
                  src="/assets/icons/icon-star-fill.svg"
                  className="w-[14px] lg:w-[24px]"
                />
              </div>
              <h4 className="w-full max-w-[240px] lg:max-w-[300px] font-aero text-sm lg:text-xl text-white leading-[1.1] uppercase">
                world of arcraft
              </h4>

              <p className="text-xs  text-white/60 mt-4 lg:mt-0 max-w-[200px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod..
              </p>

              <div className="flex items-center space-x-2 ">
                <img
                  src="/assets/avatars/avatar.png"
                  className="max-w-[32px] lg:max-w-[32px] border-style-decoration object-cover"
                  alt="User Avatar"
                />
                <div className="flex items-center">
                  <span className="text-sm text-white whitespace-nowrap">
                    Emily Johnson
                  </span>
                  <span className="text-sm text-white whitespace-nowrap">
                    <img
                      src="/assets/icons/icon-chat.svg"
                      className="max-w-[14px] lg:max-w-[unset] ml-1 lg:ml-2 mt-1"
                    />{" "}
                  </span>
                </div>
              </div>
            </div>
          </td>
          <td className="px-4 border-y border-y-white/20">
            <span className="gradient-text font-aero text-base lg:text-2xl ">
              $120.00
            </span>
          </td>
          <td className="h-full px-4 border-y border-y-white/20">
            <div className="flex flex-col gap-20 justify-between h-full">
              <span className="hidden lg:block rounded-full px-4 py-2 text-xs lg:text-sm text-white bg-white/20 border border-white w-fit">
                Recently Viewed
              </span>

              <div className="flex items-start lg:flex-col gap-1 mt-auto">
                <span className="text-xs lg:text-sm text-primary block whitespace-nowrap">
                  Delivery in 4-5 days
                </span>
                <span className="text-xs lg:text-sm text-white block whitespace-nowrap">
                  Order in next 240hrs
                </span>
              </div>
            </div>
          </td>

          <td className="px-4 pr-8 border-y border-y-white/20 border-r border-r-white/20">
            <button className="hover:bg-primary relative w-full hover:text-white !border-primary after:!border-t-primary after:!border-l-primary before:!border-b-primary before:!border-r-primary justify-center text-sm lg:text-base flex items-center p-4 px-6 text-white border-style-decoration after:bottom-[-.5px] right-[-.5px] whitespace-nowrap">
              View order summary
            </button>
            <Button isActive divClassName="!mt-3 lg:!mt-5">
              Buy Now
            </Button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableSalesHistory;
