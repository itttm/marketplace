"use client";

import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import Button from "../commons/Button";

export default function DialogConfirmation({
  open,
  onClose,
  type = "loading", // 'loading', 'failed', or 'confirmation'
  title, // Dynamic title from outside
  message, // Dynamic message from outside
  iconSrc = "",
  buttonText = "Close",
  onButtonClick,
}) {
  const getIcon = () => {
    switch (type) {
      case "loading":
        return (
          <img
            src="/assets/icons/icon-loading.svg"
            className="animate-spin"
            alt="Loading"
          />
        );
      case "failed":
        return <img src="/assets/icons/icon-warning-circle.svg" alt="Failed" />;
      default:
        return iconSrc ? <img src={iconSrc} alt="Icon" /> : null;
    }
  };

  return (
    <Dialog open={open} onClose={onClose} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-[#000] backdrop-blur-sm bg-opacity-75 transition-opacity"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 sm:p-0">
        <DialogPanel
            transition
            className="relative transform overflow-hidden product-ask-section rounded-lg bg-[#141414] backdrop-blur-sm shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in w-full max-w-[604px]"
          >
            <div className="w-full relative">
              <button
                onClick={onClose}
                className="absolute top-2 right-2 cursor-pointer z-[1]"
              >
                <img
                  src="/assets/icons/icon-close.svg"
                  alt="Close"
                  className="invert cursor-pointer"
                />
              </button>
              <div className="p-5 py-8 w-full flex flex-col items-center">
                {getIcon()}
                <div className="flex flex-col items-center mt-6">
                  {title && (
                    <span className="text-[28px] lg:text-[36px] text-white">
                      {title}
                    </span>
                  )}
                  {message && (
                    <span className="text-xs lg:text-sm text-white/60 max-w-[350px] text-center mt-2">
                      {message}
                    </span>
                  )}
                </div>
                <Button
                  onClick={onButtonClick || onClose}
                  isActive
                  divClassName="w-full mt-8 max-w-[90%]"
                >
                  {buttonText}
                </Button>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
