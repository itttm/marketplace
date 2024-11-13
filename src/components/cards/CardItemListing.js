import React from "react";
import Button from "../commons/Button";

const CardItemListing = ({
  imageSrc,
  title = "Item Title",
  quantity = "",
  price = "$0.00",
  description = "Item description goes here.",
  buttonText = "Buy Now",
  cardClassName = "",
  imageClassName = "",
  titleClassName = "",
  priceClassName = "",
  descriptionClassName = "",
  buttonClassName = "",
  onButtonClick,
  isRare = false,
}) => (
  <div
    className={`p-3 lg:p-5 flex flex-col card-item w-full min-w-[160px] lg:min-h-[500px] bg-white/5 backdrop-blur-sm ${cardClassName}`}
  >
    <div className="relative">
      <img
        src={imageSrc || "/assets/images/image_item_default.png"}
        alt={title}
        className={`border-style-decoration w-full object-cover max-h-[250px] ${imageClassName}`}
      />
      {isRare && (
        <span className="text-white p-2 px-4 bg-primary-gradient absolute top-2 right-2  font-aero uppercase text-[8px] lg:text-xs">
          Rare find
        </span>
      )}
    </div>

    <div className="mt-4 flex flex-col justify-between h-full gap-6">
      <div>
        <div className="flex items-center justify-between gap-2">
          <h4
            className={`text-sm lg:text-2xl uppercase font-aero text-white leading-[1.4] ${titleClassName}`}
          >
            {title} {quantity}
          </h4>
          <span
            className={`text-[10px] lg:text-base text-primary uppercase font-aero ${priceClassName}`}
          >
            {price}
          </span>
        </div>
      </div>

      <div className="gap-4 flex flex-col">
        <button className="hover:bg-primary relative w-full hover:text-white !border-primary after:!border-t-primary after:!border-l-primary before:!border-b-primary before:!border-r-primary justify-center text-sm lg:text-base flex items-center p-4 px-6 text-white border-style-decoration after:bottom-[-.5px] right-[-.5px] whitespace-nowrap">
          View Product
        </button>
        <Button
          divClassName={`text-sm lg:text-base ${buttonClassName}`}
          onClick={onButtonClick}
          isActive
        >
          {buttonText}
        </Button>
      </div>
    </div>
  </div>
);

export default CardItemListing;
