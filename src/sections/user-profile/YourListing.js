import React from "react";
import CardItemListing from "../../components/cards/CardItemListing";

const YourListing = () => {
  return (
    <div className="mt-10 lg:mt-24">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 mt-8">
        <CardItemListing
          imageSrc="/assets/images/image_item_2.png"
          title="pokemon pecharunt x 2"
          price="$29.99"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.."
          buttonText="View Product"
        />
        <CardItemListing
          imageSrc="/assets/images/image_item_1.png"
          title="Cubone x 3"
          price="$180.00"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.."
          buttonText="View Product"
          isRare
        />
        <CardItemListing
          imageSrc="/assets/images/image_item_3.png"
          title="WIXOSS Wi-Cross Ele..."
          price="$12.99"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.."
          buttonText="View Product"
        />
        <CardItemListing
          imageSrc="/assets/images/image_item_4.png"
          title="world of arcraft"
          price="$120.00"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.."
          buttonText="View Product"
          isRare
        />
        <CardItemListing
          imageSrc="/assets/images/image_item_5.png"
          title="pokemon pecharunt x 2"
          price="$29.99"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.."
          buttonText="View Product"
        />
        <CardItemListing
          imageSrc="/assets/images/image_item_6.png"
          title="Cubone x 3"
          price="$180.00"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.."
          buttonText="View Product"
        />
        <CardItemListing
          imageSrc="/assets/images/image_item_7.png"
          title="WIXOSS Wi-Cross Ele..."
          price="$12.99"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.."
          buttonText="View Product"
        />
        <CardItemListing
          imageSrc="/assets/images/image_item_8.png"
          title="world of arcraft"
          price="$120.00"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.."
          buttonText="View Product"
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

export default YourListing;
