import React from "react";
import Button from "../commons/Button";

const CardTicket = ({
  status = "In-Process",
  ticketId,
  subject,
  createdOn,
  lastUpdated,
  onDelete,
  onView,
}) => {
  const getStatusStyles = () => {
    switch (status) {
      case "Completed":
        return "text-primary border-primary bg-primary/20";
      case "On Hold":
        return "text-white bg-white/20 border-white";
      default: // "In-Process"
        return "text-primary border-primary";
    }
  };

  return (
    <div className="border-style-decoration bg-white/5 backdrop-blur-sm p-5">
      <span
        className={` rounded-full px-6 py-2 text-xs lg:text-sm w-full max-w-[145px] text-center border ${getStatusStyles()}`}
      >
        {status}
      </span>

      <div className="grid grid-cols-2 gap-4 mt-8 mb-4">
        <div>
          <span className="block text-white/60 uppercase text-xs">
            Ticket ID
          </span>
          <span className="block text-white text-xs mt-1">{ticketId}</span>
        </div>
        <div>
          <span className="block text-white/60 uppercase text-xs">Subject</span>
          <span className="block text-white text-xs mt-1">{subject}</span>
        </div>
        <div>
          <span className="block text-white/60 uppercase text-xs">
            Created on
          </span>
          <span className="block text-white text-xs mt-1">{createdOn}</span>
        </div>
        <div>
          <span className="block text-white/60 uppercase text-xs">
            Last updated
          </span>
          <span className="block text-white text-xs mt-1">{lastUpdated}</span>
        </div>
      </div>

      <div className="flex items-center gap-4 mt-5 justify-center">
        <button
          className="hover:bg-primary relative w-fit hover:text-white justify-center text-sm lg:text-base flex items-center p-4 text-white border-style-decoration after:bottom-[-.5px] right-[-.5px] whitespace-nowrap"
          onClick={onDelete}
        >
          <img src="/assets/icons/icon-delete.svg" alt="Delete" />
        </button>

        <Button isActive divClassName="w-full" onClick={onView}>
          View
        </Button>
      </div>
    </div>
  );
};

export default CardTicket;
