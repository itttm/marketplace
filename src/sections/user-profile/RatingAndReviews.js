import React from "react";
import CardReview from "../../components/cards/CardReview";

const reviews = [
  {
    id: 1,
    rating: 5,
    timeAgo: "1 week ago",
    title: "Excellent Product",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    username: "Oliver Jones",
    avatarSrc: "/assets/avatars/avatar.png",
  },
  {
    id: 2,
    rating: 5,
    timeAgo: "1 week ago",
    title: "Play Time!",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    username: "Emily Johnson",
    avatarSrc: "/assets/avatars/avatar.png",
  },
  {
    id: 3,
    rating: 5,
    timeAgo: "1 week ago",
    title: "Good Quality",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    username: "Sophia Ren",
    avatarSrc: "/assets/avatars/avatar.png",
  },
  {
    id: 4,
    rating: 5,
    timeAgo: "1 week ago",
    title: "Excellent Product",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    username: "Sophie",
    avatarSrc: "/assets/avatars/avatar.png",
  },
  {
    id: 5,
    rating: 5,
    timeAgo: "1 week ago",
    title: "Play Time!",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    username: "Joshua Mer",
    avatarSrc: "/assets/avatars/avatar.png",
  },
  {
    id: 6,
    rating: 5,
    timeAgo: "1 week ago",
    title: "Good Quality",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    username: "Lucas Moore",
    avatarSrc: "/assets/avatars/avatar.png",
  },
];

const RatingAndReviews = () => {
  return (
    <div className="mt-24">
      <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-20">
        <div className="w-full max-w-[270px] flex flex-col">
          <h2 className="font-aero text-lg lg:text-[36px] uppercase text-white leading-[1.1]">
            reviews & <br /> ratings
          </h2>

          <button className="hidden lg:flex hover:bg-primary relative w-full hover:text-white !border-primary mt-auto after:!border-t-primary after:!border-l-primary before:!border-b-primary before:!border-r-primary justify-center text-sm lg:text-base items-center p-4 px-6 text-white border-style-decoration after:bottom-[-.5px] right-[-.5px] whitespace-nowrap">
            Write a review
          </button>
        </div>
        <div className="w-full flex items-center justify-center gap-6">
          <div className="w-full max-w-[380px] space-y-2 lg:space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center">
                <span className="text-white text-xs lg:text-xl inline-block mr-1">
                  5
                </span>
                <img
                  src="/assets/icons/icon-star-fill-white.svg"
                  className="max-w-[14px] lg:max-w-[unset]"
                />
              </div>
              <div className="w-full h-[7px] max-w-[340px] bg-white relative">
                <div className="absolute w-[85%] top-0 left-0 h-full bg-primary"></div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center">
                <span className="text-white text-xs lg:text-xl inline-block mr-1">
                  4
                </span>
                <img
                  src="/assets/icons/icon-star-fill-white.svg"
                  className="max-w-[14px] lg:max-w-[unset]"
                />
              </div>
              <div className="w-full h-[7px] max-w-[340px] bg-white relative">
                <div className="absolute w-[75%] top-0 left-0 h-full bg-primary"></div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center">
                <span className="text-white text-xs lg:text-xl inline-block mr-1">
                  3
                </span>
                <img
                  src="/assets/icons/icon-star-fill-white.svg"
                  className="max-w-[14px] lg:max-w-[unset]"
                />
              </div>
              <div className="w-full h-[7px] max-w-[340px] bg-white relative">
                <div className="absolute w-[60%] top-0 left-0 h-full bg-primary"></div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center">
                <span className="text-white text-xs lg:text-xl inline-block mr-1">
                  2
                </span>
                <img
                  src="/assets/icons/icon-star-fill-white.svg"
                  className="max-w-[14px] lg:max-w-[unset]"
                />
              </div>
              <div className="w-full h-[7px] max-w-[340px] bg-white relative">
                <div className="absolute w-[15%] top-0 left-0 h-full bg-primary"></div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center">
                <span className="text-white text-xs lg:text-xl inline-block mr-1">
                  1
                </span>
                <img
                  src="/assets/icons/icon-star-fill-white.svg"
                  className="max-w-[14px] lg:max-w-[unset]"
                />
              </div>
              <div className="w-full h-[7px] max-w-[340px] bg-white relative">
                <div className="absolute w-[25%] top-0 left-0 h-full bg-primary"></div>
              </div>
            </div>
          </div>

          {/* mbile */}
          <div className="w-fit lg:hidden">
            <h4 className="font-aero text-[32px] lg:text-[48px] uppercase text-white">
              4.9
            </h4>
            <div className="flex items-center">
              <img
                src="/assets/icons/icon-star-fill.svg"
                className="w-[20px] lg:w-[28px]"
              />
              <img
                src="/assets/icons/icon-star-fill.svg"
                className="w-[20px] lg:w-[28px]"
              />
              <img
                src="/assets/icons/icon-star-fill.svg"
                className="w-[20px] lg:w-[28px]"
              />
              <img
                src="/assets/icons/icon-star-fill.svg"
                className="w-[20px] lg:w-[28px]"
              />
              <img
                src="/assets/icons/icon-star-fill.svg"
                className="w-[20px] lg:w-[28px]"
              />
            </div>
            <span className="block text-xs lg:text-lg text-white whitespace-nowrap mt-1">
              Based on 48 Reviews
            </span>
          </div>
        </div>

        {/* mobile */}
        <button className=" lg:hidden hover:bg-primary relative w-full max-w-[195px] hover:text-white !border-primary mt-auto after:!border-t-primary after:!border-l-primary before:!border-b-primary before:!border-r-primary justify-center text-sm lg:text-base items-center p-4 px-6 text-white border-style-decoration after:bottom-[-.5px] right-[-.5px] whitespace-nowrap">
          Write a review
        </button>
        {/* end mobile */}
        {/* desktop */}
        <div className="hidden lg:block w-full max-w-[270px] ">
          <h4 className="font-aero text-[32px] lg:text-[48px] uppercase text-white">
            4.9
          </h4>
          <div className="flex items-center">
            <img
              src="/assets/icons/icon-star-fill.svg"
              className="w-[14px] lg:w-[28px]"
            />
            <img
              src="/assets/icons/icon-star-fill.svg"
              className="w-[14px] lg:w-[28px]"
            />
            <img
              src="/assets/icons/icon-star-fill.svg"
              className="w-[14px] lg:w-[28px]"
            />
            <img
              src="/assets/icons/icon-star-fill.svg"
              className="w-[14px] lg:w-[28px]"
            />
            <img
              src="/assets/icons/icon-star-fill.svg"
              className="w-[14px] lg:w-[28px]"
            />
          </div>
          <span className="block text-lg text-white whitespace-nowrap mt-1">
            Based on 48 Reviews
          </span>
        </div>
        {/*  */}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 mt-14 ;g:mt-32 gap-5">
        {reviews.map((review) => (
          <CardReview
            key={review.id}
            rating={review.rating}
            timeAgo={review.timeAgo}
            title={review.title}
            description={review.description}
            username={review.username}
            avatarSrc={review.avatarSrc}
          />
        ))}
      </div>
      <div className="w-full lg:w-fit mx-auto mt-8 lg:mt-16">
        <button className="hover:bg-white w-full  lg:w-fit hover:text-[#141414] justify-center flex items-center p-4 px-6 text-white border-style-decoration after:bottom-[-.5px] right-[-.5px]">
          Load More
        </button>
      </div>
    </div>
  );
};

export default RatingAndReviews;
