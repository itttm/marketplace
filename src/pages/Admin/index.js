import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TableUsers from "../../components/tabels/TableUsers";
import TableUsersTicket from "../../components/tabels/TableUsersTicket";
import TextInput from "../../components/commons/TextInput";
import Button from "../../components/commons/Button";
import TextAreaInput from "../../components/commons/TextAreaInput";
import CardUser from "../../components/cards/CardUser";
import DialogUserOverview from "../../components/dialogs/DialogUserOverview";
import DialogEditCategory from "../../components/dialogs/DialogEditCategory";
import DialogSupport from "../../components/dialogs/DialogSupport";
import DialogAddCategory from "../../components/dialogs/DialogAddCategory";

const Admin = () => {
  const [openDialog, setOpenDialog] = useState(null);
  const closeDialog = () => {
    setOpenDialog(null);
  };
  return (
    <div>
      <DialogUserOverview
        open={openDialog === "view-user"}
        onClose={closeDialog}
      />
      <DialogEditCategory
        open={openDialog === "edit-category"}
        onClose={closeDialog}
      />
      <DialogAddCategory
        open={openDialog === "add-category"}
        onClose={closeDialog}
      />
      <DialogSupport open={openDialog === "support"} onClose={closeDialog} />
      <Header isLogin />
      <div className="container mx-auto px-5 py-32 lg:py-48 relative after:content-[''] after:w-[360px] after:right-[100%] after:h-[360px] after:bottom-[80%] after:blur-[250px] after:bg-primary after:rounded-full after:absolute after:z-[1] before:content-[''] before:w-[360px] before:left-[100%] before:h-[360px] before:bottom-[50%] before:translate-y-[50%] before:blur-[250px] before:bg-primary before:rounded-full before:absolute before:z-[1]">
        <h1 className="font-aero uppercase text-white leading-[1.2] text-[32px] lg:text-[48px]">
          DASHBOARD
        </h1>

        <div className="flex items-start gap-8 mt-14">
          <div className="product-ask-section w-full">
            <h4 className="uppercase font-aero w-full bg-white/5 backdrop-blur-sm p-5 px-10 text-white text-base lg:text-xl">
              Users
            </h4>
            <div className="px-8 pb-1 hidden lg:block">
              <TableUsers />
            </div>
            <div className="p-5 space-y-4 lg:hidden">
              <CardUser
                numberId="647622"
                joiningDate={"28 Jan, 2024"}
                location={"Hamburg"}
                tickets={"3"}
                onDelete={() => console.log("Delete clicked")}
                onView={() => setOpenDialog("view-user")}
                userProfile="/assets/avatars/avatar_2.png"
                username={"Oliver Jones"}
              />
              <CardUser
                numberId="642383"
                joiningDate={"28 Jan, 2024"}
                location={"Bremen"}
                tickets={"5"}
                onDelete={() => console.log("Delete clicked")}
                onView={() => setOpenDialog("view-user")}
                userProfile="/assets/avatars/avatar.png"
                username={"Emily Johnson"}
              />
              <CardUser
                numberId="167827"
                joiningDate={"02 Mar, 2024"}
                location={"Lazzier"}
                tickets={"8"}
                onDelete={() => console.log("Delete clicked")}
                onView={() => setOpenDialog("view-user")}
                userProfile="/assets/avatars/avatar_4.png"
                username={"Sophia Ren"}
              />
              <CardUser
                numberId="647622"
                joiningDate={"14 Jan, 2024"}
                location={"Bremen"}
                tickets={"12"}
                onDelete={() => console.log("Delete clicked")}
                onView={() => setOpenDialog("view-user")}
                userProfile="/assets/avatars/avatar_3.png"
                username={"    Joshua Mer"}
              />
            </div>
          </div>
          <div className="hidden lg:block product-ask-section w-full max-w-[431px]">
            <h4 className="uppercase font-aero w-full bg-white/5 backdrop-blur-sm p-5 px-10 text-white text-base lg:text-xl">
              User Overview
            </h4>
            <div className="p-5">
              <div className="flex items-start justify-between w-full">
                <div className="flex items-center space-x-2 lg:space-x-4">
                  <img
                    src="/assets/avatars/avatar.png"
                    className=" max-w-[32px] lg:max-w-[74px] border-style-decoration object-cover"
                  />
                  <div className="flex flex-col items-start">
                    <span className="text-sm lg:text-xl text-white">
                      Emily Johnson
                    </span>
                    <div className="text-[10px] lg:text-base flex items-center text-primary">
                      <img
                        src="/assets/icons/icon-verified.svg"
                        className="max-w-[12px] lg:max-w-[unset] mr-1 lg:mr-2"
                      />{" "}
                      Verified
                    </div>
                  </div>
                </div>

                <img
                  src="/assets/icons/icon-more-vert.svg"
                  className="invert group-hover:invert-0 cursor-pointer mt-2"
                />
              </div>

              <div className="mt-6">
                <h4 className="uppercase text-white/60 text-sm">
                  Key statistics
                </h4>

                <div className="">
                  <div className="flex items-center gap-4 py-4">
                    <div className="bg-primary-gradient border-style-decoration p-4 w-fit">
                      <img src="/assets/icons/icon-rows.svg" />
                    </div>
                    <div>
                      <h4 className="text-white/60 text-sm">Total Listings</h4>
                      <span className="text-xl text-white block mt-1">24</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 py-4 border-y border-y-white/20">
                    <div className="bg-primary-gradient border-style-decoration p-4 w-fit">
                      <img src="/assets/icons/icon-shopping-bag.svg" />
                    </div>
                    <div>
                      <h4 className="text-white/60 text-sm">Total Purchases</h4>
                      <span className="text-xl text-white block mt-1">45</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 py-4">
                    <div className="bg-primary-gradient border-style-decoration p-4 w-fit">
                      <img src="/assets/icons/icon-rows.svg" />
                    </div>
                    <div>
                      <h4 className="text-white/60 text-sm">Total Sales</h4>
                      <span className="text-xl text-white block mt-1">
                        $2300
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-8 mt-14">
          <div className="product-ask-section w-full lg:max-w-[560px]">
            <h4 className="uppercase font-aero w-full bg-white/5 backdrop-blur-sm p-5 px-10 text-white text-base lg:text-xl">
              User tickets
            </h4>
            <div className="p-4 lg:px-8 pb-2">
              <TableUsersTicket onClick={() => setOpenDialog("support")} />
            </div>
          </div>
          <div className="product-ask-section w-full hidden lg:block">
            <h4 className="uppercase font-aero w-full bg-white/5 backdrop-blur-sm p-5 px-10 text-white text-base lg:text-xl">
              support
            </h4>
            <div className="p-5">
              <div className="h-[17rem] overflow-y-auto no-scrollbar space-y-6">
                <div className="flex flex-row-reverse items-start gap-6">
                  <img
                    src="/assets/avatars/avatar_2.png"
                    className="border-style-decoration max-w-[48px]"
                  />
                  <div className="flex flex-col items-end">
                    <div className="border-style-decoration p-4 px-6 bg-white/5 backdrop-blur-sm">
                      <span className="uppercase text-xs lg:text-sm text-white/60 font-medium block">
                        Client
                      </span>
                      <p className="text-white text-sm lg:text-base mt-1">
                        I am not able to create a listing
                      </p>
                    </div>
                    <span className="text-white/40 text-sm mt-2 block">
                      11:32 AM
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="border-style-decoration ">
                    <img
                      src="/assets/logos/card-marketplace.svg"
                      className="max-w-[48px]"
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <div className="border-style-decoration p-4 px-6 bg-[#5CC9F8] backdrop-blur-sm">
                      <span className="uppercase text-xs lg:text-sm text-black/60 font-medium block">
                        card shop exchange
                      </span>
                      <p className="text-black text-sm lg:text-base mt-1">
                        We have raised a ticket with number 634572. Our team
                        will get back to you shortly.
                      </p>
                    </div>
                    <span className="text-white/40 text-sm mt-2 block">
                      11:32 AM
                    </span>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="flex flex-col lg:flex-row items-center pt-8 gap-4">
                <TextInput
                  divClassName="bg-white/5 backdrop-blur-sm"
                  placeholder="How can we help?"
                  inputClassName="placeholder:text-white/60"
                  endIcon={
                    <button className="flex justify-center items-center bg-primary-gradient p-1.5 mr-[-10px]">
                      <img src="/assets/icons/icon-upward.svg" />
                    </button>
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div className="product-ask-section w-full mt-14">
          <h4 className="uppercase font-aero w-full bg-white/5 backdrop-blur-sm p-5 px-10 text-white text-base lg:text-xl">
            MANAGE CATEGORIES
          </h4>
          <div>
            <div className="p-5 pb-8 border-b-2 border-b-white/20">
              <h4 className="uppercase font-aero w-full text-white text-base lg:text-xl mt-4 my-8">
                live CATEGORIES
              </h4>

              <div className="flex flex-wrap gap-5 ">
                <button className="border-style-decoration flex items-center justify-between text-white p-5 py-3 w-full lg:max-w-[200px]">
                  Zelda{" "}
                  <button className="p-2 bg-primary-gradient">
                    <img src="/assets/icons/icon-close.svg" />
                  </button>
                </button>
                <button className="border-style-decoration flex items-center justify-between text-white p-5 py-3 w-full lg:max-w-[200px]">
                  Formula 1{" "}
                  <button className="p-2 bg-primary-gradient">
                    <img src="/assets/icons/icon-close.svg" />
                  </button>
                </button>
                <button className="border-style-decoration flex items-center justify-between text-white p-5 py-3 w-full lg:max-w-[200px]">
                  Naruto{" "}
                  <button className="p-2 bg-primary-gradient">
                    <img src="/assets/icons/icon-close.svg" />
                  </button>
                </button>
                <button className="border-style-decoration flex items-center justify-between text-white p-5 py-3 w-full lg:max-w-[200px]">
                  One Piece{" "}
                  <button className="p-2 bg-primary-gradient">
                    <img src="/assets/icons/icon-close.svg" />
                  </button>
                </button>
                <button className="border-style-decoration flex items-center justify-between text-white p-5 py-3 w-full lg:max-w-[200px]">
                  Football{" "}
                  <button className="p-2 bg-primary-gradient">
                    <img src="/assets/icons/icon-close.svg" />
                  </button>
                </button>
                <button className="border-style-decoration flex items-center justify-between text-white p-5 py-3 w-full lg:max-w-[200px]">
                  AOT{" "}
                  <button className="p-2 bg-primary-gradient">
                    <img src="/assets/icons/icon-close.svg" />
                  </button>
                </button>
                <button className="border-style-decoration flex items-center justify-between text-white p-5 py-3 w-full lg:max-w-[200px]">
                  Pokemon{" "}
                  <button className="p-2 bg-primary-gradient">
                    <img src="/assets/icons/icon-close.svg" />
                  </button>
                </button>
                <button className="border-style-decoration flex items-center justify-between text-white p-5 py-3 w-full lg:max-w-[200px]">
                  WWE{" "}
                  <button className="p-2 bg-primary-gradient">
                    <img src="/assets/icons/icon-close.svg" />
                  </button>
                </button>
              </div>

              <Button isActive divClassName="!mt-5 lg:max-w-[580px]">
                Manage Categories
              </Button>
            </div>
            {/*  */}
            <div className="p-5 pb-8">
              <h4 className="uppercase font-aero w-full text-white text-base lg:text-xl mt-4 my-8">
                ALL CATEGORIES
              </h4>

              <div className="flex items-center gap-6">
                <div className="w-full">
                  <div className="space-y-4">
                    <button
                      className="border-style-decoration hover hover:!border-primary hover:after:!border-l-primary hover:after:!border-t-primary hover:before:!border-b-primary hover:!border-r-primary flex items-center justify-between text-white p-5 pr-3 py-3 w-full"
                      onClick={() => setOpenDialog("edit-category")}
                    >
                      Zelda{" "}
                      <button className="p-2 px-6 border-style-decoration hover:bg-white hover:text-[#141414]">
                        Make Live
                      </button>
                    </button>
                    <button
                      className="border-style-decoration hover hover:!border-primary hover:after:!border-l-primary hover:after:!border-t-primary hover:before:!border-b-primary hover:!border-r-primary flex items-center justify-between text-white p-5 pr-3 py-3 w-full"
                      onClick={() => setOpenDialog("edit-category")}
                    >
                      Formula 1{" "}
                      <button className="p-2 px-6 border-style-decoration hover:bg-white hover:text-[#141414]">
                        Make Live
                      </button>
                    </button>
                    <button
                      className="border-style-decoration hover hover:!border-primary hover:after:!border-l-primary hover:after:!border-t-primary hover:before:!border-b-primary hover:!border-r-primary flex items-center justify-between text-white p-5 pr-3 py-3 w-full"
                      onClick={() => setOpenDialog("edit-category")}
                    >
                      Naruto{" "}
                      <button className="p-2 px-6 border-style-decoration hover:bg-white hover:text-[#141414]">
                        Make Live
                      </button>
                    </button>
                    <button
                      className="border-style-decoration hover hover:!border-primary hover:after:!border-l-primary hover:after:!border-t-primary hover:before:!border-b-primary hover:!border-r-primary flex items-center justify-between text-white p-5 pr-3 py-3 w-full"
                      onClick={() => setOpenDialog("edit-category")}
                    >
                      One Piece{" "}
                      <button className="p-2 px-6 border-style-decoration hover:bg-white hover:text-[#141414]">
                        Make Live
                      </button>
                    </button>
                    <button
                      className="border-style-decoration hover hover:!border-primary hover:after:!border-l-primary hover:after:!border-t-primary hover:before:!border-b-primary hover:!border-r-primary flex items-center justify-between text-white p-5 pr-3 py-3 w-full"
                      onClick={() => setOpenDialog("edit-category")}
                    >
                      Football{" "}
                      <button className="p-2 px-6 border-style-decoration hover:bg-white hover:text-[#141414]">
                        Make Live
                      </button>
                    </button>
                    <button
                      className="border-style-decoration hover hover:!border-primary hover:after:!border-l-primary hover:after:!border-t-primary hover:before:!border-b-primary hover:!border-r-primary flex items-center justify-between text-white p-5 pr-3 py-3 w-full"
                      onClick={() => setOpenDialog("edit-category")}
                    >
                      aot{" "}
                      <button className="p-2 px-6 border-style-decoration hover:bg-white hover:text-[#141414]">
                        Make Live
                      </button>
                    </button>
                    <button
                      className="border-style-decoration hover hover:!border-primary hover:after:!border-l-primary hover:after:!border-t-primary hover:before:!border-b-primary hover:!border-r-primary flex items-center justify-between text-white p-5 pr-3 py-3 w-full"
                      onClick={() => setOpenDialog("edit-category")}
                    >
                      pokemon{" "}
                      <button className="p-2 px-6 border-style-decoration hover:bg-white hover:text-[#141414]">
                        Make Live
                      </button>
                    </button>
                    <button
                      className="border-style-decoration hover hover:!border-primary hover:after:!border-l-primary hover:after:!border-t-primary hover:before:!border-b-primary hover:!border-r-primary flex items-center justify-between text-white p-5 pr-3 py-3 w-full"
                      onClick={() => setOpenDialog("edit-category")}
                    >
                      wwe{" "}
                      <button className="p-2 px-6 border-style-decoration hover:bg-white hover:text-[#141414]">
                        Make Live
                      </button>
                    </button>
                  </div>

                  <Button
                    isActive
                    divClassName="!mt-5"
                    onClick={() => setOpenDialog("add-category")}
                  >
                    Add new category
                  </Button>
                  {/*  */}
                </div>

                <div className="border-style-decoration p-5 w-full hidden lg:block">
                  <div className="flex items-end gap-6">
                    <img src="/assets/images/image_pokemon.svg" />

                    <div>
                      <h4 className="text-[36px] font-aero text-white uppercase">
                        POKEMON
                      </h4>

                      <button className="p-2 mt-4 text-white px-6 border-style-decoration hover:bg-white hover:text-[#141414]">
                        Edit Image
                      </button>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col gap-8">
                    <label className="w-full  text-white">
                      <span className="w-full flex items-center justify-between  mb-3 ">
                        <span className="text-base lg:text-xl block">
                          Category Name
                        </span>
                        <span className="border-style-decoration p-2 px-2.5">
                          <img src="/assets/icons/icon-pen-border.svg" />
                        </span>
                      </span>
                      <TextInput
                        placeholder="Pokemon"
                        inputClassName="placeholder:text-white/60"
                      />
                    </label>
                    <label className="w-full  text-white">
                      <span className="w-full flex items-center justify-between  mb-3 ">
                        <span className="text-base lg:text-xl block">
                          Description
                        </span>
                        <span className="border-style-decoration p-2 px-2.5">
                          <img src="/assets/icons/icon-pen-border.svg" />
                        </span>
                      </span>
                      <TextAreaInput
                        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
                        textAreaClassName="placeholder:text-white/60 h-[110px]"
                      />
                    </label>
                  </div>
                  {/*  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Admin;
