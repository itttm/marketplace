import React from "react";
import CategoryCard from "../../components/cards/CardCategory";
import Button from "../../components/commons/Button";
import CardItem from "../../components/cards/CardItem";

const TopSellersSection = () => {
  return (
    <div className="container px-5 lg:px-20 mx-auto pb-24 lg:pb-48 relative after:content-[''] after:w-[360px] after:right-[100%] after:h-[360px] after:bottom-[80%] after:blur-[250px] after:bg-primary after:rounded-full after:absolute after:z-[1]">
      <div className="flex items-end md:items-center  justify-between">
        <h2 className="uppercase font-aero text-[32px] lg:text-[42px] leading-[1.4] text-white">
          Top Sellers
          {/* Top <br className="md:hidden" /> Sellers */}
        </h2>

        {/* <div className="flex items-center gap-4">
          <button className="hover:bg-white w-fit hover:text-[#141414] justify-center flex items-center p-4 px-6 text-white border-style-decoration after:bottom-[-.5px] right-[-.5px]">
            View All
          </button>
        </div> */}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-4 mt-8">
        <CardItem
          imageSrc="/assets/images/image_item_2.png"
          title="pokemon pecharunt x 2"
          price="$29.99"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.."
          buttonText="Buy Now"
        />
        <CardItem
          imageSrc="/assets/images/image_item_1.png"
          title="Cubone x 3"
          price="$180.00"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.."
          buttonText="Buy Now"
          isRare
        />
        <CardItem
          imageSrc="/assets/images/image_item_3.png"
          title="WIXOSS Wi-Cross Ele..."
          price="$12.99"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.."
          buttonText="Buy Now"
        />
        <CardItem
          imageSrc="/assets/images/image_item_4.png"
          title="world of arcraft"
          price="$120.00"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.."
          buttonText="Buy Now"
          isRare
          s
        />
      </div>

      <div className="w-full lg:w-fit mx-auto mt-8 lg:mt-16">
        <button className="hover:bg-white w-full  lg:w-fit hover:text-[#141414] justify-center flex items-center p-4 px-6 text-white border-style-decoration after:bottom-[-.5px] right-[-.5px]">
          Load More
        </button>
      </div>
    </div>
  );
};

export default TopSellersSection;
