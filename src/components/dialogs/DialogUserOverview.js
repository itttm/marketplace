"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

export default function DialogUserOverview({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-[#000] backdrop-blur-sm bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden product-ask-section bg-[#141414] backdrop-blur-sm shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in w-full max-w-[431px]"
          >
            <div className="w-full ">
              <div className="uppercase font-aero w-full bg-white/5 backdrop-blur-sm p-5  text-white text-base lg:text-xl  flex items-center justify-between">
                User Overview{" "}
                <button onClick={onClose}>
                  <img src="/assets/icons/icon-close.svg" className="invert" />
                </button>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between w-full">
                  <div className="flex items-center space-x-2 lg:space-x-4">
                    <img
                      src="/assets/avatars/avatar.png"
                      className=" max-w-[50px] lg:max-w-[74px] border-style-decoration object-cover"
                      alt="User Avatar"
                    />
                    <div className="flex flex-col items-start">
                      <span className="text-sm lg:text-xl text-white">
                        Emily Johnson
                      </span>
                      <div className="text-[10px] lg:text-base flex items-center text-primary">
                        <img
                          src="/assets/icons/icon-verified.svg"
                          className="max-w-[12px] lg:max-w-[unset] mr-1 lg:mr-2"
                          alt="Verified Icon"
                        />
                        Verified
                      </div>
                    </div>
                  </div>
                  <img
                    src="/assets/icons/icon-more-vert.svg"
                    className="invert group-hover:invert-0 cursor-pointer mt-2"
                    alt="More Options"
                  />
                </div>

                <div className="mt-6">
                  <h4 className="uppercase text-white/60 text-left text-sm">
                    Key statistics
                  </h4>

                  <div className="">
                    <div className="flex items-center gap-4 py-4">
                      <div className="bg-primary-gradient border-style-decoration p-3.5 w-fit">
                        <img
                          src="/assets/icons/icon-rows.svg"
                          alt="Icon"
                          className="max-w-[24px] lg:max-w-[unset]"
                        />
                      </div>
                      <div>
                        <h4 className="text-white/60 text-sm">
                          Total Listings
                        </h4>
                        <span className="text-xl text-white block mt-1">
                          24
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 py-4 border-y border-y-white/20">
                      <div className="bg-primary-gradient border-style-decoration p-3.5 w-fit">
                        <img
                          src="/assets/icons/icon-shopping-bag.svg"
                          alt="Icon"
                          className="max-w-[24px] lg:max-w-[unset]"
                        />
                      </div>
                      <div>
                        <h4 className="text-white/60 text-sm">
                          Total Purchases
                        </h4>
                        <span className="text-xl text-white block mt-1">
                          45
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 py-4">
                      <div className="bg-primary-gradient border-style-decoration p-3.5 w-fit">
                        <img
                          src="/assets/icons/icon-rows.svg"
                          alt="Icon"
                          className="max-w-[24px] lg:max-w-[unset]"
                        />
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
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
