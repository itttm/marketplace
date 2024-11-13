import React from "react";
import Button from "../commons/Button";

const TableTickets = () => {
  return (
    <table
      className="border-separate w-full  mt-8"
      style={{ borderSpacing: "0 20px" }}
    >
      <thead className="text-white !font-normal border-b border-b-white/20">
        <th
          align="left"
          className="bg-transparent border-y border-y-white/20 py-5 uppercase !font-medium text-white/60 "
        ></th>
        <th
          align="left"
          className="bg-transparent border-y border-y-white/20 py-5 uppercase !font-medium text-white/60 p-4 px-6"
        >
          Ticket Id
        </th>
        <th
          align="left"
          className="bg-transparent border-y border-y-white/20 py-5 uppercase !font-medium text-white/60 p-4 px-6"
        >
          Subject
        </th>
        <th
          align="left"
          className="bg-transparent border-y border-y-white/20 py-5 uppercase !font-medium text-white/60 p-4 px-6"
        >
          Created On
        </th>
        <th
          align="left"
          className="bg-transparent border-y border-y-white/20 py-5 uppercase !font-medium text-white/60 p-4 px-6"
        >
          Status
        </th>

        <th
          align="left"
          className="bg-transparent border-y border-y-white/20 py-5 uppercase !font-medium text-white/60 p-4 px-6"
        >
          Last Updated
        </th>
        <th
          align="left"
          className="bg-transparent border-y border-y-white/20 py-5 uppercase !font-medium text-white/60 p-4 px-6"
        ></th>
      </thead>
      <tbody>
        <tr className="bg-white/5 text-white backdrop-blur-sm text-base border-style-decoration">
          <td className="p-5 px-6 border-l border-l-white/20 border-y border-y-white/20">
            749839
          </td>
          <td className="p-5 px-6 w-fit border-y border-y-white/20">
            Unable to create listing
          </td>
          <td className="p-5 px-6 border-y border-y-white/20">05 Jan 2024</td>
          <td className="h-full p-5 px-6 border-y border-y-white/20">
            <span className="hidden lg:block rounded-full px-6 py-2 text-xs lg:text-sm text-primary border border-primary w-full max-w-[145px] text-center">
              In-Process
            </span>
          </td>
          <td className="h-full p-5 px-6 border-y border-y-white/20">
            08 Jan 2024
          </td>

          <td className="p-5 pr-8 border-y border-y-white/20 border-r border-r-white/20">
            <div className="flex items-center gap-4 justify-end">
              <button className="hover:bg-primary relative w-fit hover:text-white justify-center text-sm lg:text-base flex items-center p-4 text-white border-style-decoration after:bottom-[-.5px] right-[-.5px] whitespace-nowrap">
                <img src="/assets/icons/icon-delete.svg" />
              </button>
              <Button isActive divClassName="w-full max-w-[150px]">
                View
              </Button>
            </div>
          </td>
        </tr>
        <tr className="bg-white/5 text-white backdrop-blur-sm text-base border-style-decoration">
          <td className="p-5 px-6 border-l border-l-white/20 border-y border-y-white/20">
            298403
          </td>
          <td className="p-5 px-6 w-fit border-y border-y-white/20">
            Payment not received
          </td>
          <td className="p-5 px-6 border-y border-y-white/20">12 Apr 2024</td>
          <td className="h-full p-5 px-6 border-y border-y-white/20">
            <span className="hidden lg:block rounded-full px-6 py-2 text-xs lg:text-sm text-white bg-white/20 border border-white w-full max-w-[145px] text-center">
              On Hold
            </span>
          </td>
          <td className="h-full p-5 px-6 border-y border-y-white/20">
            14 Apr 2024
          </td>

          <td className="p-5 pr-8 border-y border-y-white/20 border-r border-r-white/20">
            <div className="flex items-center gap-4 justify-end">
              <button className="hover:bg-primary relative w-fit hover:text-white justify-center text-sm lg:text-base flex items-center p-4 text-white border-style-decoration after:bottom-[-.5px] right-[-.5px] whitespace-nowrap">
                <img src="/assets/icons/icon-delete.svg" />
              </button>
              <Button isActive divClassName="w-full max-w-[150px]">
                View
              </Button>
            </div>
          </td>
        </tr>
        <tr className="bg-white/5 text-white backdrop-blur-sm text-base border-style-decoration">
          <td className="p-5 px-6 border-l border-l-white/20 border-y border-y-white/20">
            298403
          </td>
          <td className="p-5 px-6 w-fit border-y border-y-white/20">
            Create a new category
          </td>
          <td className="p-5 px-6 border-y border-y-white/20">05 Jan 2024</td>
          <td className="h-full p-5 px-6 border-y border-y-white/20">
            <span className="hidden lg:block rounded-full px-6 py-2 text-xs lg:text-sm text-primary border border-primary w-full max-w-[145px] text-center">
              In-Process
            </span>
          </td>
          <td className="h-full p-5 px-6 border-y border-y-white/20">
            14 Apr 2024
          </td>

          <td className="p-5 pr-8 border-y border-y-white/20 border-r border-r-white/20">
            <div className="flex items-center gap-4 justify-end">
              <button className="hover:bg-primary relative w-fit hover:text-white justify-center text-sm lg:text-base flex items-center p-4 text-white border-style-decoration after:bottom-[-.5px] right-[-.5px] whitespace-nowrap">
                <img src="/assets/icons/icon-delete.svg" />
              </button>
              <Button isActive divClassName="w-full max-w-[150px]">
                View
              </Button>
            </div>
          </td>
        </tr>
        <tr className="bg-white/5 text-white backdrop-blur-sm text-base border-style-decoration">
          <td className="p-5 px-6 border-l border-l-white/20 border-y border-y-white/20">
            298403
          </td>
          <td className="p-5 px-6 w-fit border-y border-y-white/20">
            Create a new category
          </td>
          <td className="p-5 px-6 border-y border-y-white/20">12 Apr 2024</td>
          <td className="h-full p-5 px-6 border-y border-y-white/20">
            <span className="hidden lg:block rounded-full px-6 py-2 text-xs lg:text-sm text-primary border border-primary bg-primary/20 w-full max-w-[145px] text-center">
              Completed
            </span>
          </td>
          <td className="h-full p-5 px-6 border-y border-y-white/20">
            14 Apr 2024
          </td>

          <td className="p-5 pr-8 border-y border-y-white/20 border-r border-r-white/20">
            <div className="flex items-center gap-4 justify-end">
              <button className="hover:bg-primary relative w-fit hover:text-white justify-center text-sm lg:text-base flex items-center p-4 text-white border-style-decoration after:bottom-[-.5px] right-[-.5px] whitespace-nowrap">
                <img src="/assets/icons/icon-delete.svg" />
              </button>
              <Button isActive divClassName="w-full max-w-[150px]">
                View
              </Button>
            </div>
          </td>
        </tr>
        <tr className="bg-white/5 text-white backdrop-blur-sm text-base border-style-decoration">
          <td className="p-5 px-6 border-l border-l-white/20 border-y border-y-white/20">
            298403
          </td>
          <td className="p-5 px-6 w-fit border-y border-y-white/20">
            Legal Frameworks & compliance
          </td>
          <td className="p-5 px-6 border-y border-y-white/20">05 Jan 2024</td>
          <td className="h-full p-5 px-6 border-y border-y-white/20">
            <span className="hidden lg:block rounded-full px-6 py-2 text-xs lg:text-sm text-primary border border-primary w-fit">
              In-Process
            </span>
          </td>
          <td className="h-full p-5 px-6 border-y border-y-white/20">
            14 Apr 2024
          </td>

          <td className="p-5 pr-8 border-y border-y-white/20 border-r border-r-white/20">
            <div className="flex items-center gap-4 justify-end">
              <button className="hover:bg-primary relative w-fit hover:text-white justify-center text-sm lg:text-base flex items-center p-4 text-white border-style-decoration after:bottom-[-.5px] right-[-.5px] whitespace-nowrap">
                <img src="/assets/icons/icon-delete.svg" />
              </button>
              <Button isActive divClassName="w-full max-w-[150px]">
                View
              </Button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableTickets;
