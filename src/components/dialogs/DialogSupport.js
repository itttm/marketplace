"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import TextInput from "../commons/TextInput";

export default function DialogSupport({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-10  lg:hidden">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-[#000] backdrop-blur-sm bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden product-ask-section bg-[#141414] backdrop-blur-sm shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in w-full max-w-[431px]"
          >
            <div className="w-full ">
              <div className="uppercase font-aero w-full bg-white/5 backdrop-blur-sm p-5  text-white text-base lg:text-xl  flex items-center justify-between">
                support
                <button onClick={onClose}>
                  <img src="/assets/icons/icon-close.svg" className="invert" />
                </button>
              </div>
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
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
