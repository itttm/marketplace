import React from "react";
import Button from "../commons/Button";

function CardOrder({
  productImage,
  rating = 5,
  productName,
  description,
  price,
  status,
  deliveryDate,
  userAvatar,
  userName,
  isVerified = false,
  deliveryStatus = "",
  onMessageClick,
  onCancelClick,
  onViewSummaryClick,
}) {
  const renderStars = () => {
    return Array.from({ length: 5 }).map((_, index) => (
      <img
        key={index}
        src="/assets/icons/icon-star-fill.svg"
        className={`w-[14px] lg:w-[24px] ${index < rating ? "" : "opacity-30"}`}
        alt="star"
      />
    ));
  };

  // Conditional styling and text for status
  const statusStyles =
    status === "In-Process"
      ? "text-primary bg-primary/20 border-primary"
      : "text-white bg-white/20 border-white";
  const statusText = status === "In-Process" ? "In-Process" : "Recently Viewed";

  return (
    <div className="border-style-decoration p-5">
      <div className="flex items-center gap-4">
        <img
          src={productImage}
          alt={productName}
          className="border-style-decoration max-w-[140px] lg:max-w-[unset]"
        />
        <div className="space-y-1">
          <div className="flex items-center">{renderStars()}</div>
          <h4 className="w-full max-w-[240px] lg:max-w-[300px] font-aero text-sm lg:text-xl text-white leading-[1.1] uppercase">
            {productName}
          </h4>
          <p className="text-xs text-white/60 mt-4 lg:mt-0 max-w-[200px]">
            {description}
          </p>
          <span className="gradient-text font-aero text-base lg:text-2xl block">
            ${price}
          </span>
        </div>
      </div>

      <div className="flex flex-row-reverse mt-4 items-start justify-between h-full">
        <span
          className={`block rounded-full px-4 py-1 text-[10px] lg:text-sm w-fit border ${statusStyles}`}
        >
          {statusText}
        </span>

        <div className="flex flex-col items-start lg:flex-col gap-1 mt-auto">
          <span className="text-xs lg:text-sm text-primary block whitespace-nowrap">
            {deliveryStatus}
          </span>
          <span className="text-xs lg:text-sm text-white block whitespace-nowrap">
            {deliveryDate}
          </span>
        </div>
      </div>

      <div className="pt-5 flex items-center justify-between border-t border-t-white/20 mt-5">
        <div className="flex items-center space-x-2 lg:space-x-4">
          <img
            src={userAvatar}
            alt={userName}
            className="max-w-[32px] lg:max-w-[48px] border-style-decoration object-cover"
          />
          <div className="flex flex-col items-start">
            <span className="text-sm lg:text-base text-white">{userName}</span>
            {isVerified && (
              <div className="text-[10px] lg:text-base flex items-center text-primary">
                <img
                  src="/assets/icons/icon-verified.svg"
                  className="max-w-[12px] lg:max-w-[unset] mr-1 lg:mr-2"
                  alt="Verified"
                />{" "}
                Verified
              </div>
            )}
          </div>
        </div>

        <button
          onClick={onMessageClick}
          className="w-full !border !border-primary text-primary text-[10px] lg:text-base flex justify-center items-center p-1.5 px-3 lg:p-3 lg:px-6 border-style-decoration max-w-[130px] lg:max-w-[185px] after:!border-l-primary after:!border-t-primary before:!border-b-primary before:border-r-primary"
        >
          <img
            src="/assets/icons/icon-chat.svg"
            className="max-w-[14px] lg:max-w-[unset] mr-1 lg:mr-2 mt-1"
            alt="Chat"
          />{" "}
          Send message
        </button>
      </div>

      <div className="mt-6 flex flex-col">
        <button
          onClick={onViewSummaryClick}
          className="hover:bg-primary relative w-full hover:text-white !border-primary after:!border-t-primary after:!border-l-primary before:!border-b-primary before:!border-r-primary justify-center text-sm lg:text-base flex items-center p-4 px-6 text-white border-style-decoration after:bottom-[-.5px] right-[-.5px] whitespace-nowrap"
        >
          View order summary
        </button>
        <Button onClick={onCancelClick} isActive divClassName="!mt-3 lg:!mt-5">
          Cancel order
        </Button>
      </div>
    </div>
  );
}

export default CardOrder;
