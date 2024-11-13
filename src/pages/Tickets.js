import React, { useState } from "react";
import Dropdown from "../components/commons/Dropdown";
import TextInput from "../components/commons/TextInput";
import Header from "../components/Header";
import Button from "../components/commons/Button";
import Footer from "../components/Footer";
import TableTickets from "../components/tabels/TableTickets";
import CardTicket from "../components/cards/CardTicket";

const Tickets = () => {
  // State to keep track of the active tab
  const [activeTab, setActiveTab] = useState("all");

  // Function to handle tab clicks
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const options = [
    { value: "", label: "Filter By" },
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  const options2 = [
    { value: "", label: "Sort By" },
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  const options3 = [
    { value: "", label: "Date" },
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const handleDropdownChange = (event) => {
    console.log(event.target.value);
  };
  const handleDropdownChange2 = (event) => {
    console.log(event.target.value);
  };
  const handleDropdownChange3 = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <Header isLogin />
      <div className="container mx-auto px-5 py-32 lg:py-48 relative after:content-[''] after:w-[360px] after:right-[100%] after:h-[360px] after:bottom-[80%] after:blur-[250px] after:bg-primary after:rounded-full after:absolute after:z-[1]">
        <h1 className="font-aero uppercase text-white leading-[1.2] text-[32px] lg:text-[48px]">
          Tickets
        </h1>
        <div className="w-full  mt-12">
          <div className="flex flex-col lg:flex-row items-end gap-4 lg:gap-12 justify-between w-full">
            <TextInput
              placeholder="Search for cards"
              divClassName="flex lg:hidden max-w-[345px]"
            />
            <div className="flex items-center w-full gap-6">
              <Dropdown
                options={options}
                placeholder="Filter by"
                onChange={handleDropdownChange}
                className="w-full lg:max-w-[285px]"
              />
              <TextInput
                placeholder="Search for cards"
                divClassName="hidden lg:flex max-w-[345px]"
              />
              <Dropdown
                options={options2}
                placeholder="Sort by"
                onChange={handleDropdownChange2}
                className="w-full lg:max-w-[150px]"
              />
            </div>
            <button className="hover:bg-primary relative w-full lg:max-w-[215px] hover:text-white !border-primary after:!border-t-primary after:!border-l-primary before:!border-b-primary before:!border-r-primary justify-center text-sm lg:text-base flex items-center p-4 px-6 text-white border-style-decoration after:bottom-[-.5px] right-[-.5px] whitespace-nowrap">
              Create a New Ticket
            </button>
          </div>{" "}
          {/*  */}
          <ul className="w-full flex mt-12">
            <li
              className={`text-white text-center w-full pb-4 border-b-2 cursor-pointer text-xs lg:text-base ${
                activeTab === "all" ? "border-b-primary" : "border-b-white/20"
              }`}
              onClick={() => handleTabClick("all")}
            >
              All
            </li>
            <li
              className={`text-white text-center w-full pb-4 border-b-2 cursor-pointer text-xs lg:text-base ${
                activeTab === "on-hold"
                  ? "border-b-primary"
                  : "border-b-white/20"
              }`}
              onClick={() => handleTabClick("on-hold")}
            >
              On hold
            </li>
            <li
              className={`text-white text-center w-full pb-4 border-b-2 cursor-pointer text-xs lg:text-base ${
                activeTab === "in-progress"
                  ? "border-b-primary"
                  : "border-b-white/20"
              }`}
              onClick={() => handleTabClick("in-progress")}
            >
              In Progress
            </li>
            <li
              className={`text-white text-center w-full pb-4 border-b-2 cursor-pointer text-xs lg:text-base ${
                activeTab === "completed"
                  ? "border-b-primary"
                  : "border-b-white/20"
              }`}
              onClick={() => handleTabClick("completed")}
            >
              Completed
            </li>
          </ul>
          {/*  */}
          <div className="w-full hidden lg:block">
            <TableTickets />
          </div>
          {/* mobile */}
          <div className="mt-8 space-y-4 lg:hidden">
            <CardTicket
              status="In-Process"
              ticketId="749839"
              subject="Unable to create listing"
              createdOn="05 Jan 2024"
              lastUpdated="08 Jan 2024"
              onDelete={() => console.log("Delete clicked")}
              onView={() => console.log("View clicked")}
            />
            <CardTicket
              status="On Hold"
              ticketId="298403"
              subject="Payment not received"
              createdOn="12 Apr 2024"
              lastUpdated="14 Jan 2024"
              onDelete={() => console.log("Delete clicked")}
              onView={() => console.log("View clicked")}
            />
            <CardTicket
              status="In-Process"
              ticketId="298403"
              subject="Create a new category"
              createdOn="12 Apr 2024"
              lastUpdated="14 Apr 2024"
              onDelete={() => console.log("Delete clicked")}
              onView={() => console.log("View clicked")}
            />
            <CardTicket
              status="Completed"
              ticketId="298403"
              subject="Create a new category"
              createdOn="12 Apr 2024"
              lastUpdated="14 Apr 2024"
              onDelete={() => console.log("Delete clicked")}
              onView={() => console.log("View clicked")}
            />
            <CardTicket
              status="Completed"
              ticketId="298403"
              subject="Legal Frameworks & compliance"
              createdOn="05 Jan 2024"
              lastUpdated="08 Jan 2024"
              onDelete={() => console.log("Delete clicked")}
              onView={() => console.log("View clicked")}
            />
          </div>
          {/* <div className="w-full lg:w-fit mx-auto mt-8 lg:mt-16">
            <button className="hover:bg-white w-full  lg:w-fit hover:text-[#141414] justify-center flex items-center p-4 px-6 text-white border-style-decoration after:bottom-[-.5px] right-[-.5px]">
              Load More
            </button>
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tickets;
