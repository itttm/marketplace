import React from "react";
import Button from "../commons/Button";

const TableUsersTicket = ({ onClick }) => {
  return (
    <table
      className="border-separate w-full mt-[-15px]"
      style={{ borderSpacing: "0 15px" }}
    >
      <thead className="text-white !font-normal border-b border-b-white/20 relative after:content-[''] after:absolute after:w-[calc(100%+4rem)] after:h-[2px] after:bg-white/20 after:left-[-2rem] before:content-[''] before:absolute before:bottom-0 before:left-[-2rem] before:w-[calc(100%+4rem)] before:h-[2px] before:bg-white/20">
        <th
          align="left"
          className="bg-transparent py-5 uppercase !font-medium text-white/60 p-3 px-6 text-xs lg:text-sm"
        >
          Ticket Id
        </th>
        <th
          align="left"
          className="bg-transparent py-5 uppercase !font-medium text-white/60 p-3 px-6 text-xs lg:text-sm"
        >
          Subject
        </th>
        <th
          align="left"
          className="bg-transparent py-5 uppercase !font-medium text-white/60 p-3 px-6 text-xs lg:text-sm"
        >
          Created On
        </th>
      </thead>
      <tbody>
        <tr
          className="bg-white/5 hover:bg-white hover:text-[#141414] group text-white backdrop-blur-sm text-xs lg:text-sm border-style-decoration"
          onClick={onClick}
        >
          <td className="p-3 lg:p-5 lg:px-6 border-l border-l-white/20 border-y border-y-white/20 text-xs lg:text-sm">
            749839
          </td>
          <td className="p-3 lg:p-5 lg:px-6 w-fit border-y border-y-white/20">
            Unable to create listing
          </td>
          <td className="p-3 lg:p-5 lg:px-6 border-y border-y-white/20">
            05 Jan 2024
          </td>
        </tr>
        <tr
          className="bg-white/5 hover:bg-white hover:text-[#141414] group text-white backdrop-blur-sm text-xs lg:text-sm border-style-decoration"
          onClick={onClick}
        >
          <td className="p-3 lg:p-5 lg:px-6 border-l border-l-white/20 border-y border-y-white/20">
            298403
          </td>
          <td className="p-3 lg:p-5 lg:px-6 w-fit border-y border-y-white/20">
            Payment not received
          </td>
          <td className="p-3 lg:p-5 lg:px-6 border-y border-y-white/20">
            12 Apr 2024
          </td>
        </tr>
        <tr
          className="bg-white/5 hover:bg-white hover:text-[#141414] group text-white backdrop-blur-sm text-xs lg:text-sm border-style-decoration"
          onClick={onClick}
        >
          <td className="p-3 lg:p-5 lg:px-6 border-l border-l-white/20 border-y border-y-white/20">
            298403
          </td>
          <td className="p-3 lg:p-5 lg:px-6 w-fit border-y border-y-white/20">
            Create a new category
          </td>
          <td className="p-3 lg:p-5 lg:px-6 border-y border-y-white/20">
            05 Jan 2024
          </td>
        </tr>
        <tr
          className="bg-white/5 hover:bg-white hover:text-[#141414] group text-white backdrop-blur-sm text-xs lg:text-sm border-style-decoration"
          onClick={onClick}
        >
          <td className="p-3 lg:p-5 lg:px-6 border-l border-l-white/20 border-y border-y-white/20">
            298403
          </td>
          <td className="p-3 lg:p-5 lg:px-6 w-fit border-y border-y-white/20">
            Create a new category
          </td>
          <td className="p-3 lg:p-5 lg:px-6 border-y border-y-white/20">
            12 Apr 2024
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableUsersTicket;
