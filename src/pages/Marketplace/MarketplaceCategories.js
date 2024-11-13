import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SidebarFilterMarketplaceCategories from "../../components/sidebars/SidebarFilterMarketplaceCategories";
import Dropdown from "../../components/commons/Dropdown";
import CardItem from "../../components/cards/CardItem";
import DialogMarketplaceFilterCategories from "../../components/dialogs/DialogMarketplaceFilterCategories";

const MarketplaceCategories = () => {
  const [openDialog, setOpenDialog] = useState(null);
  const options = [
    { value: "", label: "Popular" },
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const handleDropdownChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <Header isLogin/>
      <DialogMarketplaceFilterCategories
        open={openDialog === "filter"}
        onClose={() => setOpenDialog(null)}
      />
      <div className="container mx-auto px-5 text-white relative after:content-[''] after:w-[360px] after:right-[100%] after:h-[360px] after:bottom-[50%] after:blur-[250px] after:bg-primary after:rounded-full after:absolute after:z-[-1]">
        <div className="flex flex-col lg:flex-row py-24 lg:py-48 gap-16">
          <div className="w-full hidden lg:block lg:max-w-[285px] mt-9">
            <h4 className="text-xl mb-8">Filter By</h4>
            <SidebarFilterMarketplaceCategories />
          </div>
          <div className="w-full">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="flex items-center gap-2 mt-5 lg:mt-0 lg:gap-4 overflow-x-auto w-full no-scrollbar">
                <button className="hover:bg-white relative w-full lg:w-fit hover:text-[#141414] justify-center text-sm lg:text-base flex items-center p-4 px-6 text-white border-style-decoration after:bottom-[-.5px] right-[-.5px] whitespace-nowrap ">
                  All Cards
                </button>
                <button className="hover:bg-white relative w-full lg:w-fit hover:text-[#141414] justify-center text-sm lg:text-base flex items-center p-4 px-6 text-white border-style-decoration after:bottom-[-.5px] right-[-.5px] whitespace-nowrap">
                  Pokemon
                  <span className="cursor-pointer absolute top-2 right-2 hidden lg:block">
                    <img src="/assets/icons/icon-x-blue.svg" />
                  </span>
                </button>
                <button className="hover:bg-white relative w-full lg:w-fit hover:text-[#141414] justify-center text-sm lg:text-base flex items-center p-4 px-6 text-white border-style-decoration after:bottom-[-.5px] right-[-.5px] whitespace-nowrap">
                  Football
                  <span className="cursor-pointer absolute top-2 right-2 hidden lg:block">
                    <img src="/assets/icons/icon-x-blue.svg" />
                  </span>
                </button>
                <button className="hover:bg-white relative w-full lg:w-fit hover:text-[#141414] justify-center text-sm lg:text-base flex items-center p-4 px-6 text-white border-style-decoration after:bottom-[-.5px] right-[-.5px] whitespace-nowrap">
                  Baseball
                  <span className="cursor-pointer absolute top-2 right-2 hidden lg:block">
                    <img src="/assets/icons/icon-x-blue.svg" />
                  </span>
                </button>
                <button className="hover:bg-white relative w-full lg:w-fit hover:text-[#141414] justify-center text-sm lg:text-base flex items-center p-4 px-6 text-white border-style-decoration after:bottom-[-.5px] right-[-.5px] whitespace-nowrap">
                  Baseball
                  <span className="cursor-pointer absolute top-2 right-2 hidden lg:block">
                    <img src="/assets/icons/icon-x-blue.svg" />
                  </span>
                </button>
              </div>

              <div className="flex items-center gap-3 w-full lg:max-w-[285px] mt-5 lg:mt-0">
                <button
                  className="w-full lg:hidden hover:border-primary hover:text-white text-base flex justify-between items-center p-4 px-6 text-white border-style-decoration"
                  onClick={() => setOpenDialog("filter")}
                >
                  Filter By
                  <img
                    src="/assets/icons/icon-arrow-drop-down.svg"
                    className={`rotate-180`}
                  />
                </button>
                <Dropdown
                  options={options}
                  placeholder="Popular"
                  onChange={handleDropdownChange}
                  className="w-full lg:max-w-[285px]"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 mt-8">
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
              />
              <CardItem
                imageSrc="/assets/images/image_item_4.png"
                title="world of arcraft"
                price="$120.00"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.."
                buttonText="Buy Now"
                isRare
              />
              <CardItem
                imageSrc="/assets/images/image_item_5.png"
                title="pokemon pecharunt x 2"
                price="$29.99"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.."
                buttonText="Buy Now"
              />
              <CardItem
                imageSrc="/assets/images/image_item_6.png"
                title="Cubone x 3"
                price="$180.00"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.."
                buttonText="Buy Now"
              />
              <CardItem
                imageSrc="/assets/images/image_item_7.png"
                title="WIXOSS Wi-Cross Ele..."
                price="$12.99"
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
                imageSrc="/assets/images/image_item_8.png"
                title="world of arcraft"
                price="$120.00"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.."
                buttonText="Buy Now"
                cardClassName="hidden lg:flex"
              />
            </div>

            <div className="w-full lg:w-fit mx-auto mt-8 lg:mt-16">
              <button className="hover:bg-white w-full  lg:w-fit hover:text-[#141414] justify-center flex items-center p-4 px-6 text-white border-style-decoration after:bottom-[-.5px] right-[-.5px]">
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MarketplaceCategories;
