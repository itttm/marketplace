import React from "react";
import CategoryCard from "../../components/cards/CardCategory";
import Button from "../../components/commons/Button";
import CardItem from "../../components/cards/CardItem";

const NewlyListedSection = () => {
  return (
    <div className="container px-5 mx-auto pb-24 lg:pb-48">
      <div className="flex flex-col lg:flex-row lg:items-center  justify-between">
        <h2 className="uppercase font-aero text-[32px] lg:text-[42px]  leading-[1.4] text-white">
          Newly Listed
        </h2>

        <div className="flex items-center gap-2 mt-5 lg:mt-0 lg:gap-4">
          <button className="hover:bg-white w-full lg:w-fit hover:text-[#141414] justify-center text-[11px] lg:text-base flex items-center p-3 px-4 lg:p-4 lg:px-6 text-white border-style-decoration after:bottom-[-.5px] right-[-.5px] ">
            All Cards
          </button>
          <button className="hover:bg-white w-full lg:w-fit hover:text-[#141414] justify-center text-[11px] lg:text-base flex items-center p-3 px-4 lg:p-4 lg:px-6 text-white border-style-decoration after:bottom-[-.5px] right-[-.5px]">
            Pokemon
          </button>
          <button className="hover:bg-white w-full lg:w-fit hover:text-[#141414] justify-center text-[11px] lg:text-base flex items-center p-3 px-4 lg:p-4 lg:px-6 text-white border-style-decoration after:bottom-[-.5px] right-[-.5px]">
            Football
          </button>
          <button className="hover:bg-white w-full lg:w-fit hover:text-[#141414] justify-center text-[11px] lg:text-base flex items-center p-3 px-4 lg:p-4 lg:px-6 text-white border-style-decoration after:bottom-[-.5px] right-[-.5px]">
            Baseball
          </button>
        </div>
      </div>

      <div className="flex gap-4 lg:gap-6 mt-8">
        <CardItem
          imageSrc="/assets/images/image_item_1.png"
          title="Cubone x 3"
          price="$180.00"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.."
          buttonText="Buy Now"
          isRare
        />
        <CardItem
          imageSrc="/assets/images/image_item_2.png"
          title="pokemon pecharunt x 2"
          price="$29.99"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.."
          buttonText="Buy Now"
        />
        <CardItem
          imageSrc="/assets/images/image_item_3.png"
          title="WIXOSS Wi-Cross Ele..."
          price="$12.99"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.."
          buttonText="Buy Now"
          cardClassName="hidden lg:flex"
        />
        <CardItem
          imageSrc="/assets/images/image_item_4.png"
          title="world of arcraft"
          price="$120.00"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.."
          buttonText="Buy Now"
          isRare
          cardClassName="hidden lg:flex"
        />
      </div>

      <div className="w-fit mx-auto mt-12 lg:mt-16">
        <ul className="flex items-center space-x-2">
          <li className="w-[8px] lg:w-[10px] h-[8px] lg:h-[10px] cursor-pointer bg-white"></li>
          <li className="w-[8px] lg:w-[10px] h-[8px] lg:h-[10px] cursor-pointer bg-white/30 backdrop-blur-sm"></li>
          <li className="w-[8px] lg:w-[10px] h-[8px] lg:h-[10px] cursor-pointer bg-white/30 backdrop-blur-sm"></li>
        </ul>
      </div>
    </div>
  );
};

export default NewlyListedSection;
