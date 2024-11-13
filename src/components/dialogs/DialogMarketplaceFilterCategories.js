import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

export default function DialogMarketplaceFilterCategories({ open, onClose }) {
  // State to control open/close for each category
  const [openSections, setOpenSections] = useState({
    categories: true,
    gradingCompanies: false,
    grades: false,
    set: false,
    variations: false,
    price: false,
  });

  // Toggle function for each section
  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <Dialog open={open} onClose={onClose} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-[#000000] bg-opacity-60 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden bg-[#141414] border-t border-t-[#FFFFFF]/20 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 max-h-[75vh] overflow-y-auto w-full text-white"
          >
            <div className="bg-[#141414] px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <h4 className="text-base mb-6">Filter By</h4>

              <div className={`w-full space-y-6 `}>
                {/* Categories Section */}
                <div
                  className={`border-style-decoration bg-white/5 backdrop-blur-sm p-5 w-full`}
                >
                  <div>
                    <div
                      className="w-full flex justify-between items-center cursor-pointer"
                      onClick={() => toggleSection("categories")}
                    >
                      <span className="text-[14px]">Categories</span>
                      <img
                        src="/assets/icons/icon-arrow-drop-down.svg"
                        className={`${
                          !openSections.categories ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                    {openSections.categories && (
                      <div className="flex flex-col items-center gap-2 mt-5 lg:gap-4">
                        <button className="hover:border-primary w-full hover:text-white text-[11px] lg:text-base flex items-center p-3 px-4 lg:p-4 lg:px-6 text-white/40 border-style-decoration">
                          All Cards
                        </button>
                        <button className="hover:border-primary w-full hover:text-white text-[11px] lg:text-base flex items-center p-3 px-4 lg:p-4 lg:px-6 text-white/40 border-style-decoration">
                          Pokemon
                        </button>
                        <button className="hover:border-primary w-full hover:text-white text-[11px] lg:text-base flex items-center p-3 px-4 lg:p-4 lg:px-6 text-white/40 border-style-decoration">
                          Football
                        </button>
                        <button className="hover:border-primary w-full hover:text-white text-[11px] lg:text-base flex items-center p-3 px-4 lg:p-4 lg:px-6 text-white/40 border-style-decoration">
                          Baseball
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Grading Companies Section */}
                <div
                  className={`border-style-decoration bg-white/5 backdrop-blur-sm p-5 w-full`}
                >
                  <div>
                    <div
                      className="w-full flex justify-between items-center cursor-pointer"
                      onClick={() => toggleSection("gradingCompanies")}
                    >
                      <span className="text-[14px]">Grading Companies</span>
                      <img
                        src="/assets/icons/icon-arrow-drop-down.svg"
                        className={`${
                          !openSections.gradingCompanies ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                    {openSections.gradingCompanies && (
                      <div className="flex flex-col items-center gap-2 mt-5 lg:gap-4">
                        <button className="hover:border-primary w-full hover:text-white text-[11px] lg:text-base flex items-center p-3 px-4 lg:p-4 lg:px-6 text-white/40 border-style-decoration">
                          All Grading Companies
                        </button>
                        <button className="hover:border-primary w-full hover:text-white text-[11px] lg:text-base flex items-center p-3 px-4 lg:p-4 lg:px-6 text-white/40 border-style-decoration">
                          Grading Company 1
                        </button>
                        <button className="hover:border-primary w-full hover:text-white text-[11px] lg:text-base flex items-center p-3 px-4 lg:p-4 lg:px-6 text-white/40 border-style-decoration">
                          Grading Company 2
                        </button>
                        <button className="hover:border-primary w-full hover:text-white text-[11px] lg:text-base flex items-center p-3 px-4 lg:p-4 lg:px-6 text-white/40 border-style-decoration">
                          Grading Company 3
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Grades Section */}
                <div
                  className={`border-style-decoration bg-white/5 backdrop-blur-sm p-5 w-full`}
                >
                  <div>
                    <div
                      className="w-full flex justify-between items-center cursor-pointer"
                      onClick={() => toggleSection("grades")}
                    >
                      <span className="text-[14px]">Grades</span>
                      <img
                        src="/assets/icons/icon-arrow-drop-down.svg"
                        className={`${
                          !openSections.grades ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                    {openSections.grades && (
                      <div className="flex flex-col items-center gap-2 mt-5 lg:gap-4">
                        <button className="hover:border-primary w-full hover:text-white text-[11px] lg:text-base flex items-center p-3 px-4 lg:p-4 lg:px-6 text-white/40 border-style-decoration">
                          All Grades
                        </button>
                        <button className="hover:border-primary w-full hover:text-white text-[11px] lg:text-base flex items-center p-3 px-4 lg:p-4 lg:px-6 text-white/40 border-style-decoration">
                          Grade 1
                        </button>
                        <button className="hover:border-primary w-full hover:text-white text-[11px] lg:text-base flex items-center p-3 px-4 lg:p-4 lg:px-6 text-white/40 border-style-decoration">
                          Grade 2
                        </button>
                        <button className="hover:border-primary w-full hover:text-white text-[11px] lg:text-base flex items-center p-3 px-4 lg:p-4 lg:px-6 text-white/40 border-style-decoration">
                          Grade 3
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                {/* Sets Section */}
                <div
                  className={`border-style-decoration bg-white/5 backdrop-blur-sm p-5 w-full`}
                >
                  <div>
                    <div
                      className="w-full flex justify-between items-center cursor-pointer"
                      onClick={() => toggleSection("sets")}
                    >
                      <span className="text-[14px]">Sets</span>
                      <img
                        src="/assets/icons/icon-arrow-drop-down.svg"
                        className={`${!openSections.sets ? "rotate-180" : ""}`}
                      />
                    </div>
                    {openSections.sets && (
                      <div className="flex flex-col items-center gap-2 mt-5 lg:gap-4">
                        <button className="hover:border-primary w-full hover:text-white text-[11px] lg:text-base flex items-center p-3 px-4 lg:p-4 lg:px-6 text-white/40 border-style-decoration">
                          All Sets
                        </button>
                        <button className="hover:border-primary w-full hover:text-white text-[11px] lg:text-base flex items-center p-3 px-4 lg:p-4 lg:px-6 text-white/40 border-style-decoration">
                          Set 1
                        </button>
                        <button className="hover:border-primary w-full hover:text-white text-[11px] lg:text-base flex items-center p-3 px-4 lg:p-4 lg:px-6 text-white/40 border-style-decoration">
                          Set 2
                        </button>
                        <button className="hover:border-primary w-full hover:text-white text-[11px] lg:text-base flex items-center p-3 px-4 lg:p-4 lg:px-6 text-white/40 border-style-decoration">
                          Set 3
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                {/* Variations Section */}
                <div
                  className={`border-style-decoration bg-white/5 backdrop-blur-sm p-5 w-full`}
                >
                  <div>
                    <div
                      className="w-full flex justify-between items-center cursor-pointer"
                      onClick={() => toggleSection("variations")}
                    >
                      <span className="text-[14px]">Variations</span>
                      <img
                        src="/assets/icons/icon-arrow-drop-down.svg"
                        className={`${
                          !openSections.variations ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                    {openSections.variations && (
                      <div className="flex flex-col items-center gap-2 mt-5 lg:gap-4">
                        <button className="hover:border-primary w-full hover:text-white text-[11px] lg:text-base flex items-center p-3 px-4 lg:p-4 lg:px-6 text-white/40 border-style-decoration">
                          All Variations
                        </button>
                        <button className="hover:border-primary w-full hover:text-white text-[11px] lg:text-base flex items-center p-3 px-4 lg:p-4 lg:px-6 text-white/40 border-style-decoration">
                          Variation 1
                        </button>
                        <button className="hover:border-primary w-full hover:text-white text-[11px] lg:text-base flex items-center p-3 px-4 lg:p-4 lg:px-6 text-white/40 border-style-decoration">
                          Variation 2
                        </button>
                        <button className="hover:border-primary w-full hover:text-white text-[11px] lg:text-base flex items-center p-3 px-4 lg:p-4 lg:px-6 text-white/40 border-style-decoration">
                          Variation 3
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                {/* Variations Section */}
                <div
                  className={`border-style-decoration bg-white/5 backdrop-blur-sm p-5 w-full`}
                >
                  <div>
                    <div
                      className="w-full flex justify-between items-center cursor-pointer"
                      onClick={() => toggleSection("price")}
                    >
                      <span className="text-[14px]">Price</span>
                      <img
                        src="/assets/icons/icon-arrow-drop-down.svg"
                        className={`${!openSections.price ? "rotate-180" : ""}`}
                      />
                    </div>
                    {openSections.price && (
                      <div className="flex flex-col items-center gap-2 mt-5 lg:gap-4">
                        <button className="hover:border-primary w-full hover:text-white text-[11px] lg:text-base flex items-center p-3 px-4 lg:p-4 lg:px-6 text-white/40 border-style-decoration">
                          All Price
                        </button>
                        <button className="hover:border-primary w-full hover:text-white text-[11px] lg:text-base flex items-center p-3 px-4 lg:p-4 lg:px-6 text-white/40 border-style-decoration">
                          Price 1
                        </button>
                        <button className="hover:border-primary w-full hover:text-white text-[11px] lg:text-base flex items-center p-3 px-4 lg:p-4 lg:px-6 text-white/40 border-style-decoration">
                          Price 2
                        </button>
                        <button className="hover:border-primary w-full hover:text-white text-[11px] lg:text-base flex items-center p-3 px-4 lg:p-4 lg:px-6 text-white/40 border-style-decoration">
                          Price 3
                        </button>
                      </div>
                    )}
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
