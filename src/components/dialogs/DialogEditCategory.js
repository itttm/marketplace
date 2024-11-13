"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import TextAreaInput from "../commons/TextAreaInput";
import TextInput from "../commons/TextInput";

export default function DialogEditCategory({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-10 lg:hidden">
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
            <div className="w-full relative">
              <button onClick={onClose} className="absolute top-2 right-2">
                <img src="/assets/icons/icon-close.svg" className="invert" />
              </button>
              <div className="border-style-decoration p-5 w-full ">
                <div className="flex items-end gap-6">
                  <img
                    src="/assets/images/image_pokemon.svg"
                    className="max-w-[130px]"
                  />

                  <div>
                    <h4 className="text-[24px] font-aero text-white uppercase">
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
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
