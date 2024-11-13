import React from "react";
import Button from "../commons/Button";

const TableUsers = () => {
  return (
    <table
      className="border-separate w-full mt-[-15px]"
      style={{ borderSpacing: "0 15px" }}
    >
      <thead className="text-white !font-normal border-b border-b-white/20 relative after:content-[''] after:absolute after:w-[calc(100%+4rem)] after:h-[2px] after:bg-white/20 after:left-[-2rem] before:content-[''] before:absolute before:bottom-0 before:left-[-2rem] before:w-[calc(100%+4rem)] before:h-[2px] before:bg-white/20">
        <th
          align="left"
          className="bg-transparent py-5 uppercase !font-medium text-white/60 p-4 px-6 text-sm"
        >
          Users
        </th>
        <th
          align="left"
          className="bg-transparent py-5 uppercase !font-medium text-white/60 p-4 px-6 text-sm"
        >
          Id number
        </th>
        <th
          align="left"
          className="bg-transparent py-5 uppercase !font-medium text-white/60 p-4 px-6 text-sm"
        >
          Joining date
        </th>
        <th
          align="left"
          className="bg-transparent py-5 uppercase !font-medium text-white/60 p-4 px-6 text-sm"
        >
          location
        </th>

        <th
          align="left"
          className="bg-transparent py-5 uppercase !font-medium text-white/60 p-4 px-6 text-sm"
        >
          tickets
        </th>
        <th
          align="left"
          className="bg-transparent py-5 uppercase !font-medium text-white/60 p-4 px-6 text-sm"
        ></th>
      </thead>
      <tbody>
        <tr className="bg-white/5 hover:bg-white hover:text-[#141414] group text-white backdrop-blur-sm text-base border-style-decoration">
          <td className="p-4 border-l border-l-white/20 border-y border-y-white/20">
            <div className="flex items-center space-x-4 ">
              <img
                src="/assets/avatars/avatar_2.png"
                className="max-w-[48px] lg:max-w-[48px] border-style-decoration object-cover"
                alt="User Avatar"
              />
              <div className="flex items-center">
                <span className="text-sm lg:text-base whitespace-nowrap">
                  Oliver Jones
                </span>
              </div>
            </div>
          </td>
          <td className="p-4 w-fit border-y border-y-white/20">647622</td>
          <td className="p-4 border-y border-y-white/20">28 Jan, 2024</td>
          <td className="h-full p-4 border-y border-y-white/20">Hamburg</td>
          <td className="h-full p-4 border-y border-y-white/20">3</td>

          <td className="p-4 pr-8 border-y border-y-white/20 border-r border-r-white/20">
            <div className="flex items-center gap-4 justify-end">
              <button className="group-hover:text-[#141414] group-hover:!border-[#141414] group-hover:after:!border-t-[#141414] group-hover:after:!border-l-[#141414] group-hover:before:!border-b-[#141414] group-hover:before:!border-r-[#141414] relative w-full max-w-[85px] justify-center text-sm lg:text-base flex items-center p-4 py-3 text-white border-style-decoration after:bottom-[-.5px] right-[-.5px] whitespace-nowrap">
                View
              </button>
              <img
                src="/assets/icons/icon-more-vert.svg"
                className="invert group-hover:invert-0 cursor-pointer"
              />
            </div>
          </td>
        </tr>
        <tr className="bg-white/5 hover:bg-white hover:text-[#141414] group text-white backdrop-blur-sm text-base border-style-decoration">
          <td className="p-4 border-l border-l-white/20 border-y border-y-white/20">
            <div className="flex items-center space-x-4 ">
              <img
                src="/assets/avatars/avatar.png"
                className="max-w-[48px] lg:max-w-[48px] border-style-decoration object-cover"
                alt="User Avatar"
              />
              <div className="flex items-center">
                <span className="text-sm lg:text-base whitespace-nowrap">
                  Emily Johnson
                </span>
              </div>
            </div>
          </td>
          <td className="p-4 w-fit border-y border-y-white/20">642383</td>
          <td className="p-4 border-y border-y-white/20">28 Jan, 2024</td>
          <td className="h-full p-4 border-y border-y-white/20">Bremen</td>
          <td className="h-full p-4 border-y border-y-white/20">5</td>

          <td className="p-4 pr-8 border-y border-y-white/20 border-r border-r-white/20">
            <div className="flex items-center gap-4 justify-end">
              <button className="group-hover:text-[#141414] group-hover:!border-[#141414] group-hover:after:!border-t-[#141414] group-hover:after:!border-l-[#141414] group-hover:before:!border-b-[#141414] group-hover:before:!border-r-[#141414] relative w-full max-w-[85px] justify-center text-sm lg:text-base flex items-center p-4 py-3 text-white border-style-decoration after:bottom-[-.5px] right-[-.5px] whitespace-nowrap">
                View
              </button>
              <img
                src="/assets/icons/icon-more-vert.svg"
                className="invert group-hover:invert-0 cursor-pointer"
              />
            </div>
          </td>
        </tr>
        <tr className="bg-white/5 hover:bg-white hover:text-[#141414] group text-white backdrop-blur-sm text-base border-style-decoration">
          <td className="p-4 border-l border-l-white/20 border-y border-y-white/20">
            <div className="flex items-center space-x-4 ">
              <img
                src="/assets/avatars/avatar_4.png"
                className="max-w-[48px] lg:max-w-[48px] border-style-decoration object-cover"
                alt="User Avatar"
              />
              <div className="flex items-center">
                <span className="text-sm lg:text-base whitespace-nowrap">
                  Sophia Ren
                </span>
              </div>
            </div>
          </td>
          <td className="p-4 w-fit border-y border-y-white/20">167827</td>
          <td className="p-4 border-y border-y-white/20">02 Mar, 2024</td>
          <td className="h-full p-4 border-y border-y-white/20">Lazzier</td>
          <td className="h-full p-4 border-y border-y-white/20">8</td>

          <td className="p-4 pr-8 border-y border-y-white/20 border-r border-r-white/20">
            <div className="flex items-center gap-4 justify-end">
              <button className="group-hover:text-[#141414] group-hover:!border-[#141414] group-hover:after:!border-t-[#141414] group-hover:after:!border-l-[#141414] group-hover:before:!border-b-[#141414] group-hover:before:!border-r-[#141414] relative w-full max-w-[85px] justify-center text-sm lg:text-base flex items-center p-4 py-3 text-white border-style-decoration after:bottom-[-.5px] right-[-.5px] whitespace-nowrap">
                View
              </button>
              <img
                src="/assets/icons/icon-more-vert.svg"
                className="invert group-hover:invert-0 cursor-pointer"
              />
            </div>
          </td>
        </tr>
        <tr className="bg-white/5 hover:bg-white hover:text-[#141414] group text-white backdrop-blur-sm text-base border-style-decoration">
          <td className="p-4 border-l border-l-white/20 border-y border-y-white/20">
            <div className="flex items-center space-x-4 ">
              <img
                src="/assets/avatars/avatar_3.png"
                className="max-w-[48px] lg:max-w-[48px] border-style-decoration object-cover"
                alt="User Avatar"
              />
              <div className="flex items-center">
                <span className="text-sm lg:text-base whitespace-nowrap">
                  Joshua Mer
                </span>
              </div>
            </div>
          </td>
          <td className="p-4 w-fit border-y border-y-white/20">647622</td>
          <td className="p-4 border-y border-y-white/20">14 Feb, 2024</td>
          <td className="h-full p-4 border-y border-y-white/20">Bremen</td>
          <td className="h-full p-4 border-y border-y-white/20">12</td>

          <td className="p-4 pr-8 border-y border-y-white/20 border-r border-r-white/20">
            <div className="flex items-center gap-4 justify-end">
              <button className="group-hover:text-[#141414] group-hover:!border-[#141414] group-hover:after:!border-t-[#141414] group-hover:after:!border-l-[#141414] group-hover:before:!border-b-[#141414] group-hover:before:!border-r-[#141414] relative w-full max-w-[85px] justify-center text-sm lg:text-base flex items-center p-4 py-3 text-white border-style-decoration after:bottom-[-.5px] right-[-.5px] whitespace-nowrap">
                View
              </button>
              <img
                src="/assets/icons/icon-more-vert.svg"
                className="invert group-hover:invert-0 cursor-pointer"
              />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableUsers;
