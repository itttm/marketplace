import React from "react";
import Button from "../commons/Button";

const CardItem = ({
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
        <p
          className={`text-white/60 text-[10px] lg:text-sm mt-3 font-light ${descriptionClassName}`}
        >
          {description}
        </p>
      </div>

      <Button
        divClassName={`text-sm lg:text-base ${buttonClassName}`}
        onClick={onButtonClick}
      >
        {buttonText}
      </Button>
    </div>
  </div>
);

export default CardItem;
