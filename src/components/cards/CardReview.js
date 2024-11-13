import React from "react";

const CardReview = ({
  rating = 5,
  timeAgo = "1 week ago",
  title = "Excellent product",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod..",
  username = "Emily Johnson",
  avatarSrc = "/assets/avatars/avatar.png",
}) => {
  // Create an array to render the correct number of stars based on the rating prop
  const stars = Array.from({ length: rating });

  return (
    <div className="border-style-decoration p-5 w-full bg-white/5 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {stars.map((_, index) => (
            <img
              key={index}
              src="/assets/icons/icon-star-fill.svg"
              className="w-[14px] lg:w-[24px]"
              alt="Star Icon"
            />
          ))}
        </div>
        <span className="text-white/60">{timeAgo}</span>
      </div>

      <h4 className="font-aero text-xl text-white my-5">{title}</h4>

      <span className="text-white text-sm block">{description}</span>

      <div className="border-style-decoration bg-white/5 backdrop-blur-sm p-2 pr-4 mt-8">
        <div className="flex justify-between w-full items-center space-x-2">
          <div className="flex items-center gap-2">
            <img
              src={avatarSrc}
              className="max-w-[32px] lg:max-w-[42px] border-style-decoration object-cover"
              alt="User Avatar"
            />
            <span className="text-sm lg:text-lg text-white whitespace-nowrap">
              {username}
            </span>
          </div>
          <div className="flex justify-center items-center bg-primary-gradient p-[2px]">
            <img
              src="/assets/icons/icon-check.svg"
              className="max-w-[14px] lg:max-w-[unset]"
              alt="Verified Icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardReview;
