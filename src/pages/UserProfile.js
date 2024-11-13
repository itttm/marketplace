import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PersonalInformation from "../sections/user-profile/PersonalInformation";
import PurchaseSalesHistory from "../sections/user-profile/PurchaseSalesHistory";
import RatingAndReviews from "../sections/user-profile/RatingAndReviews";
import YourListing from "../sections/user-profile/YourListing";
import PaymentSetting from "../sections/user-profile/PaymentSetting";
import DialogConfirmation from "../components/dialogs/DialogConfirmation";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("Purchase/Sale history");

  const tabs = [
    "Personal Information",
    "Purchase/Sale history",
    "Ratings and reviews",
    "Your Listings",
    "Payment settings",
  ];

  const renderActiveTabContent = () => {
    switch (activeTab) {
      case "Personal Information":
        return <PersonalInformation />;
      case "Purchase/Sale history":
        return <PurchaseSalesHistory />;
      case "Ratings and reviews":
        return <RatingAndReviews />;
      case "Your Listings":
        return <YourListing />;
      case "Payment settings":
        return <PaymentSetting />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Header isLogin/>
      <div className="container mx-auto px-5 py-32 lg:py-48 relative after:content-[''] after:w-[360px] after:right-[100%] after:h-[360px] after:bottom-[80%] after:blur-[250px] after:bg-primary after:rounded-full after:absolute after:z-[1]">
        <h1 className="font-aero uppercase text-white leading-[1.2] text-[32px] lg:text-[48px]">
          User Profile
        </h1>

        <div className="flex flex-wrap lg:flex-nowrap items-center gap-2 lg:gap-6 my-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative w-fit justify-center text-sm lg:text-base flex items-center p-4 px-6 whitespace-nowrap border-style-decoration after:bottom-[-.5px] right-[-.5px]
                ${
                  activeTab === tab
                    ? "bg-white text-black"
                    : "text-white hover:bg-white hover:text-[#141414]"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Render the content based on the active tab */}
        {renderActiveTabContent()}
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;
