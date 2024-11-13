import React from "react";

const CategoryCard = ({
  title = "Category",
  description = "Description goes here.",
  imageSrc,
  iconSrc,
  cardClassName = "",
  buttonClassName = "",
  titleClassName = "",
  descriptionClassName = "",
}) => (
  <div
    className={`w-full min-w-[140px] max-w-[380px] flex flex-col justify-between card-category relative group ${cardClassName}`}
  >
    <button
      className={`absolute top-0 right-0 bg-white p-2 lg:p-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition ${buttonClassName}`}
    >
      <img
        src={iconSrc || "/assets/icons/icon-arrow-up-right.svg"}
        alt="icon"
        className="max-w-[12px] max-h-[12px] lg:max-w-[unset] lg:max-h-[unset]"
      />
    </button>
    <div className="p-4 py-6 pb-0 lg:p-6  mb-0 lg:mb-5">
      <h4
        className={`font-aero uppercase text-base lg:text-[32px] text-white leading-[1.2] mb-3 ${titleClassName}`}
      >
        {title}
      </h4>
      <p
        className={`text-[8px] lg:text-base text-white ${descriptionClassName}`}
      >
        {description}
      </p>
    </div>
    <img
      src={imageSrc || "/assets/decorations/category_default.png"}
      alt={title}
      className="max-h-[335px] object-cover w-full"
    />
  </div>
);

export default CategoryCard;
